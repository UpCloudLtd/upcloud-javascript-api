/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateNewTagResponse', 'model/Error', 'model/ServerListResponse', 'model/Tag', 'model/Tag1', 'model/TagListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateNewTagResponse'), require('../model/Error'), require('../model/ServerListResponse'), require('../model/Tag'), require('../model/Tag1'), require('../model/TagListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.TagApi = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.CreateNewTagResponse, root.UpcloudApi.Error, root.UpcloudApi.ServerListResponse, root.UpcloudApi.Tag, root.UpcloudApi.Tag1, root.UpcloudApi.TagListResponse);
  }
}(this, function(ApiClient, CreateNewTagResponse, Error, ServerListResponse, Tag, Tag1, TagListResponse) {
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
     * Callback function to receive the result of the assignTag operation.
     * @callback module:api/TagApi~assignTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign tag to a server
     * Servers can be tagged with one or more tags. The tags used must exist
     * @param {String} serverId Server id
     * @param {String} tagList List of tags
     * @param {module:api/TagApi~assignTagCallback} callback The callback function, accepting three arguments: error, data, response
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
      var contentTypes = [];
      var accepts = [];
      var returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/tag/{tagList}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTag operation.
     * @callback module:api/TagApi~createTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateNewTagResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new tag
     * Creates a new tag. Existing servers can be tagged in same request
     * @param {module:model/Tag} tag 
     * @param {module:api/TagApi~createTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateNewTagResponse}
     */
    this.createTag = function(tag, callback) {
      var postBody = tag;

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling createTag");
      }


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
      var returnType = CreateNewTagResponse;

      return this.apiClient.callApi(
        '/tag', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTag operation.
     * @callback module:api/TagApi~deleteTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete tag
     * Deleting existing tag untags all servers from specified tag and deletes tag definition
     * @param {String} tagName Tag name
     * @param {module:api/TagApi~deleteTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTag = function(tagName, callback) {
      var postBody = null;

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling deleteTag");
      }


      var pathParams = {
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
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/tag/{tagName}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTags operation.
     * @callback module:api/TagApi~listTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List existing tags
     * Returns all existing tags with their properties and servers tagged
     * @param {module:api/TagApi~listTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagListResponse}
     */
    this.listTags = function(callback) {
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
      var returnType = TagListResponse;

      return this.apiClient.callApi(
        '/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyTag operation.
     * @callback module:api/TagApi~modifyTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateNewTagResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify existing tag
     * Changes attributes of an existing tag
     * @param {String} tagName Tag name
     * @param {module:model/Tag1} tag 
     * @param {module:api/TagApi~modifyTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateNewTagResponse}
     */
    this.modifyTag = function(tagName, tag, callback) {
      var postBody = tag;

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling modifyTag");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling modifyTag");
      }


      var pathParams = {
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
      var contentTypes = [];
      var accepts = [];
      var returnType = CreateNewTagResponse;

      return this.apiClient.callApi(
        '/tag/{tagName}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the untag operation.
     * @callback module:api/TagApi~untagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove tag from server
     * Untags tags from given server. The tag(s) must exist
     * @param {String} serverId Server id
     * @param {String} tagName Tag name
     * @param {module:api/TagApi~untagCallback} callback The callback function, accepting three arguments: error, data, response
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
      var contentTypes = [];
      var accepts = [];
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
