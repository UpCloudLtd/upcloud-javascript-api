/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConfigurationListResponseServerSizes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigurationListResponseServerSizes'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.ConfigurationListResponse = factory(root.upcloud.ApiClient, root.upcloud.ConfigurationListResponseServerSizes);
  }
}(this, function(ApiClient, ConfigurationListResponseServerSizes) {
  'use strict';




  /**
   * The ConfigurationListResponse model module.
   * @module model/ConfigurationListResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ConfigurationListResponse</code>.
   * @alias module:model/ConfigurationListResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConfigurationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigurationListResponse} obj Optional instance to populate.
   * @return {module:model/ConfigurationListResponse} The populated <code>ConfigurationListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('server_sizes')) {
        obj['server_sizes'] = ConfigurationListResponseServerSizes.constructFromObject(data['server_sizes']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ConfigurationListResponseServerSizes} server_sizes
   */
  exports.prototype['server_sizes'] = undefined;



  return exports;
}));


