/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.upcloud);
  }
})(this, function(expect, upcloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new upcloud.StorageApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();
    else return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);
    else object[property] = value;
  };

  describe('StorageApi', function() {
    describe('attachStorage', function() {
      it('should call attachStorage successfully', function() {
        const serverId = testServer.uuid;
        const storageDevice = { address: 'scsi:0:0', type: 'disk' };
        return instance.attachStorage(serverId, { storageDevice }).then(res => {
          let server = res.server;
          expect(
            server.storageDevices.storageDevice.some(
              item => item.storageTitle === 'Test create storage storage',
            ),
          ).to.be(true);
          server = instance.detachStorage(serverId, { address: 'scsi:0:0' })
            .server;
          expect(
            server.storageDevices.storageDevice.every(
              item => item.address !== 'scsi:0:0',
            ),
          ).to.be(true);
        });
      });
    });
    describe('backupStorage', function() {
      it('should call backupStorage successfully', function() {
        const storageId = testStorage.uuid;
        return instance
          .backupStorage(storageId, { title: 'Test backup' })
          .then(res => {
            const storage = res.storage;
            expect(testStorage.access).to.be(storage.access);
            expect(testStorage.license).to.be(storage.license);
            expect(testStorage.uuid).to.be(storage.uuid);
            expect('Test backup').to.be(storage.title);
          });
      });
    });
    describe('cancelOperation', function() {
      it('should call cancelOperation successfully', function() {
        const storageId = testStorage.uuid;
        const clonedStorage = {
          title: 'Cloned storage',
          zone: 'fi-hel1',
          tier: 'MAXIOPS',
        };
        return instance.clonedStorage(storageId, clonedStorage).then(res => {
          const clonedStorage = res.storage;
          instance.cancelOperation(clonedStorage.uuid);
          const clonedStorageId = clonedStorage.uuid;
          expect(
            instance.getStorageDetails(clonedStorageId).storage.state,
          ).to.be('maintenance');
        });
      });
    });
    describe('cloneStorage', function() {
      it('should call cloneStorage successfully', function() {
        const storageId = testStorage.uuid;
        const clonedStorage = {
          title: 'Cloned storage',
          zone: 'fi-hel1',
          tier: 'MAXIOPS',
        };
        return instance.cloneStorage(storageId, clonedStorage).then(res => {
          const clonedStorage = res.storage;
          expect(clonedStorage.origin).to.be(null);
          expect(clonedStorage.title).to.be('Cloned storage');
        });
      });
    });
    describe('createStorage', function() {
      it('should call createStorage successfully', function() {
        const storage = {
          tier: 'MAXIOPS',
          size: 10,
          title: 'Test create storage storage',
          zone: 'fi-hel1',
          backup_rule: {
            interval: 'daily',
            time: '0430',
            retention: 365,
          },
        };
        return instance.createStorage(storage).then(res => {
          const storage = res.storage;
          expect(storage.access).to.be('private');
          expect(storage.license).to.be('0');
          expect(storage.size).to.be(10);
          expect(storage.state).to.be('online');
          expect(storage.tier).to.be('MAXIOPS');
          expect(storage.title).to.be('Test create storage storage');
        });
      });
    });
    describe('deleteStorage', function() {
      it('should call deleteStorage successfully', function() {
        const storageId = testStorage.uuid;
        return instance.deleteStorage(storageId).then(res => {
          expect(() => {
            instance.getStorageDetails(storageId);
          }).to.throw();
        });
      });
    });
    describe('ejectCdrom', function() {
      it('should call ejectCdrom successfully', function() {
        const serverId = testServer.uuid;
        const storageDevice = {
          storage: testStorage.uuid,
          address: 'scsi:0:0',
          type: 'cdrom',
        };
        instance.attachStorage(serverId, { storageDevice });
        return instance.ejectCdrom(serverId).then(res => {
          return instance.detachStorage(serverId, { storageDevice });
        });
      });
    });
    describe('favoriteStorage', function() {
      it('should call favoriteStorage successfully', function() {
        const storageId = testStorage.uuid;
        return instance.listStorageTypes('favorite').then(res => {
          let favoritedStorages = res.storages.storage;
          const favoritesCount = favoritedStorages.length;
          instance.favoriteStorage(storageId);
          favoritedStorages = instance.listStorageTypes('favorite').storages
            .storage;
          expect(favoritesCount + 1).to.be(favoritedStorages.length);
        });
      });
    });
    describe('getStorageDetails', function() {
      it('should call getStorageDetails successfully', function() {
        const storageId = testStorage.uuid;
        return instance.getStorageDetails(storageId).then(res => {
          const storage = res.storage;
          expect(storage.title).to.be('Test create storage storage');
        });
      });
    });
    describe('listStorages', function() {
      it('should call listStorages successfully', function() {
        return instance.listStorages().then(res => {
          const storageList = res.storages.storage;
          expect(storageList.length).to.be.greaterThan(0);
          expect(
            storageList.some(
              storage => storage.title === 'Test create storage storage',
            ),
          ).to.be(true);
        });
      });
    });
    describe('modifyStorage', function() {
      it('should call modifyStorage successfully', function() {
        const storageId = testStorage.uuid;
        return instance
          .modifyStorage(storageId, { title: 'Modified title' })
          .then(res => {
            const modifiedStorage = res.storage;
            expect(modifiedStorage.title).to.be('Modified title');
          });
      });
    });
  });
});
