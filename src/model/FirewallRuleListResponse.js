/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FirewallRuleListResponseFirewallRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirewallRuleListResponseFirewallRules'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.FirewallRuleListResponse = factory(root.upcloud.ApiClient, root.upcloud.FirewallRuleListResponseFirewallRules);
  }
}(this, function(ApiClient, FirewallRuleListResponseFirewallRules) {
  'use strict';




  /**
   * The FirewallRuleListResponse model module.
   * @module model/FirewallRuleListResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>FirewallRuleListResponse</code>.
   * @alias module:model/FirewallRuleListResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FirewallRuleListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallRuleListResponse} obj Optional instance to populate.
   * @return {module:model/FirewallRuleListResponse} The populated <code>FirewallRuleListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firewall_rules')) {
        obj['firewall_rules'] = FirewallRuleListResponseFirewallRules.constructFromObject(data['firewall_rules']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FirewallRuleListResponseFirewallRules} firewall_rules
   */
  exports.prototype['firewall_rules'] = undefined;



  return exports;
}));


