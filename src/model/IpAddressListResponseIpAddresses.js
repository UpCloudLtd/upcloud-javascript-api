/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IpAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IpAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.IpAddressListResponseIpAddresses = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.IpAddress);
  }
}(this, function(ApiClient, IpAddress) {
  'use strict';




  /**
   * The IpAddressListResponseIpAddresses model module.
   * @module model/IpAddressListResponseIpAddresses
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>IpAddressListResponseIpAddresses</code>.
   * @alias module:model/IpAddressListResponseIpAddresses
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>IpAddressListResponseIpAddresses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IpAddressListResponseIpAddresses} obj Optional instance to populate.
   * @return {module:model/IpAddressListResponseIpAddresses} The populated <code>IpAddressListResponseIpAddresses</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], [IpAddress]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/IpAddress>} ip_address
   */
  exports.prototype['ip_address'] = undefined;



  return exports;
}));

