/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(
      [
        'ApiClient',
        'model/BackupRule',
        'model/StorageAccessType',
        'model/StorageBackups',
        'model/StorageServers',
        'model/StorageState',
        'model/StorageTier',
        'model/StorageType',
      ],
      factory,
    );
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./BackupRule'),
      require('./StorageAccessType'),
      require('./StorageBackups'),
      require('./StorageServers'),
      require('./StorageState'),
      require('./StorageTier'),
      require('./StorageType'),
    );
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.Storage = factory(
      root.upcloud.ApiClient,
      root.upcloud.BackupRule,
      root.upcloud.StorageAccessType,
      root.upcloud.StorageBackups,
      root.upcloud.StorageServers,
      root.upcloud.StorageState,
      root.upcloud.StorageTier,
      root.upcloud.StorageType,
    );
  }
})(this, function(
  ApiClient,
  BackupRule,
  StorageAccessType,
  StorageBackups,
  StorageServers,
  StorageState,
  StorageTier,
  StorageType,
) {
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

      if (data.hasOwnProperty('access')) {
        obj['access'] = StorageAccessType.constructFromObject(data['access']);
      }
      if (data.hasOwnProperty('backup_rule')) {
        obj['backup_rule'] = BackupRule.constructFromObject(
          data['backup_rule'],
        );
      }
      if (data.hasOwnProperty('backups')) {
        obj['backups'] = StorageBackups.constructFromObject(data['backups']);
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'Number');
      }
      if (data.hasOwnProperty('servers')) {
        obj['servers'] = StorageServers.constructFromObject(data['servers']);
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = StorageState.constructFromObject(data['state']);
      }
      if (data.hasOwnProperty('tier')) {
        obj['tier'] = StorageTier.constructFromObject(data['tier']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = StorageType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
    }
    return obj;
  };

  /**
   * @member {module:model/StorageAccessType} access
   */
  exports.prototype['access'] = undefined;
  /**
   * @member {module:model/BackupRule} backup_rule
   */
  exports.prototype['backup_rule'] = undefined;
  /**
   * @member {module:model/StorageBackups} backups
   */
  exports.prototype['backups'] = undefined;
  /**
   * @member {Number} license
   */
  exports.prototype['license'] = undefined;
  /**
   * @member {module:model/StorageServers} servers
   */
  exports.prototype['servers'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {module:model/StorageState} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/StorageTier} tier
   */
  exports.prototype['tier'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/StorageType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} zone
   */
  exports.prototype['zone'] = undefined;
  /**
   * @member {String} origin
   */
  exports.prototype['origin'] = undefined;
  /**
   * @member {String} created
   */
  exports.prototype['created'] = undefined;

  return exports;
});
