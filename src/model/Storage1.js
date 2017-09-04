/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BackupRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BackupRule'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.Storage1 = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.BackupRule);
  }
}(this, function(ApiClient, BackupRule) {
  'use strict';




  /**
   * The Storage1 model module.
   * @module model/Storage1
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Storage1</code>.
   * @alias module:model/Storage1
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Storage1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Storage1} obj Optional instance to populate.
   * @return {module:model/Storage1} The populated <code>Storage1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backup_rule')) {
        obj['backup_rule'] = BackupRule.constructFromObject(data['backup_rule']);
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BackupRule} backup_rule
   */
  exports.prototype['backup_rule'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


