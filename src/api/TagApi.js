/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(
      [
        'ApiClient',
        'model/CreateNewTagResponse',
        'model/CreateServerResponse',
        'model/Error',
        'model/ModifyTagRequest',
        'model/TagCreateRequest',
        'model/TagListResponse',
      ],
      factory,
    );
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/CreateNewTagResponse'),
      require('../model/CreateServerResponse'),
      require('../model/Error'),
      require('../model/ModifyTagRequest'),
      require('../model/TagCreateRequest'),
      require('../model/TagListResponse'),
    );
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.TagApi = factory(
      root.upcloud.ApiClient,
      root.upcloud.CreateNewTagResponse,
      root.upcloud.CreateServerResponse,
      root.upcloud.Error,
      root.upcloud.ModifyTagRequest,
      root.upcloud.TagCreateRequest,
      root.upcloud.TagListResponse,
    );
  }
})(this, function(
  ApiClient,
  CreateNewTagResponse,
  CreateServerResponse,
  Error,
  ModifyTagRequest,
  TagCreateRequest,
  TagListResponse,
) {
  'use strict';

  /**
   * Tag service.
   * @module api/TagApi
   * @version 1.2.0
   */

  /**
   * Constructs a new TagApi.
   * @alias module:api/TagApi
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
        throw new Error(
          "Missing the required parameter 'serverId' when calling assignTag",
        );
      }

      // verify the required parameter 'tagList' is set
      if (tagList === undefined || tagList === null) {
        throw new Error(
          "Missing the required parameter 'tagList' when calling assignTag",
        );
      }

      var pathParams = {
        serverId: serverId,
        tagList: tagList,
      };
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/tag/{tagList}',
        'POST',
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
     * Assign tag to a server
     * Servers can be tagged with one or more tags. The tags used must exist
     * @param {String} serverId Server id
     * @param {String} tagList List of tags
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.assignTag = function(serverId, tagList) {
      return this.assignTagWithHttpInfo(serverId, tagList).then(function(
        response_and_data,
      ) {
        return response_and_data.data;
      });
    };

    /**
     * Create a new tag
     * Creates a new tag. Existing servers can be tagged in same request
     * @param {module:model/TagCreateRequest} tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateNewTagResponse} and HTTP response
     */
    this.createTagWithHttpInfo = function(tag) {
      var postBody = tag;

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error(
          "Missing the required parameter 'tag' when calling createTag",
        );
      }

      var pathParams = {};
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateNewTagResponse;

      return this.apiClient.callApi(
        '/tag',
        'POST',
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
     * Create a new tag
     * Creates a new tag. Existing servers can be tagged in same request
     * @param {module:model/TagCreateRequest} tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateNewTagResponse}
     */
    this.createTag = function(tag) {
      return this.createTagWithHttpInfo(tag).then(function(response_and_data) {
        return response_and_data.data;
      });
    };

    /**
     * Delete tag
     * Deleting existing tag untags all servers from specified tag and deletes tag definition
     * @param {String} tagName Tag name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTagWithHttpInfo = function(tagName) {
      var postBody = null;

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error(
          "Missing the required parameter 'tagName' when calling deleteTag",
        );
      }

      var pathParams = {
        tagName: tagName,
      };
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tag/{tagName}',
        'DELETE',
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
     * Delete tag
     * Deleting existing tag untags all servers from specified tag and deletes tag definition
     * @param {String} tagName Tag name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteTag = function(tagName) {
      return this.deleteTagWithHttpInfo(tagName).then(function(
        response_and_data,
      ) {
        return response_and_data.data;
      });
    };

    /**
     * List existing tags
     * Returns all existing tags with their properties and servers tagged
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagListResponse} and HTTP response
     */
    this.listTagsWithHttpInfo = function() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagListResponse;

      return this.apiClient.callApi(
        '/tag',
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
     * List existing tags
     * Returns all existing tags with their properties and servers tagged
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagListResponse}
     */
    this.listTags = function() {
      return this.listTagsWithHttpInfo().then(function(response_and_data) {
        return response_and_data.data;
      });
    };

    /**
     * Modify existing tag
     * Changes attributes of an existing tag
     * @param {String} tagName Tag name
     * @param {module:model/ModifyTagRequest} tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateNewTagResponse} and HTTP response
     */
    this.modifyTagWithHttpInfo = function(tagName, tag) {
      var postBody = tag;

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error(
          "Missing the required parameter 'tagName' when calling modifyTag",
        );
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error(
          "Missing the required parameter 'tag' when calling modifyTag",
        );
      }

      var pathParams = {
        tagName: tagName,
      };
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateNewTagResponse;

      return this.apiClient.callApi(
        '/tag/{tagName}',
        'PUT',
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
     * Modify existing tag
     * Changes attributes of an existing tag
     * @param {String} tagName Tag name
     * @param {module:model/ModifyTagRequest} tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateNewTagResponse}
     */
    this.modifyTag = function(tagName, tag) {
      return this.modifyTagWithHttpInfo(tagName, tag).then(function(
        response_and_data,
      ) {
        return response_and_data.data;
      });
    };

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
        throw new Error(
          "Missing the required parameter 'serverId' when calling untag",
        );
      }

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error(
          "Missing the required parameter 'tagName' when calling untag",
        );
      }

      var pathParams = {
        serverId: serverId,
        tagName: tagName,
      };
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['baseAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateServerResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/untag/{tagName}',
        'POST',
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
     * Remove tag from server
     * Untags tags from given server. The tag(s) must exist
     * @param {String} serverId Server id
     * @param {String} tagName Tag name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateServerResponse}
     */
    this.untag = function(serverId, tagName) {
      return this.untagWithHttpInfo(serverId, tagName).then(function(
        response_and_data,
      ) {
        return response_and_data.data;
      });
    };
  };

  return exports;
});
