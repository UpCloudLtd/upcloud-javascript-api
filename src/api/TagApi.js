/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineResponse20010 from '../model/InlineResponse20010';
import InlineResponse2009 from '../model/InlineResponse2009';
import ServerListResponse from '../model/ServerListResponse';
import Tag from '../model/Tag';
import Tag1 from '../model/Tag1';

/**
* Tag service.
* @module api/TagApi
* @version 1.2.0
*/
export default class TagApi {

    /**
    * Constructs a new TagApi. 
    * @alias module:api/TagApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the serverServerIdTagTagListPost operation.
     * @callback module:api/TagApi~serverServerIdTagTagListPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign tag to a server
     * Servers can be tagged with one or more tags. The tags used must exist
     * @param {String} serverId Server id
     * @param {String} tagList List of tags
     * @param {module:api/TagApi~serverServerIdTagTagListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    serverServerIdTagTagListPost(serverId, tagList, callback) {
      let postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling serverServerIdTagTagListPost");
      }

      // verify the required parameter 'tagList' is set
      if (tagList === undefined || tagList === null) {
        throw new Error("Missing the required parameter 'tagList' when calling serverServerIdTagTagListPost");
      }


      let pathParams = {
        'serverId': serverId,
        'tagList': tagList
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/tag/{tagList}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the serverServerIdUntagTagNamePost operation.
     * @callback module:api/TagApi~serverServerIdUntagTagNamePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove tag from server
     * Untags tags from given server. The tag(s) must exist
     * @param {String} serverId Server id
     * @param {String} tagName Tag name
     * @param {module:api/TagApi~serverServerIdUntagTagNamePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerListResponse}
     */
    serverServerIdUntagTagNamePost(serverId, tagName, callback) {
      let postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling serverServerIdUntagTagNamePost");
      }

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling serverServerIdUntagTagNamePost");
      }


      let pathParams = {
        'serverId': serverId,
        'tagName': tagName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = ServerListResponse;

      return this.apiClient.callApi(
        '/server/{serverId}/untag/{tagName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagGet operation.
     * @callback module:api/TagApi~tagGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List existing tags
     * Returns all existing tags with their properties and servers tagged
     * @param {module:api/TagApi~tagGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    tagGet(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagPost operation.
     * @callback module:api/TagApi~tagPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new tag
     * Creates a new tag. Existing servers can be tagged in same request
     * @param {module:model/Tag} tag 
     * @param {module:api/TagApi~tagPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */
    tagPost(tag, callback) {
      let postBody = tag;

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling tagPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagTagNameDelete operation.
     * @callback module:api/TagApi~tagTagNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete tag
     * Deleting existing tag untags all servers from specified tag and deletes tag definition
     * @param {String} tagName Tag name
     * @param {module:api/TagApi~tagTagNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tagTagNameDelete(tagName, callback) {
      let postBody = null;

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling tagTagNameDelete");
      }


      let pathParams = {
        'tagName': tagName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/tag/{tagName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagTagNamePut operation.
     * @callback module:api/TagApi~tagTagNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify existing tag
     * Changes attributes of an existing tag
     * @param {String} tagName Tag name
     * @param {module:model/Tag1} tag 
     * @param {module:api/TagApi~tagTagNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */
    tagTagNamePut(tagName, tag, callback) {
      let postBody = tag;

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling tagTagNamePut");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling tagTagNamePut");
      }


      let pathParams = {
        'tagName': tagName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/tag/{tagName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
