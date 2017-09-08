/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.Storage3 = factory(root.upcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Storage3 model module.
   * @module model/Storage3
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Storage3</code>.
   * @alias module:model/Storage3
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Storage3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Storage3} obj Optional instance to populate.
   * @return {module:model/Storage3} The populated <code>Storage3</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * A short description.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


