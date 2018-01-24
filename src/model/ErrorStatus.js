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
    root.upcloud.ErrorStatus = factory(root.upcloud.ApiClient);
  }
})(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class ErrorStatus.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "400"
     * @const
     */
    '400': '400',
    /**
     * value: "402"
     * @const
     */
    '402': '402',
    /**
     * value: "403"
     * @const
     */
    '403': '403',
    /**
     * value: "404"
     * @const
     */
    '404': '404',
    /**
     * value: "409"
     * @const
     */
    '409': '409',
  };

  /**
   * Returns a <code>ErrorStatus</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ErrorStatus} The enum <code>ErrorStatus</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
});
