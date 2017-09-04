/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Server'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Server'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.ServerListResponseServers = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.Server);
  }
}(this, function(ApiClient, Server) {
  'use strict';




  /**
   * The ServerListResponseServers model module.
   * @module model/ServerListResponseServers
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ServerListResponseServers</code>.
   * @alias module:model/ServerListResponseServers
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ServerListResponseServers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServerListResponseServers} obj Optional instance to populate.
   * @return {module:model/ServerListResponseServers} The populated <code>ServerListResponseServers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('server')) {
        obj['server'] = ApiClient.convertToType(data['server'], [Server]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Server>} server
   */
  exports.prototype['server'] = undefined;



  return exports;
}));


