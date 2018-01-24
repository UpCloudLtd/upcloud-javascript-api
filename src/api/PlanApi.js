/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AvailablePlanListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/AvailablePlanListResponse'),
    );
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.PlanApi = factory(
      root.upcloud.ApiClient,
      root.upcloud.AvailablePlanListResponse,
    );
  }
})(this, function(ApiClient, AvailablePlanListResponse) {
  'use strict';

  /**
   * Plan service.
   * @module api/PlanApi
   * @version 1.2.0
   */

  /**
   * Constructs a new PlanApi.
   * @alias module:api/PlanApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * List available plans
     * Returns a list of available plans.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AvailablePlanListResponse} and HTTP response
     */
    this.listPlansWithHttpInfo = function() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AvailablePlanListResponse;

      return this.apiClient.callApi(
        '/plan',
        'GET',
        pathParams,
        queryParams,
        collectionQueryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
      );
    };

    /**
     * List available plans
     * Returns a list of available plans.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AvailablePlanListResponse}
     */
    this.listPlans = function() {
      return this.listPlansWithHttpInfo().then(function(response_and_data) {
        return response_and_data.data;
      });
    };
  };

  return exports;
});
