/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AssignIpResponse', 'model/Error', 'model/IpAddress', 'model/IpAddress1', 'model/IpAddressListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AssignIpResponse'), require('../model/Error'), require('../model/IpAddress'), require('../model/IpAddress1'), require('../model/IpAddressListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.IPAddressApi = factory(root.upcloud.ApiClient, root.upcloud.AssignIpResponse, root.upcloud.Error, root.upcloud.IpAddress, root.upcloud.IpAddress1, root.upcloud.IpAddressListResponse);
  }
}(this, function(ApiClient, AssignIpResponse, Error, IpAddress, IpAddress1, IpAddressListResponse) {
  'use strict';

  /**
   * IPAddress service.
   * @module api/IPAddressApi
   * @version 1.2.0
   */

  /**
   * Constructs a new IPAddressApi. 
   * @alias module:api/IPAddressApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addIp operation.
     * @callback module:api/IPAddressApi~addIpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssignIpResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign IP address
     * Assigns a new IP address to a server.
     * @param {Object} opts Optional parameters
     * @param {module:model/IpAddress} opts.ipAddress 
     * @param {module:api/IPAddressApi~addIpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssignIpResponse}
     */
    this.addIp = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['ipAddress'];


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
      var returnType = AssignIpResponse;

      return this.apiClient.callApi(
        '/ip_address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteIp operation.
     * @callback module:api/IPAddressApi~deleteIpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Release IP address
     * Removes an IP address from a server.
     * @param {String} ip Ip address
     * @param {module:api/IPAddressApi~deleteIpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteIp = function(ip, callback) {
      var postBody = null;

      // verify the required parameter 'ip' is set
      if (ip === undefined || ip === null) {
        throw new Error("Missing the required parameter 'ip' when calling deleteIp");
      }


      var pathParams = {
        'ip': ip
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
        '/ip_address/{ip}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDetails operation.
     * @callback module:api/IPAddressApi~getDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssignIpResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get IP address details
     * Returns detailed information about a specific IP address.
     * @param {String} ip Ip address
     * @param {module:api/IPAddressApi~getDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssignIpResponse}
     */
    this.getDetails = function(ip, callback) {
      var postBody = null;

      // verify the required parameter 'ip' is set
      if (ip === undefined || ip === null) {
        throw new Error("Missing the required parameter 'ip' when calling getDetails");
      }


      var pathParams = {
        'ip': ip
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
      var returnType = AssignIpResponse;

      return this.apiClient.callApi(
        '/ip_address/{ip}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listIps operation.
     * @callback module:api/IPAddressApi~listIpsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IpAddressListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List IP addresses
     * Returns a list of all IP addresses assigned to servers on the current user account.
     * @param {module:api/IPAddressApi~listIpsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IpAddressListResponse}
     */
    this.listIps = function(callback) {
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
      var returnType = IpAddressListResponse;

      return this.apiClient.callApi(
        '/ip_address', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyIp operation.
     * @callback module:api/IPAddressApi~modifyIpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssignIpResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify IP address
     * Modifies the reverse DNS PTR record corresponding to an IP address. The PTR record can only be set to public IP address.
     * @param {String} ip Ip address
     * @param {Object} opts Optional parameters
     * @param {module:model/IpAddress1} opts.ipAddress 
     * @param {module:api/IPAddressApi~modifyIpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssignIpResponse}
     */
    this.modifyIp = function(ip, opts, callback) {
      opts = opts || {};
      var postBody = opts['ipAddress'];

      // verify the required parameter 'ip' is set
      if (ip === undefined || ip === null) {
        throw new Error("Missing the required parameter 'ip' when calling modifyIp");
      }


      var pathParams = {
        'ip': ip
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
      var returnType = AssignIpResponse;

      return this.apiClient.callApi(
        '/ip_address/{ip}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
