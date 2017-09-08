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
}(this, function(expect, upcloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new upcloud.StorageApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StorageApi', function() {
    describe('attachStorage', function() {
      it('should call attachStorage successfully', function(done) {
        //uncomment below and update the code to test attachStorage
        //instance.attachStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('backupStorage', function() {
      it('should call backupStorage successfully', function(done) {
        //uncomment below and update the code to test backupStorage
        //instance.backupStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelOperation', function() {
      it('should call cancelOperation successfully', function(done) {
        //uncomment below and update the code to test cancelOperation
        //instance.cancelOperation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cloneStorage', function() {
      it('should call cloneStorage successfully', function(done) {
        //uncomment below and update the code to test cloneStorage
        //instance.cloneStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStorage', function() {
      it('should call createStorage successfully', function(done) {
        //uncomment below and update the code to test createStorage
        //instance.createStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStorage', function() {
      it('should call deleteStorage successfully', function(done) {
        //uncomment below and update the code to test deleteStorage
        //instance.deleteStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachStorage', function() {
      it('should call detachStorage successfully', function(done) {
        //uncomment below and update the code to test detachStorage
        //instance.detachStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ejectCdrom', function() {
      it('should call ejectCdrom successfully', function(done) {
        //uncomment below and update the code to test ejectCdrom
        //instance.ejectCdrom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('favoriteStorage', function() {
      it('should call favoriteStorage successfully', function(done) {
        //uncomment below and update the code to test favoriteStorage
        //instance.favoriteStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStorageDetails', function() {
      it('should call getStorageDetails successfully', function(done) {
        //uncomment below and update the code to test getStorageDetails
        //instance.getStorageDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listStorageTypes', function() {
      it('should call listStorageTypes successfully', function(done) {
        //uncomment below and update the code to test listStorageTypes
        //instance.listStorageTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listStorages', function() {
      it('should call listStorages successfully', function(done) {
        //uncomment below and update the code to test listStorages
        //instance.listStorages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loadCdrom', function() {
      it('should call loadCdrom successfully', function(done) {
        //uncomment below and update the code to test loadCdrom
        //instance.loadCdrom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyStorage', function() {
      it('should call modifyStorage successfully', function(done) {
        //uncomment below and update the code to test modifyStorage
        //instance.modifyStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreStorage', function() {
      it('should call restoreStorage successfully', function(done) {
        //uncomment below and update the code to test restoreStorage
        //instance.restoreStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatizeStorage', function() {
      it('should call templatizeStorage successfully', function(done) {
        //uncomment below and update the code to test templatizeStorage
        //instance.templatizeStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unfavoriteStorage', function() {
      it('should call unfavoriteStorage successfully', function(done) {
        //uncomment below and update the code to test unfavoriteStorage
        //instance.unfavoriteStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
