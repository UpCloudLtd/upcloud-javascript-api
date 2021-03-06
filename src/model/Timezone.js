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
    root.upcloud.Timezone = factory(root.upcloud.ApiClient);
  }
})(this, function(ApiClient) {
  'use strict';

  /**
   * The Timezone model module.
   * @module model/Timezone
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Timezone</code>.
   * A cloud server&#39;s hardware clock is set to a specific timezone. Some operating systems, such as Microsoft Windows, rely on the hardware clock being in local time. Others, such as Linux, use a default setting of a hardware clock in Coordinated Universal Time (UTC). The server&#39;s timezone setting can be adjusted to a local time if required by the operating system.
   * @alias module:model/Timezone
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>Timezone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timezone} obj Optional instance to populate.
   * @return {module:model/Timezone} The populated <code>Timezone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  };

  return exports;
});
