/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

import expect from 'expect.js';
import helpers from '../helpers';
import upcloud from '../../src/index';

var instance, testServer, testStorage;

describe('StorageApi', function() {
  beforeEach(async () => {
    try {
      instance = new upcloud.StorageApi();
      testStorage = (await instance.createStorage({
        storage: {
          title: 'Test create storage storage',
          zone: 'fi-hel2',
          size: 10,
          tier: 'maxiops',
          backup_rule: {
            interval: 'daily',
            time: '0430',
            retention: 365,
          },
        },
      })).storage;
    } catch (e) {
      console.error('Error: ', e);
    }
  });

  describe('attachStorage', function() {
    it('should call attachStorage successfully', async () => {
      testServer = await helpers.createServer();
      await helpers.stopServer(testServer.uuid);
      const serverId = testServer.uuid;
      const storage_device = {
        address: 'scsi:0:0',
        type: 'disk',
        storage: testStorage.uuid,
      };
      let { server } = await instance.attachStorage(serverId, {
        storage_device,
      });
      const test1 = server.storage_devices.storage_device.some(
        item => item.storage_title === 'Test create storage storage',
      );
      expect(test1).to.be(true);
      server = (await instance.detachStorage(serverId, {
        storage_device: {
          address: 'scsi:0:0',
        },
      })).server;
      const test2 = server.storage_devices.storage_device.every(
        item => item.address !== 'scsi:0:0',
      );
      expect(test2).to.be(true);
    });
  });
  describe('backupStorage', function() {
    it('should call backupStorage successfully', async () => {
      const storageId = testStorage.uuid;
      const { storage } = await instance.backupStorage(storageId, {
        storage: {
          title: 'Test backup',
        },
      });
      expect(testStorage.access).to.be(storage.access);
      expect(testStorage.license).to.be(storage.license);
      expect('Test backup').to.be(storage.title);
    });
  });
  describe('cloneStorage', function() {
    it('should call cloneStorage successfully', async () => {
      const storageId = testStorage.uuid;
      const storage = {
        title: 'Cloned storage',
        zone: 'fi-hel2',
        tier: 'maxiops',
      };
      const { storage: clonedStorage } = await instance.cloneStorage(
        storageId,
        { storage },
      );
      expect(clonedStorage.origin).to.be(undefined);
      expect(clonedStorage.title).to.be('Cloned storage');
    });
  });
  describe('createStorage', function() {
    it('should call createStorage successfully', async () => {
      const storageData = {
        tier: 'maxiops',
        size: 10,
        title: 'Test create storage storage',
        zone: 'fi-hel2',
        backup_rule: {
          interval: 'daily',
          time: '0430',
          retention: 365,
        },
      };
      const { storage } = await instance.createStorage({
        storage: storageData,
      });
      expect(storage.access).to.be('private');
      expect(storage.license).to.be(0);
      expect(storage.size).to.be(10);
      expect(storage.state).to.be('online');
      expect(storage.tier).to.be('maxiops');
      expect(storage.title).to.be('Test create storage storage');
    });
  });
  describe('deleteStorage', function() {
    it('should call deleteStorage successfully', async () => {
      const storageId = testStorage.uuid;
      await instance.deleteStorage(storageId);
      try {
        await instance.getStorageDetails(storageId);
      } catch (e) {
        expect(e.status).to.be(404);
      }
    });
  });
  describe('getStorageDetails', function() {
    it('should call getStorageDetails successfully', async () => {
      const storageId = testStorage.uuid;
      const { storage } = await instance.getStorageDetails(storageId);
      expect(storage.title).to.be('Test create storage storage');
    });
  });
  describe('listStorages', function() {
    it('should call listStorages successfully', async () => {
      const {
        storages: { storage: storageList },
      } = await instance.listStorages();
      expect(storageList.length).to.be.greaterThan(0);
      expect(
        storageList.some(
          storage => storage.title === 'Test create storage storage',
        ),
      ).to.be(true);
    });
  });
  describe('modifyStorage', function() {
    it('should call modifyStorage successfully', async () => {
      const storageId = testStorage.uuid;
      const { storage: modifiedStorage } = await instance.modifyStorage(
        storageId,
        { storage: { title: 'Modified title' } },
      );
      expect(modifiedStorage.title).to.be('Modified title');
    });
  });
});
