/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateServerResponse', 'model/CreateStorageResponse', 'model/Error', 'model/Storage', 'model/Storage1', 'model/Storage2', 'model/Storage3', 'model/Storage4', 'model/StorageDevice', 'model/StorageDevice1', 'model/SuccessStoragesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateServerResponse'), require('../model/CreateStorageResponse'), require('../model/Error'), require('../model/Storage'), require('../model/Storage1'), require('../model/Storage2'), require('../model/Storage3'), require('../model/Storage4'), require('../model/StorageDevice'), require('../model/StorageDevice1'), require('../model/SuccessStoragesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.StorageApi = factory(root.upcloud.ApiClient, root.upcloud.CreateServerResponse, root.upcloud.CreateStorageResponse, root.upcloud.Error, root.upcloud.Storage, root.upcloud.Storage1, root.upcloud.Storage2, root.upcloud.Storage3, root.upcloud.Storage4, root.upcloud.StorageDevice, root.upcloud.StorageDevice1, root.upcloud.SuccessStoragesResponse);
  }
}(this, function(ApiClient, CreateServerResponse, CreateStorageResponse, Error, Storage, Storage1, Storage2, Storage3, Storage4, StorageDevice, StorageDevice1, SuccessStoragesResponse) {
  'use strict';

  /**
   * Storage service.
   * @module api/StorageApi
   * @version 1.2.0
   */

  /**
   * Constructs a new StorageApi. 
   * @alias module:api/StorageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach storage
     * Attaches a storage as a device to a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.attachStorageWithHttpInfo = function(serverId, storageDevice) {
      var postBody = storageDevice;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling attachStorage");
      }

      // verify the required parameter 'storageDevice' is set
      if (storageDevice === undefined || storageDevice === null) {
        throw new Error("Missing the required parameter 'storageDevice' when calling attachStorage");
      }


      var pathParams = {
        'serverId': serverId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/attach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach storage
     * Attaches a storage as a device to a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.attachStorage = function(serverId, storageDevice) {
      return this.attachStorageWithHttpInfo(serverId, storageDevice)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create backup
     * Creates a point-in-time backup of a storage resource. For automatic, scheduled backups, see  &#x60;backup_rule&#x60; in Create storage or Modify storage.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage4} opts.storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStorageResponse} and HTTP response
     */
    this.backupStorageWithHttpInfo = function(storageId, opts) {
      opts = opts || {};
      var postBody = opts['storage'];

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling backupStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateStorageResponse;

      return this.apiClient.callApi(
        '/storage/{storageId}/backup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create backup
     * Creates a point-in-time backup of a storage resource. For automatic, scheduled backups, see  &#x60;backup_rule&#x60; in Create storage or Modify storage.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage4} opts.storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStorageResponse}
     */
    this.backupStorage = function(storageId, opts) {
      return this.backupStorageWithHttpInfo(storageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancel storage operation
     * Cancels a running cloning operation and deletes the incomplete copy.
     * @param {String} storageId Strage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.cancelOperationWithHttpInfo = function(storageId) {
      var postBody = null;

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling cancelOperation");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/storage/{storageId}/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel storage operation
     * Cancels a running cloning operation and deletes the incomplete copy.
     * @param {String} storageId Strage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.cancelOperation = function(storageId) {
      return this.cancelOperationWithHttpInfo(storageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clone storage
     * Creates an exact copy of an existing storage resource.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage2} opts.storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStorageResponse} and HTTP response
     */
    this.cloneStorageWithHttpInfo = function(storageId, opts) {
      opts = opts || {};
      var postBody = opts['storage'];

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling cloneStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateStorageResponse;

      return this.apiClient.callApi(
        '/storage/{storageId}/clone', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clone storage
     * Creates an exact copy of an existing storage resource.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage2} opts.storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStorageResponse}
     */
    this.cloneStorage = function(storageId, opts) {
      return this.cloneStorageWithHttpInfo(storageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create storage
     * Creates a new storage resource.
     * @param {module:model/Storage} storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStorageResponse} and HTTP response
     */
    this.createStorageWithHttpInfo = function(storage) {
      var postBody = storage;

      // verify the required parameter 'storage' is set
      if (storage === undefined || storage === null) {
        throw new Error("Missing the required parameter 'storage' when calling createStorage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateStorageResponse;

      return this.apiClient.callApi(
        '/storage', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create storage
     * Creates a new storage resource.
     * @param {module:model/Storage} storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStorageResponse}
     */
    this.createStorage = function(storage) {
      return this.createStorageWithHttpInfo(storage)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete storage
     * Deleted an existing storage resource.
     * @param {String} storageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteStorageWithHttpInfo = function(storageId) {
      var postBody = null;

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling deleteStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/storage/{storageId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete storage
     * Deleted an existing storage resource.
     * @param {String} storageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteStorage = function(storageId) {
      return this.deleteStorageWithHttpInfo(storageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Detach storage
     * Detaches a storage resource from a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.detachStorageWithHttpInfo = function(serverId, storageDevice) {
      var postBody = storageDevice;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling detachStorage");
      }

      // verify the required parameter 'storageDevice' is set
      if (storageDevice === undefined || storageDevice === null) {
        throw new Error("Missing the required parameter 'storageDevice' when calling detachStorage");
      }


      var pathParams = {
        'serverId': serverId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/detach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach storage
     * Detaches a storage resource from a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.detachStorage = function(serverId, storageDevice) {
      return this.detachStorageWithHttpInfo(serverId, storageDevice)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Eject CD-ROM
     * Ejects the storage from the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.ejectCdromWithHttpInfo = function(serverId) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling ejectCdrom");
      }


      var pathParams = {
        'serverId': serverId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/cdrom/eject', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Eject CD-ROM
     * Ejects the storage from the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.ejectCdrom = function(serverId) {
      return this.ejectCdromWithHttpInfo(serverId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add storage to favorites
     * Adds a storage to the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.
     * @param {String} storageId Storage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.favoriteStorageWithHttpInfo = function(storageId) {
      var postBody = null;

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling favoriteStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/storage/{storageId}/favorite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add storage to favorites
     * Adds a storage to the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.
     * @param {String} storageId Storage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.favoriteStorage = function(storageId) {
      return this.favoriteStorageWithHttpInfo(storageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get storage details
     * Returns detailed information about a specific storage resource.
     * @param {String} storageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStorageResponse} and HTTP response
     */
    this.getStorageDetailsWithHttpInfo = function(storageId) {
      var postBody = null;

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling getStorageDetails");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateStorageResponse;

      return this.apiClient.callApi(
        '/storage/{storageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get storage details
     * Returns detailed information about a specific storage resource.
     * @param {String} storageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStorageResponse}
     */
    this.getStorageDetails = function(storageId) {
      return this.getStorageDetailsWithHttpInfo(storageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of storages by type
     * @param {module:model/String} type Storage&#39;s access type (&#x60;public&#x60; or &#x60;private&#x60;) or storage type (&#x60;normal&#x60;, &#x60;backup&#x60;, &#x60;cdrom&#x60; or &#x60;template&#x60;) or &#x60;favorite&#x60; status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SuccessStoragesResponse} and HTTP response
     */
    this.listStorageTypesWithHttpInfo = function(type) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling listStorageTypes");
      }


      var pathParams = {
        'type': type
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessStoragesResponse;

      return this.apiClient.callApi(
        '/storage/{type}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of storages by type
     * @param {module:model/String} type Storage&#39;s access type (&#x60;public&#x60; or &#x60;private&#x60;) or storage type (&#x60;normal&#x60;, &#x60;backup&#x60;, &#x60;cdrom&#x60; or &#x60;template&#x60;) or &#x60;favorite&#x60; status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SuccessStoragesResponse}
     */
    this.listStorageTypes = function(type) {
      return this.listStorageTypesWithHttpInfo(type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of storages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SuccessStoragesResponse} and HTTP response
     */
    this.listStoragesWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessStoragesResponse;

      return this.apiClient.callApi(
        '/storage', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of storages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SuccessStoragesResponse}
     */
    this.listStorages = function() {
      return this.listStoragesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Load CD-ROM
     * Loads a storage as a CD-ROM in the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @param {Object} opts Optional parameters
     * @param {module:model/StorageDevice1} opts.storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.loadCdromWithHttpInfo = function(serverId, opts) {
      opts = opts || {};
      var postBody = opts['storageDevice'];

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling loadCdrom");
      }


      var pathParams = {
        'serverId': serverId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/cdrom/load', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Load CD-ROM
     * Loads a storage as a CD-ROM in the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @param {Object} opts Optional parameters
     * @param {module:model/StorageDevice1} opts.storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.loadCdrom = function(serverId, opts) {
      return this.loadCdromWithHttpInfo(serverId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify storage
     * Modifies an existing storage resource. This operation is used to rename or resize the storage.
     * @param {String} storageId 
     * @param {module:model/Storage1} storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStorageResponse} and HTTP response
     */
    this.modifyStorageWithHttpInfo = function(storageId, storage) {
      var postBody = storage;

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling modifyStorage");
      }

      // verify the required parameter 'storage' is set
      if (storage === undefined || storage === null) {
        throw new Error("Missing the required parameter 'storage' when calling modifyStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateStorageResponse;

      return this.apiClient.callApi(
        '/storage/{storageId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify storage
     * Modifies an existing storage resource. This operation is used to rename or resize the storage.
     * @param {String} storageId 
     * @param {module:model/Storage1} storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStorageResponse}
     */
    this.modifyStorage = function(storageId, storage) {
      return this.modifyStorageWithHttpInfo(storageId, storage)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Restore backup
     * Restores the origin storage with data from the specified backup storage.
     * @param {String} storageId Storage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.restoreStorageWithHttpInfo = function(storageId) {
      var postBody = null;

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling restoreStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/storage/{storageId}/restore', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Restore backup
     * Restores the origin storage with data from the specified backup storage.
     * @param {String} storageId Storage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.restoreStorage = function(storageId) {
      return this.restoreStorageWithHttpInfo(storageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Templatize storage
     * Creates an exact copy of an existing storage resource which can be used as a template for creating new servers.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage3} opts.storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStorageResponse} and HTTP response
     */
    this.templatizeStorageWithHttpInfo = function(storageId, opts) {
      opts = opts || {};
      var postBody = opts['storage'];

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling templatizeStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateStorageResponse;

      return this.apiClient.callApi(
        '/storage/{storageId}/templatize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Templatize storage
     * Creates an exact copy of an existing storage resource which can be used as a template for creating new servers.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage3} opts.storage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStorageResponse}
     */
    this.templatizeStorage = function(storageId, opts) {
      return this.templatizeStorageWithHttpInfo(storageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove storage from favorites
     * Delete a storage from the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.
     * @param {String} storageId Storage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.unfavoriteStorageWithHttpInfo = function(storageId) {
      var postBody = null;

      // verify the required parameter 'storageId' is set
      if (storageId === undefined || storageId === null) {
        throw new Error("Missing the required parameter 'storageId' when calling unfavoriteStorage");
      }


      var pathParams = {
        'storageId': storageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/storage/{storageId}/favorite', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove storage from favorites
     * Delete a storage from the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.
     * @param {String} storageId Storage id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.unfavoriteStorage = function(storageId) {
      return this.unfavoriteStorageWithHttpInfo(storageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
