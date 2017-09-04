/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateStorageResponse', 'model/Error', 'model/ServerListResponse', 'model/Storage', 'model/Storage1', 'model/Storage2', 'model/Storage3', 'model/Storage4', 'model/StorageDevice', 'model/StorageDevice1', 'model/SuccessStoragesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateStorageResponse'), require('../model/Error'), require('../model/ServerListResponse'), require('../model/Storage'), require('../model/Storage1'), require('../model/Storage2'), require('../model/Storage3'), require('../model/Storage4'), require('../model/StorageDevice'), require('../model/StorageDevice1'), require('../model/SuccessStoragesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.StorageApi = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.CreateStorageResponse, root.UpcloudApi.Error, root.UpcloudApi.ServerListResponse, root.UpcloudApi.Storage, root.UpcloudApi.Storage1, root.UpcloudApi.Storage2, root.UpcloudApi.Storage3, root.UpcloudApi.Storage4, root.UpcloudApi.StorageDevice, root.UpcloudApi.StorageDevice1, root.UpcloudApi.SuccessStoragesResponse);
  }
}(this, function(ApiClient, CreateStorageResponse, Error, ServerListResponse, Storage, Storage1, Storage2, Storage3, Storage4, StorageDevice, StorageDevice1, SuccessStoragesResponse) {
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
     * Callback function to receive the result of the attachStorage operation.
     * @callback module:api/StorageApi~attachStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach storage
     * Attaches a storage as a device to a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @param {module:api/StorageApi~attachStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.attachStorage = function(serverId, storageDevice, callback) {
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
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/attach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the backupStorage operation.
     * @callback module:api/StorageApi~backupStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateStorageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create backup
     * Creates a point-in-time backup of a storage resource. For automatic, scheduled backups, see  &#x60;backup_rule&#x60; in Create storage or Modify storage.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage4} opts.storage 
     * @param {module:api/StorageApi~backupStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateStorageResponse}
     */
    this.backupStorage = function(storageId, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelOperation operation.
     * @callback module:api/StorageApi~cancelOperationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel storage operation
     * Cancels a running cloning operation and deletes the incomplete copy.
     * @param {String} storageId Strage id
     * @param {module:api/StorageApi~cancelOperationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cancelOperation = function(storageId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cloneStorage operation.
     * @callback module:api/StorageApi~cloneStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateStorageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone storage
     * Creates an exact copy of an existing storage resource.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage2} opts.storage 
     * @param {module:api/StorageApi~cloneStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateStorageResponse}
     */
    this.cloneStorage = function(storageId, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createStorage operation.
     * @callback module:api/StorageApi~createStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateStorageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create storage
     * Creates a new storage resource.
     * @param {module:model/Storage} storage 
     * @param {module:api/StorageApi~createStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateStorageResponse}
     */
    this.createStorage = function(storage, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStorage operation.
     * @callback module:api/StorageApi~deleteStorageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete storage
     * Deleted an existing storage resource.
     * @param {String} storageId 
     * @param {module:api/StorageApi~deleteStorageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteStorage = function(storageId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the detachStorage operation.
     * @callback module:api/StorageApi~detachStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detach storage
     * Detaches a storage resource from a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @param {module:api/StorageApi~detachStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.detachStorage = function(serverId, storageDevice, callback) {
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
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/detach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ejectCdrom operation.
     * @callback module:api/StorageApi~ejectCdromCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Eject CD-ROM
     * Ejects the storage from the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @param {module:api/StorageApi~ejectCdromCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.ejectCdrom = function(serverId, callback) {
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
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/cdrom/eject', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the favoriteStorage operation.
     * @callback module:api/StorageApi~favoriteStorageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add storage to favorites
     * Adds a storage to the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.
     * @param {String} storageId Storage id
     * @param {module:api/StorageApi~favoriteStorageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.favoriteStorage = function(storageId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorageDetails operation.
     * @callback module:api/StorageApi~getStorageDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateStorageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storage details
     * Returns detailed information about a specific storage resource.
     * @param {String} storageId 
     * @param {module:api/StorageApi~getStorageDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateStorageResponse}
     */
    this.getStorageDetails = function(storageId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listStorageTypes operation.
     * @callback module:api/StorageApi~listStorageTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessStoragesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of storages by type
     * @param {module:model/String} type Storage&#39;s access type (&#x60;public&#x60; or &#x60;private&#x60;) or storage type (&#x60;normal&#x60;, &#x60;backup&#x60;, &#x60;cdrom&#x60; or &#x60;template&#x60;) or &#x60;favorite&#x60; status
     * @param {module:api/StorageApi~listStorageTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessStoragesResponse}
     */
    this.listStorageTypes = function(type, callback) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling listStorageTypes");
      }


      var pathParams = {
        'Type': type
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
        '/storage/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listStorages operation.
     * @callback module:api/StorageApi~listStoragesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessStoragesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of storages
     * @param {module:api/StorageApi~listStoragesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessStoragesResponse}
     */
    this.listStorages = function(callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loadCdrom operation.
     * @callback module:api/StorageApi~loadCdromCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load CD-ROM
     * Loads a storage as a CD-ROM in the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @param {Object} opts Optional parameters
     * @param {module:model/StorageDevice1} opts.storageDevice 
     * @param {module:api/StorageApi~loadCdromCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.loadCdrom = function(serverId, opts, callback) {
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
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/storage/cdrom/load', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyStorage operation.
     * @callback module:api/StorageApi~modifyStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateStorageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify storage
     * Modifies an existing storage resource. This operation is used to rename or resize the storage.
     * @param {String} storageId 
     * @param {module:model/Storage1} storage 
     * @param {module:api/StorageApi~modifyStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateStorageResponse}
     */
    this.modifyStorage = function(storageId, storage, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the restoreStorage operation.
     * @callback module:api/StorageApi~restoreStorageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore backup
     * Restores the origin storage with data from the specified backup storage.
     * @param {String} storageId Storage id
     * @param {module:api/StorageApi~restoreStorageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.restoreStorage = function(storageId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the templatizeStorage operation.
     * @callback module:api/StorageApi~templatizeStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateStorageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Templatize storage
     * Creates an exact copy of an existing storage resource which can be used as a template for creating new servers.
     * @param {String} storageId Storage id
     * @param {Object} opts Optional parameters
     * @param {module:model/Storage3} opts.storage 
     * @param {module:api/StorageApi~templatizeStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateStorageResponse}
     */
    this.templatizeStorage = function(storageId, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unfavoriteStorage operation.
     * @callback module:api/StorageApi~unfavoriteStorageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove storage from favorites
     * Delete a storage from the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.
     * @param {String} storageId Storage id
     * @param {module:api/StorageApi~unfavoriteStorageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.unfavoriteStorage = function(storageId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
