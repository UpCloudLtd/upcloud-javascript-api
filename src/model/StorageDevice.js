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
    root.upcloud.StorageDevice = factory(root.upcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StorageDevice model module.
   * @module model/StorageDevice
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>StorageDevice</code>.
   * @alias module:model/StorageDevice
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>StorageDevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StorageDevice} obj Optional instance to populate.
   * @return {module:model/StorageDevice} The populated <code>StorageDevice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('tier')) {
        obj['tier'] = ApiClient.convertToType(data['tier'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('part_of_plan')) {
        obj['part_of_plan'] = ApiClient.convertToType(data['part_of_plan'], 'String');
      }
      if (data.hasOwnProperty('storage')) {
        obj['storage'] = ApiClient.convertToType(data['storage'], 'String');
      }
      if (data.hasOwnProperty('storage_size')) {
        obj['storage_size'] = ApiClient.convertToType(data['storage_size'], 'Number');
      }
      if (data.hasOwnProperty('storage_title')) {
        obj['storage_title'] = ApiClient.convertToType(data['storage_title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {String} tier
   */
  exports.prototype['tier'] = undefined;
  /**
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {module:model/StorageDevice.PartOfPlanEnum} part_of_plan
   */
  exports.prototype['part_of_plan'] = undefined;
  /**
   * @member {String} storage
   */
  exports.prototype['storage'] = undefined;
  /**
   * @member {Number} storage_size
   */
  exports.prototype['storage_size'] = undefined;
  /**
   * @member {String} storage_title
   */
  exports.prototype['storage_title'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>part_of_plan</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PartOfPlanEnum = {
    /**
     * value: "yes"
     * @const
     */
    "yes": "yes",
    /**
     * value: "no"
     * @const
     */
    "no": "no"  };


  return exports;
}));


