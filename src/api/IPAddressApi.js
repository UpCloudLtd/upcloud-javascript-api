/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddIpRequest', 'model/AssignIpResponse', 'model/Error', 'model/IpAddressListResponse', 'model/ModifyIpRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddIpRequest'), require('../model/AssignIpResponse'), require('../model/Error'), require('../model/IpAddressListResponse'), require('../model/ModifyIpRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.IPAddressApi = factory(root.upcloud.ApiClient, root.upcloud.AddIpRequest, root.upcloud.AssignIpResponse, root.upcloud.Error, root.upcloud.IpAddressListResponse, root.upcloud.ModifyIpRequest);
  }
}(this, function(ApiClient, AddIpRequest, AssignIpResponse, Error, IpAddressListResponse, ModifyIpRequest) {
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
     * Assign IP address
     * Assigns a new IP address to a server.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddIpRequest} opts.ipAddress 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssignIpResponse} and HTTP response
     */
    this.addIpWithHttpInfo = function(opts) {
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssignIpResponse;

      return this.apiClient.callApi(
        '/ip_address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Assign IP address
     * Assigns a new IP address to a server.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddIpRequest} opts.ipAddress 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssignIpResponse}
     */
    this.addIp = function(opts) {
      return this.addIpWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Release IP address
     * Removes an IP address from a server.
     * @param {String} ip Ip address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteIpWithHttpInfo = function(ip) {
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ip_address/{ip}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Release IP address
     * Removes an IP address from a server.
     * @param {String} ip Ip address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteIp = function(ip) {
      return this.deleteIpWithHttpInfo(ip)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get IP address details
     * Returns detailed information about a specific IP address.
     * @param {String} ip Ip address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssignIpResponse} and HTTP response
     */
    this.getDetailsWithHttpInfo = function(ip) {
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssignIpResponse;

      return this.apiClient.callApi(
        '/ip_address/{ip}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get IP address details
     * Returns detailed information about a specific IP address.
     * @param {String} ip Ip address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssignIpResponse}
     */
    this.getDetails = function(ip) {
      return this.getDetailsWithHttpInfo(ip)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List IP addresses
     * Returns a list of all IP addresses assigned to servers on the current user account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpAddressListResponse} and HTTP response
     */
    this.listIpsWithHttpInfo = function() {
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
      var returnType = IpAddressListResponse;

      return this.apiClient.callApi(
        '/ip_address', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List IP addresses
     * Returns a list of all IP addresses assigned to servers on the current user account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpAddressListResponse}
     */
    this.listIps = function() {
      return this.listIpsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify IP address
     * Modifies the reverse DNS PTR record corresponding to an IP address. The PTR record can only be set to public IP address.
     * @param {String} ip Ip address
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyIpRequest} opts.ipAddress 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssignIpResponse} and HTTP response
     */
    this.modifyIpWithHttpInfo = function(ip, opts) {
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

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssignIpResponse;

      return this.apiClient.callApi(
        '/ip_address/{ip}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify IP address
     * Modifies the reverse DNS PTR record corresponding to an IP address. The PTR record can only be set to public IP address.
     * @param {String} ip Ip address
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyIpRequest} opts.ipAddress 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssignIpResponse}
     */
    this.modifyIp = function(ip, opts) {
      return this.modifyIpWithHttpInfo(ip, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
