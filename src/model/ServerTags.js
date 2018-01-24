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
    root.upcloud.ServerTags = factory(root.upcloud.ApiClient);
  }
})(this, function(ApiClient) {
  'use strict';

  /**
   * The ServerTags model module.
   * @module model/ServerTags
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ServerTags</code>.
   * @alias module:model/ServerTags
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>ServerTags</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServerTags} obj Optional instance to populate.
   * @return {module:model/ServerTags} The populated <code>ServerTags</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], ['String']);
      }
    }
    return obj;
  };

  /**
   * @member {Array.<String>} tag
   */
  exports.prototype['tag'] = undefined;

  return exports;
});
