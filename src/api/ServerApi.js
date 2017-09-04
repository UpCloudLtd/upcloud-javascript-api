/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConfigurationListResponse', 'model/Error', 'model/FirewallRule', 'model/FirewallRuleDetailsResponse', 'model/FirewallRuleListResponse', 'model/RestartServer', 'model/Server', 'model/ServerListResponse', 'model/StopServer', 'model/StorageDevice', 'model/StorageDevice1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConfigurationListResponse'), require('../model/Error'), require('../model/FirewallRule'), require('../model/FirewallRuleDetailsResponse'), require('../model/FirewallRuleListResponse'), require('../model/RestartServer'), require('../model/Server'), require('../model/ServerListResponse'), require('../model/StopServer'), require('../model/StorageDevice'), require('../model/StorageDevice1'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.ServerApi = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.ConfigurationListResponse, root.UpcloudApi.Error, root.UpcloudApi.FirewallRule, root.UpcloudApi.FirewallRuleDetailsResponse, root.UpcloudApi.FirewallRuleListResponse, root.UpcloudApi.RestartServer, root.UpcloudApi.Server, root.UpcloudApi.ServerListResponse, root.UpcloudApi.StopServer, root.UpcloudApi.StorageDevice, root.UpcloudApi.StorageDevice1);
  }
}(this, function(ApiClient, ConfigurationListResponse, Error, FirewallRule, FirewallRuleDetailsResponse, FirewallRuleListResponse, RestartServer, Server, ServerListResponse, StopServer, StorageDevice, StorageDevice1) {
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
     * Callback function to receive the result of the assignTag operation.
     * @callback module:api/ServerApi~assignTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign tag to a server
     * Servers can be tagged with one or more tags. The tags used must exist
     * @param {String} serverId Server id
     * @param {String} tagList List of tags
     * @param {module:api/ServerApi~assignTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.assignTag = function(serverId, tagList, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/tag/{tagList}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the attachStorage operation.
     * @callback module:api/ServerApi~attachStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach storage
     * Attaches a storage as a device to a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @param {module:api/ServerApi~attachStorageCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the createFirewallRule operation.
     * @callback module:api/ServerApi~createFirewallRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create firewall rule
     * Creates a new firewall rule
     * @param {String} serverId Server id
     * @param {module:model/FirewallRule} firewallRule 
     * @param {module:api/ServerApi~createFirewallRuleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createFirewallRule = function(serverId, firewallRule, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createServer operation.
     * @callback module:api/ServerApi~createServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create server
     * Creates a new server instance.
     * @param {Object} opts Optional parameters
     * @param {module:model/Server} opts.server 
     * @param {module:api/ServerApi~createServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.createServer = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFirewallRule operation.
     * @callback module:api/ServerApi~deleteFirewallRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove firewall rule
     * Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.
     * @param {String} serverId Server id
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @param {module:api/ServerApi~deleteFirewallRuleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFirewallRule = function(serverId, firewallRuleNumber, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule/{firewallRuleNumber}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServer operation.
     * @callback module:api/ServerApi~deleteServerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete server
     * @param {String} serverId Id of server to delete
     * @param {module:api/ServerApi~deleteServerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteServer = function(serverId, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/server/{serverId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the detachStorage operation.
     * @callback module:api/ServerApi~detachStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detach storage
     * Detaches a storage resource from a server.
     * @param {String} serverId Server id
     * @param {module:model/StorageDevice} storageDevice 
     * @param {module:api/ServerApi~detachStorageCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ServerApi~ejectCdromCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Eject CD-ROM
     * Ejects the storage from the CD-ROM device of a server.
     * @param {String} serverId Server id
     * @param {module:api/ServerApi~ejectCdromCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getFirewallRule operation.
     * @callback module:api/ServerApi~getFirewallRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirewallRuleDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get firewall rule details
     * Returns detailed information about a specific firewall rule
     * @param {String} serverId Server id
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @param {module:api/ServerApi~getFirewallRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirewallRuleDetailsResponse}
     */
    this.getFirewallRule = function(serverId, firewallRuleNumber, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallRuleDetailsResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule/{firewallRuleNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listServerConfigurations operation.
     * @callback module:api/ServerApi~listServerConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfigurationListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List server configurations
     * Returns a list of available server configurations. A server configuration consists of a combination of CPU core count and main memory amount. All servers are created using these configurations.
     * @param {module:api/ServerApi~listServerConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConfigurationListResponse}
     */
    this.listServerConfigurations = function(callback) {
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
      var returnType = ConfigurationListResponse;

      return this.apiClient.callApi(
        '/server_size', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listServers operation.
     * @callback module:api/ServerApi~listServersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of servers
     * Returns a list of all servers associated with the current account.
     * @param {module:api/ServerApi~listServersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.listServers = function(callback) {
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
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loadCdrom operation.
     * @callback module:api/ServerApi~loadCdromCallback
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
     * @param {module:api/ServerApi~loadCdromCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the modifyServer operation.
     * @callback module:api/ServerApi~modifyServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify server
     * @param {String} serverId Id of server to modify
     * @param {Object} opts Optional parameters
     * @param {module:model/Server} opts.server 
     * @param {module:api/ServerApi~modifyServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.modifyServer = function(serverId, opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the restartServer operation.
     * @callback module:api/ServerApi~restartServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restart server
     * Stops and starts a server. The server state must be &#x60;started&#x60;.
     * @param {String} serverId Id of server to restart
     * @param {module:model/RestartServer} restartServer 
     * @param {module:api/ServerApi~restartServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.restartServer = function(serverId, restartServer, callback) {
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
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/restart', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the serverDetails operation.
     * @callback module:api/ServerApi~serverDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get server details
     * Returns detailed information about a specific server.
     * @param {String} serverId Id of server to return
     * @param {module:api/ServerApi~serverDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.serverDetails = function(serverId, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the serverServerIdFirewallRuleGet operation.
     * @callback module:api/ServerApi~serverServerIdFirewallRuleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirewallRuleListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List firewall rules
     * Returns a list of firewall rules for a specific server.
     * @param {String} serverId Server id
     * @param {module:api/ServerApi~serverServerIdFirewallRuleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirewallRuleListResponse}
     */
    this.serverServerIdFirewallRuleGet = function(serverId, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallRuleListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/firewall_rule', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startServer operation.
     * @callback module:api/ServerApi~startServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start server
     * Starts a stopped server. The server state must be &#x60;stopped&#x60;.
     * @param {String} serverId Id of server to start
     * @param {module:api/ServerApi~startServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.startServer = function(serverId, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/start', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the stopServer operation.
     * @callback module:api/ServerApi~stopServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop server
     * Stops a started server. The server state must be &#x60;started&#x60;.
     * @param {String} serverId Id of server to stop
     * @param {module:model/StopServer} stopServer 
     * @param {module:api/ServerApi~stopServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.stopServer = function(serverId, stopServer, callback) {
      var postBody = stopServer;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling stopServer");
      }

      // verify the required parameter 'stopServer' is set
      if (stopServer === undefined || stopServer === null) {
        throw new Error("Missing the required parameter 'stopServer' when calling stopServer");
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
        '/server/{serverId}/stop', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the untag operation.
     * @callback module:api/ServerApi~untagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove tag from server
     * Untags tags from given server. The tag(s) must exist
     * @param {String} serverId Server id
     * @param {String} tagName Tag name
     * @param {module:api/ServerApi~untagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    this.untag = function(serverId, tagName, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/untag/{tagName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
