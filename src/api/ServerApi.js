/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AttachStorageDeviceRequest', 'model/ConfigurationListResponse', 'model/CreateServerRequest', 'model/CreateServerResponse', 'model/Error', 'model/FirewallRuleCreateResponse', 'model/FirewallRuleListResponse', 'model/FirewallRuleRequest', 'model/RestartServer', 'model/Server', 'model/ServerListResponse', 'model/StopServer', 'model/StorageDeviceDetachRequest', 'model/StorageDeviceLoadRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AttachStorageDeviceRequest'), require('../model/ConfigurationListResponse'), require('../model/CreateServerRequest'), require('../model/CreateServerResponse'), require('../model/Error'), require('../model/FirewallRuleCreateResponse'), require('../model/FirewallRuleListResponse'), require('../model/FirewallRuleRequest'), require('../model/RestartServer'), require('../model/Server'), require('../model/ServerListResponse'), require('../model/StopServer'), require('../model/StorageDeviceDetachRequest'), require('../model/StorageDeviceLoadRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.ServerApi = factory(root.upcloud.ApiClient, root.upcloud.AttachStorageDeviceRequest, root.upcloud.ConfigurationListResponse, root.upcloud.CreateServerRequest, root.upcloud.CreateServerResponse, root.upcloud.Error, root.upcloud.FirewallRuleCreateResponse, root.upcloud.FirewallRuleListResponse, root.upcloud.FirewallRuleRequest, root.upcloud.RestartServer, root.upcloud.Server, root.upcloud.ServerListResponse, root.upcloud.StopServer, root.upcloud.StorageDeviceDetachRequest, root.upcloud.StorageDeviceLoadRequest);
  }
}(this, function(ApiClient, AttachStorageDeviceRequest, ConfigurationListResponse, CreateServerRequest, CreateServerResponse, Error, FirewallRuleCreateResponse, FirewallRuleListResponse, FirewallRuleRequest, RestartServer, Server, ServerListResponse, StopServer, StorageDeviceDetachRequest, StorageDeviceLoadRequest) {
  'use strict';

  /**
   * Server service.
   * @module api/ServerApi
   * @version 1.2.0
   */

  /**
   * Constructs a new ServerApi. 
   * @alias module:api/ServerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Assign tag to a server
     * Servers can be tagged with one or more tags. The tags used must exist
     * @param {String} serverId Server id
     * @param {String} tagList List of tags
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.assignTagWithHttpInfo = function(serverId, tagList) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling assignTag");
      }

      // verify the required parameter 'tagList' is set
      if (tagList === undefined || tagList === null) {
        throw new Error("Missing the required parameter 'tagList' when calling assignTag");
      }


      var pathParams = {
        'serverId': serverId,
        'tagList': tagList
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/tag/{tagList}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Assign tag to a server
     * Servers can be tagged with one or more tags. The tags used must exist
     * @param {String} serverId Server id
     * @param {String} tagList List of tags
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.assignTag = function(serverId, tagList) {
      return this.assignTagWithHttpInfo(serverId, tagList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Attach storage
     * Attaches a storage as a device to a server.
     * @param {String} serverId Server id
     * @param {module:model/AttachStorageDeviceRequest} storageDevice 
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

      var authNames = ['baseAuth'];
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
     * @param {module:model/AttachStorageDeviceRequest} storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.attachStorage = function(serverId, storageDevice) {
      return this.attachStorageWithHttpInfo(serverId, storageDevice)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create firewall rule
     * Creates a new firewall rule
     * @param {String} serverId Server id
     * @param {module:model/FirewallRuleRequest} firewallRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRuleCreateResponse} and HTTP response
     */
    this.createFirewallRuleWithHttpInfo = function(serverId, firewallRule) {
      var postBody = firewallRule;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling createFirewallRule");
      }

      // verify the required parameter 'firewallRule' is set
      if (firewallRule === undefined || firewallRule === null) {
        throw new Error("Missing the required parameter 'firewallRule' when calling createFirewallRule");
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallRuleCreateResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create firewall rule
     * Creates a new firewall rule
     * @param {String} serverId Server id
     * @param {module:model/FirewallRuleRequest} firewallRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRuleCreateResponse}
     */
    this.createFirewallRule = function(serverId, firewallRule) {
      return this.createFirewallRuleWithHttpInfo(serverId, firewallRule)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create server
     * Creates a new server instance.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateServerRequest} opts.server 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.createServerWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['server'];


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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create server
     * Creates a new server instance.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateServerRequest} opts.server 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.createServer = function(opts) {
      return this.createServerWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove firewall rule
     * Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.
     * @param {String} serverId Server id
     * @param {Number} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteFirewallRuleWithHttpInfo = function(serverId, firewallRuleNumber) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling deleteFirewallRule");
      }

      // verify the required parameter 'firewallRuleNumber' is set
      if (firewallRuleNumber === undefined || firewallRuleNumber === null) {
        throw new Error("Missing the required parameter 'firewallRuleNumber' when calling deleteFirewallRule");
      }


      var pathParams = {
        'serverId': serverId,
        'firewallRuleNumber': firewallRuleNumber
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule/{firewallRuleNumber}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove firewall rule
     * Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.
     * @param {String} serverId Server id
     * @param {Number} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteFirewallRule = function(serverId, firewallRuleNumber) {
      return this.deleteFirewallRuleWithHttpInfo(serverId, firewallRuleNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete server
     * @param {String} serverId Id of server to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteServerWithHttpInfo = function(serverId) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling deleteServer");
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/server/{serverId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete server
     * @param {String} serverId Id of server to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteServer = function(serverId) {
      return this.deleteServerWithHttpInfo(serverId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Detach storage
     * Detaches a storage resource from a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDeviceDetachRequest} storageDevice 
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

      var authNames = ['baseAuth'];
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
     * @param {module:model/StorageDeviceDetachRequest} storageDevice 
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/server/{serverId}/cdrom/eject', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Eject CD-ROM
     * Ejects the storage from the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.ejectCdrom = function(serverId) {
      return this.ejectCdromWithHttpInfo(serverId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get firewall rule details
     * Returns detailed information about a specific firewall rule
     * @param {String} serverId Server id
     * @param {Number} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRuleCreateResponse} and HTTP response
     */
    this.getFirewallRuleWithHttpInfo = function(serverId, firewallRuleNumber) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling getFirewallRule");
      }

      // verify the required parameter 'firewallRuleNumber' is set
      if (firewallRuleNumber === undefined || firewallRuleNumber === null) {
        throw new Error("Missing the required parameter 'firewallRuleNumber' when calling getFirewallRule");
      }


      var pathParams = {
        'serverId': serverId,
        'firewallRuleNumber': firewallRuleNumber
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallRuleCreateResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule/{firewallRuleNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get firewall rule details
     * Returns detailed information about a specific firewall rule
     * @param {String} serverId Server id
     * @param {Number} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRuleCreateResponse}
     */
    this.getFirewallRule = function(serverId, firewallRuleNumber) {
      return this.getFirewallRuleWithHttpInfo(serverId, firewallRuleNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List server configurations
     * Returns a list of available server configurations. A server configuration consists of a combination of CPU core count and main memory amount. All servers are created using these configurations.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigurationListResponse} and HTTP response
     */
    this.listServerConfigurationsWithHttpInfo = function() {
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConfigurationListResponse;

      return this.apiClient.callApi(
        '/server_size', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List server configurations
     * Returns a list of available server configurations. A server configuration consists of a combination of CPU core count and main memory amount. All servers are created using these configurations.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigurationListResponse}
     */
    this.listServerConfigurations = function() {
      return this.listServerConfigurationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of servers
     * Returns a list of all servers associated with the current account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServerListResponse} and HTTP response
     */
    this.listServersWithHttpInfo = function() {
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of servers
     * Returns a list of all servers associated with the current account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServerListResponse}
     */
    this.listServers = function() {
      return this.listServersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Load CD-ROM
     * Loads a storage as a CD-ROM in the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @param {Object} opts Optional parameters
     * @param {module:model/StorageDeviceLoadRequest} opts.storageDevice 
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

      var authNames = ['baseAuth'];
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
     * @param {module:model/StorageDeviceLoadRequest} opts.storageDevice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.loadCdrom = function(serverId, opts) {
      return this.loadCdromWithHttpInfo(serverId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify server
     * @param {String} serverId Id of server to modify
     * @param {Object} opts Optional parameters
     * @param {module:model/Server} opts.server 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.modifyServerWithHttpInfo = function(serverId, opts) {
      opts = opts || {};
      var postBody = opts['server'];

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling modifyServer");
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify server
     * @param {String} serverId Id of server to modify
     * @param {Object} opts Optional parameters
     * @param {module:model/Server} opts.server 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.modifyServer = function(serverId, opts) {
      return this.modifyServerWithHttpInfo(serverId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Restart server
     * Stops and starts a server. The server state must be &#x60;started&#x60;.
     * @param {String} serverId Id of server to restart
     * @param {module:model/RestartServer} restartServer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.restartServerWithHttpInfo = function(serverId, restartServer) {
      var postBody = restartServer;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling restartServer");
      }

      // verify the required parameter 'restartServer' is set
      if (restartServer === undefined || restartServer === null) {
        throw new Error("Missing the required parameter 'restartServer' when calling restartServer");
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
        '/server/{serverId}/restart', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Restart server
     * Stops and starts a server. The server state must be &#x60;started&#x60;.
     * @param {String} serverId Id of server to restart
     * @param {module:model/RestartServer} restartServer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.restartServer = function(serverId, restartServer) {
      return this.restartServerWithHttpInfo(serverId, restartServer)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get server details
     * Returns detailed information about a specific server.
     * @param {String} serverId Id of server to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.serverDetailsWithHttpInfo = function(serverId) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling serverDetails");
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get server details
     * Returns detailed information about a specific server.
     * @param {String} serverId Id of server to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.serverDetails = function(serverId) {
      return this.serverDetailsWithHttpInfo(serverId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List firewall rules
     * Returns a list of firewall rules for a specific server.
     * @param {String} serverId Server id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRuleListResponse} and HTTP response
     */
    this.serverServerIdFirewallRuleGetWithHttpInfo = function(serverId) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling serverServerIdFirewallRuleGet");
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallRuleListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List firewall rules
     * Returns a list of firewall rules for a specific server.
     * @param {String} serverId Server id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRuleListResponse}
     */
    this.serverServerIdFirewallRuleGet = function(serverId) {
      return this.serverServerIdFirewallRuleGetWithHttpInfo(serverId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Start server
     * Starts a stopped server. The server state must be &#x60;stopped&#x60;.
     * @param {String} serverId Id of server to start
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.startServerWithHttpInfo = function(serverId) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling startServer");
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/start', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Start server
     * Starts a stopped server. The server state must be &#x60;stopped&#x60;.
     * @param {String} serverId Id of server to start
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.startServer = function(serverId) {
      return this.startServerWithHttpInfo(serverId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Stop server
     * Stops a started server. The server state must be &#x60;started&#x60;.
     * @param {String} serverId Id of server to stop
     * @param {module:model/StopServer} stopServerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.stopServerWithHttpInfo = function(serverId, stopServerRequest) {
      var postBody = stopServerRequest;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling stopServer");
      }

      // verify the required parameter 'stopServerRequest' is set
      if (stopServerRequest === undefined || stopServerRequest === null) {
        throw new Error("Missing the required parameter 'stopServerRequest' when calling stopServer");
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/stop', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Stop server
     * Stops a started server. The server state must be &#x60;started&#x60;.
     * @param {String} serverId Id of server to stop
     * @param {module:model/StopServer} stopServerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.stopServer = function(serverId, stopServerRequest) {
      return this.stopServerWithHttpInfo(serverId, stopServerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove tag from server
     * Untags tags from given server. The tag(s) must exist
     * @param {String} serverId Server id
     * @param {String} tagName Tag name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateServerResponse} and HTTP response
     */
    this.untagWithHttpInfo = function(serverId, tagName) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling untag");
      }

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling untag");
      }


      var pathParams = {
        'serverId': serverId,
        'tagName': tagName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/untag/{tagName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove tag from server
     * Untags tags from given server. The tag(s) must exist
     * @param {String} serverId Server id
     * @param {String} tagName Tag name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.untag = function(serverId, tagName) {
      return this.untagWithHttpInfo(serverId, tagName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
