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
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.BackupRule = factory(root.UpcloudApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BackupRule model module.
   * @module model/BackupRule
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>BackupRule</code>.
   * The backup_rule block defines when the storage device is backed up automatically.
   * @alias module:model/BackupRule
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>BackupRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BackupRule} obj Optional instance to populate.
   * @return {module:model/BackupRule} The populated <code>BackupRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
      }
      if (data.hasOwnProperty('retention')) {
        obj['retention'] = ApiClient.convertToType(data['retention'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BackupRule.IntervalEnum} interval
   */
  exports.prototype['interval'] = undefined;
  /**
   * @member {Number} retention
   */
  exports.prototype['retention'] = undefined;


  /**
   * Allowed values for the <code>interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IntervalEnum = {
    /**
     * value: "daily"
     * @const
     */
    "daily": "daily",
    /**
     * value: "mon"
     * @const
     */
    "mon": "mon",
    /**
     * value: "tue"
     * @const
     */
    "tue": "tue",
    /**
     * value: "wed"
     * @const
     */
    "wed": "wed",
    /**
     * value: "thu"
     * @const
     */
    "thu": "thu",
    /**
     * value: "fri"
     * @const
     */
    "fri": "fri",
    /**
     * value: "sat"
     * @const
     */
    "sat": "sat",
    /**
     * value: "sun"
     * @const
     */
    "sun": "sun"  };


  return exports;
}));


