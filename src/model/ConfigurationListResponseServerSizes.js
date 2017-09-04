/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ServerSize'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ServerSize'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.ConfigurationListResponseServerSizes = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.ServerSize);
  }
}(this, function(ApiClient, ServerSize) {
  'use strict';




  /**
   * The ConfigurationListResponseServerSizes model module.
   * @module model/ConfigurationListResponseServerSizes
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ConfigurationListResponseServerSizes</code>.
   * @alias module:model/ConfigurationListResponseServerSizes
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConfigurationListResponseServerSizes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigurationListResponseServerSizes} obj Optional instance to populate.
   * @return {module:model/ConfigurationListResponseServerSizes} The populated <code>ConfigurationListResponseServerSizes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('server_size')) {
        obj['server_size'] = ApiClient.convertToType(data['server_size'], [ServerSize]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ServerSize>} server_size
   */
  exports.prototype['server_size'] = undefined;



  return exports;
}));


