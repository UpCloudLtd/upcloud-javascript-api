/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BackupRule', 'model/StorageTier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BackupRule'), require('./StorageTier'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.Storage = factory(root.upcloud.ApiClient, root.upcloud.BackupRule, root.upcloud.StorageTier);
  }
}(this, function(ApiClient, BackupRule, StorageTier) {
  'use strict';




  /**
   * The Storage model module.
   * @module model/Storage
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Storage</code>.
   * @alias module:model/Storage
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Storage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Storage} obj Optional instance to populate.
   * @return {module:model/Storage} The populated <code>Storage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('tier')) {
        obj['tier'] = StorageTier.constructFromObject(data['tier']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
      }
      if (data.hasOwnProperty('backup_rule')) {
        obj['backup_rule'] = BackupRule.constructFromObject(data['backup_rule']);
      }
    }
    return obj;
  }

  /**
   * The size of the storage in gigabytes.
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {module:model/StorageTier} tier
   */
  exports.prototype['tier'] = undefined;
  /**
   * A short description.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} zone
   * @default 'The zone in which the storage will be created, e.g. fi-hel1. See Zones.'
   */
  exports.prototype['zone'] = 'The zone in which the storage will be created, e.g. fi-hel1. See Zones.';
  /**
   * @member {module:model/BackupRule} backup_rule
   */
  exports.prototype['backup_rule'] = undefined;



  return exports;
}));


