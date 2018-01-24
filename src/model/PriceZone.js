/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Price'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Price'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.PriceZone = factory(
      root.upcloud.ApiClient,
      root.upcloud.Price,
    );
  }
})(this, function(ApiClient, Price) {
  'use strict';

  /**
   * The PriceZone model module.
   * @module model/PriceZone
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>PriceZone</code>.
   * @alias module:model/PriceZone
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>PriceZone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceZone} obj Optional instance to populate.
   * @return {module:model/PriceZone} The populated <code>PriceZone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('firewall')) {
        obj['firewall'] = Price.constructFromObject(data['firewall']);
      }
      if (data.hasOwnProperty('io_request_backup')) {
        obj['io_request_backup'] = Price.constructFromObject(
          data['io_request_backup'],
        );
      }
      if (data.hasOwnProperty('io_request_hdd')) {
        obj['io_request_hdd'] = Price.constructFromObject(
          data['io_request_hdd'],
        );
      }
      if (data.hasOwnProperty('io_request_maxiops')) {
        obj['io_request_maxiops'] = Price.constructFromObject(
          data['io_request_maxiops'],
        );
      }
      if (data.hasOwnProperty('ipv4_address')) {
        obj['ipv4_address'] = Price.constructFromObject(data['ipv4_address']);
      }
      if (data.hasOwnProperty('ipv6_address')) {
        obj['ipv6_address'] = Price.constructFromObject(data['ipv6_address']);
      }
      if (data.hasOwnProperty('public_ipv4_bandwidth_in')) {
        obj['public_ipv4_bandwidth_in'] = Price.constructFromObject(
          data['public_ipv4_bandwidth_in'],
        );
      }
      if (data.hasOwnProperty('public_ipv4_bandwidth_out')) {
        obj['public_ipv4_bandwidth_out'] = Price.constructFromObject(
          data['public_ipv4_bandwidth_out'],
        );
      }
      if (data.hasOwnProperty('public_ipv6_bandwidth_in')) {
        obj['public_ipv6_bandwidth_in'] = Price.constructFromObject(
          data['public_ipv6_bandwidth_in'],
        );
      }
      if (data.hasOwnProperty('public_ipv6_bandwidth_out')) {
        obj['public_ipv6_bandwidth_out'] = Price.constructFromObject(
          data['public_ipv6_bandwidth_out'],
        );
      }
      if (data.hasOwnProperty('server_core')) {
        obj['server_core'] = Price.constructFromObject(data['server_core']);
      }
      if (data.hasOwnProperty('server_memory')) {
        obj['server_memory'] = Price.constructFromObject(data['server_memory']);
      }
      if (data.hasOwnProperty('storage_backup')) {
        obj['storage_backup'] = Price.constructFromObject(
          data['storage_backup'],
        );
      }
      if (data.hasOwnProperty('storage_hdd')) {
        obj['storage_hdd'] = Price.constructFromObject(data['storage_hdd']);
      }
      if (data.hasOwnProperty('storage_maxiops')) {
        obj['storage_maxiops'] = Price.constructFromObject(
          data['storage_maxiops'],
        );
      }
      if (data.hasOwnProperty('server_plan_1xCPU-1GB')) {
        obj['server_plan_1xCPU-1GB'] = Price.constructFromObject(
          data['server_plan_1xCPU-1GB'],
        );
      }
      if (data.hasOwnProperty('server_plan_2xCPU-2GB')) {
        obj['server_plan_2xCPU-2GB'] = Price.constructFromObject(
          data['server_plan_2xCPU-2GB'],
        );
      }
    }
    return obj;
  };

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Price} firewall
   */
  exports.prototype['firewall'] = undefined;
  /**
   * @member {module:model/Price} io_request_backup
   */
  exports.prototype['io_request_backup'] = undefined;
  /**
   * @member {module:model/Price} io_request_hdd
   */
  exports.prototype['io_request_hdd'] = undefined;
  /**
   * @member {module:model/Price} io_request_maxiops
   */
  exports.prototype['io_request_maxiops'] = undefined;
  /**
   * @member {module:model/Price} ipv4_address
   */
  exports.prototype['ipv4_address'] = undefined;
  /**
   * @member {module:model/Price} ipv6_address
   */
  exports.prototype['ipv6_address'] = undefined;
  /**
   * @member {module:model/Price} public_ipv4_bandwidth_in
   */
  exports.prototype['public_ipv4_bandwidth_in'] = undefined;
  /**
   * @member {module:model/Price} public_ipv4_bandwidth_out
   */
  exports.prototype['public_ipv4_bandwidth_out'] = undefined;
  /**
   * @member {module:model/Price} public_ipv6_bandwidth_in
   */
  exports.prototype['public_ipv6_bandwidth_in'] = undefined;
  /**
   * @member {module:model/Price} public_ipv6_bandwidth_out
   */
  exports.prototype['public_ipv6_bandwidth_out'] = undefined;
  /**
   * @member {module:model/Price} server_core
   */
  exports.prototype['server_core'] = undefined;
  /**
   * @member {module:model/Price} server_memory
   */
  exports.prototype['server_memory'] = undefined;
  /**
   * @member {module:model/Price} storage_backup
   */
  exports.prototype['storage_backup'] = undefined;
  /**
   * @member {module:model/Price} storage_hdd
   */
  exports.prototype['storage_hdd'] = undefined;
  /**
   * @member {module:model/Price} storage_maxiops
   */
  exports.prototype['storage_maxiops'] = undefined;
  /**
   * @member {module:model/Price} server_plan_1xCPU-1GB
   */
  exports.prototype['server_plan_1xCPU-1GB'] = undefined;
  /**
   * @member {module:model/Price} server_plan_2xCPU-2GB
   */
  exports.prototype['server_plan_2xCPU-2GB'] = undefined;

  return exports;
});
