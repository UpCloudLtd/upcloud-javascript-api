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
    root.upcloud.Plan = factory(root.upcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Plan model module.
   * @module model/Plan
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Plan</code>.
   * Server plans are preconfigured server configurations with fixed price. Each plan includes certain number of CPU cores, memory amount, storage and transfer quota in addition of one public IPv4 address (private IPv4 addresses and public IPv6 addresses are currently free of charge, so they are not included in plan).
   * @alias module:model/Plan
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Plan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Plan} obj Optional instance to populate.
   * @return {module:model/Plan} The populated <code>Plan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('core_number')) {
        obj['core_number'] = ApiClient.convertToType(data['core_number'], 'Number');
      }
      if (data.hasOwnProperty('memory_amount')) {
        obj['memory_amount'] = ApiClient.convertToType(data['memory_amount'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('public_traffic_out')) {
        obj['public_traffic_out'] = ApiClient.convertToType(data['public_traffic_out'], 'String');
      }
      if (data.hasOwnProperty('storage_size')) {
        obj['storage_size'] = ApiClient.convertToType(data['storage_size'], 'String');
      }
      if (data.hasOwnProperty('storage_tier')) {
        obj['storage_tier'] = ApiClient.convertToType(data['storage_tier'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} core_number
   */
  exports.prototype['core_number'] = undefined;
  /**
   * @member {Number} memory_amount
   */
  exports.prototype['memory_amount'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} public_traffic_out
   */
  exports.prototype['public_traffic_out'] = undefined;
  /**
   * @member {String} storage_size
   */
  exports.prototype['storage_size'] = undefined;
  /**
   * @member {String} storage_tier
   */
  exports.prototype['storage_tier'] = undefined;



  return exports;
}));


