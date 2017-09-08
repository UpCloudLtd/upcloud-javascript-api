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
    root.upcloud.StorageState = factory(root.upcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class StorageState.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "online"
     * @const
     */
    "online": "online",
    /**
     * value: "maintenance"
     * @const
     */
    "maintenance": "maintenance",
    /**
     * value: "cloning"
     * @const
     */
    "cloning": "cloning",
    /**
     * value: "backuping"
     * @const
     */
    "backuping": "backuping",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };

  /**
   * Returns a <code>StorageState</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/StorageState} The enum <code>StorageState</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


