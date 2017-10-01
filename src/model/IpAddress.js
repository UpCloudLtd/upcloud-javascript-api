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
    root.upcloud.IpAddress = factory(root.upcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IpAddress model module.
   * @module model/IpAddress
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>IpAddress</code>.
   * The UpCloud network has public and private IP addresses.
   * @alias module:model/IpAddress
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>IpAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IpAddress} obj Optional instance to populate.
   * @return {module:model/IpAddress} The populated <code>IpAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access')) {
        obj['access'] = ApiClient.convertToType(data['access'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('family')) {
        obj['family'] = ApiClient.convertToType(data['family'], 'String');
      }
      if (data.hasOwnProperty('ptr_record')) {
        obj['ptr_record'] = ApiClient.convertToType(data['ptr_record'], 'String');
      }
      if (data.hasOwnProperty('server')) {
        obj['server'] = ApiClient.convertToType(data['server'], 'String');
      }
      if (data.hasOwnProperty('part_of_plan')) {
        obj['part_of_plan'] = ApiClient.convertToType(data['part_of_plan'], 'String');
      }
    }
    return obj;
  }

  /**
   * Is address for private or public network.
   * @member {module:model/IpAddress.AccessEnum} access
   */
  exports.prototype['access'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * The address family of new IP address.
   * @member {module:model/IpAddress.FamilyEnum} family
   */
  exports.prototype['family'] = undefined;
  /**
   * @member {String} ptr_record
   */
  exports.prototype['ptr_record'] = undefined;
  /**
   * @member {String} server
   */
  exports.prototype['server'] = undefined;
  /**
   * @member {module:model/IpAddress.PartOfPlanEnum} part_of_plan
   */
  exports.prototype['part_of_plan'] = undefined;


  /**
   * Allowed values for the <code>access</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessEnum = {
    /**
     * value: "public"
     * @const
     */
    "public": "public",
    /**
     * value: "private"
     * @const
     */
    "private": "private"  };

  /**
   * Allowed values for the <code>family</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FamilyEnum = {
    /**
     * value: "IPv4"
     * @const
     */
    "IPv4": "IPv4",
    /**
     * value: "IPv6"
     * @const
     */
    "IPv6": "IPv6"  };

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


