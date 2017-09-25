/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/FirewallRuleCreateResponse', 'model/FirewallRuleListResponse', 'model/FirewallRuleRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/FirewallRuleCreateResponse'), require('../model/FirewallRuleListResponse'), require('../model/FirewallRuleRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.FirewallApi = factory(root.upcloud.ApiClient, root.upcloud.Error, root.upcloud.FirewallRuleCreateResponse, root.upcloud.FirewallRuleListResponse, root.upcloud.FirewallRuleRequest);
  }
}(this, function(ApiClient, Error, FirewallRuleCreateResponse, FirewallRuleListResponse, FirewallRuleRequest) {
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

      var authNames = [];
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
     * Remove firewall rule
     * Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.
     * @param {String} serverId Server id
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
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

      var authNames = [];
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
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteFirewallRule = function(serverId, firewallRuleNumber) {
      return this.deleteFirewallRuleWithHttpInfo(serverId, firewallRuleNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get firewall rule details
     * Returns detailed information about a specific firewall rule
     * @param {String} serverId Server id
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
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

      var authNames = [];
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
     * @param {String} firewallRuleNumber Denotes the index of the firewall rule in the server&#39;s firewall rule list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRuleCreateResponse}
     */
    this.getFirewallRule = function(serverId, firewallRuleNumber) {
      return this.getFirewallRuleWithHttpInfo(serverId, firewallRuleNumber)
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

      var authNames = [];
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
  };

  return exports;
}));
