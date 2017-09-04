/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TimezoneListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TimezoneListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.TimezoneApi = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.TimezoneListResponse);
  }
}(this, function(ApiClient, TimezoneListResponse) {
  'use strict';

  /**
   * Timezone service.
   * @module api/TimezoneApi
   * @version 1.2.0
   */

  /**
   * Constructs a new TimezoneApi. 
   * @alias module:api/TimezoneApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listTimezones operation.
     * @callback module:api/TimezoneApi~listTimezonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimezoneListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List timezones
     * Returns a list of available timezones. Timezones are used to set the hardware clock for servers.
     * @param {module:api/TimezoneApi~listTimezonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimezoneListResponse}
     */
    this.listTimezones = function(callback) {
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
      var returnType = TimezoneListResponse;

      return this.apiClient.callApi(
        '/timezone', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
