/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PriceListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PriceListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.PricesApi = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.PriceListResponse);
  }
}(this, function(ApiClient, PriceListResponse) {
  'use strict';

  /**
   * Prices service.
   * @module api/PricesApi
   * @version 1.2.0
   */

  /**
   * Constructs a new PricesApi. 
   * @alias module:api/PricesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listPrices operation.
     * @callback module:api/PricesApi~listPricesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List prices
     * Returns a list resource prices.
     * @param {module:api/PricesApi~listPricesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceListResponse}
     */
    this.listPrices = function(callback) {
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
      var contentTypes = [];
      var accepts = [];
      var returnType = PriceListResponse;

      return this.apiClient.callApi(
        '/price', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
