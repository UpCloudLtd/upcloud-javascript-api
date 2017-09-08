/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/FirewallRule', 'model/FirewallRuleDetailsResponse', 'model/FirewallRuleListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/FirewallRule'), require('../model/FirewallRuleDetailsResponse'), require('../model/FirewallRuleListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.FirewallApi = factory(root.upcloud.ApiClient, root.upcloud.Error, root.upcloud.FirewallRule, root.upcloud.FirewallRuleDetailsResponse, root.upcloud.FirewallRuleListResponse);
  }
}(this, function(ApiClient, Error, FirewallRule, FirewallRuleDetailsResponse, FirewallRuleListResponse) {
  'use strict';

  /**
   * Firewall service.
   * @module api/FirewallApi
   * @version 1.2.0
   */

  /**
   * Constructs a new FirewallApi. 
   * @alias module:api/FirewallApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createFirewallRule operation.
     * @callback module:api/FirewallApi~createFirewallRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create firewall rule
     * Creates a new firewall rule
     * @param {String} serverId Server id
     * @param {module:model/FirewallRule} firewallRule 
     * @param {module:api/FirewallApi~createFirewallRuleCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the deleteFirewallRule operation.
     * @callback module:api/FirewallApi~deleteFirewallRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove firewall rule
     * Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.
     * @param {String} serverId Server id
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @param {module:api/FirewallApi~deleteFirewallRuleCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getFirewallRule operation.
     * @callback module:api/FirewallApi~getFirewallRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirewallRuleDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get firewall rule details
     * Returns detailed information about a specific firewall rule
     * @param {String} serverId Server id
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @param {module:api/FirewallApi~getFirewallRuleCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the serverServerIdFirewallRuleGet operation.
     * @callback module:api/FirewallApi~serverServerIdFirewallRuleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirewallRuleListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List firewall rules
     * Returns a list of firewall rules for a specific server.
     * @param {String} serverId Server id
     * @param {module:api/FirewallApi~serverServerIdFirewallRuleGetCallback} callback The callback function, accepting three arguments: error, data, response
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
  };

  return exports;
}));
