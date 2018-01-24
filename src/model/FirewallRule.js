/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressFamily'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./AddressFamily'),
    );
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.FirewallRule = factory(
      root.upcloud.ApiClient,
      root.upcloud.AddressFamily,
    );
  }
})(this, function(ApiClient, AddressFamily) {
  'use strict';

  /**
   * The FirewallRule model module.
   * @module model/FirewallRule
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>FirewallRule</code>.
   * @alias module:model/FirewallRule
   * @class
   * @param direction {module:model/FirewallRule.DirectionEnum} The direction of network traffic this rule will be applied to.
   * @param action {module:model/FirewallRule.ActionEnum} Action to take if the rule conditions are met.
   * @param family {module:model/AddressFamily} if protocol is set The address family of new firewall rule
   */
  var exports = function(direction, action, family) {
    var _this = this;

    _this['direction'] = direction;
    _this['action'] = action;

    _this['family'] = family;
  };

  /**
   * Constructs a <code>FirewallRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallRule} obj Optional instance to populate.
   * @return {module:model/FirewallRule} The populated <code>FirewallRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('family')) {
        obj['family'] = AddressFamily.constructFromObject(data['family']);
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('icmp_type')) {
        obj['icmp_type'] = ApiClient.convertToType(data['icmp_type'], 'String');
      }
      if (data.hasOwnProperty('destination_address_start')) {
        obj['destination_address_start'] = ApiClient.convertToType(
          data['destination_address_start'],
          'String',
        );
      }
      if (data.hasOwnProperty('destination_address_end')) {
        obj['destination_address_end'] = ApiClient.convertToType(
          data['destination_address_end'],
          'String',
        );
      }
      if (data.hasOwnProperty('destination_port_start')) {
        obj['destination_port_start'] = ApiClient.convertToType(
          data['destination_port_start'],
          'Number',
        );
      }
      if (data.hasOwnProperty('destination_port_end')) {
        obj['destination_port_end'] = ApiClient.convertToType(
          data['destination_port_end'],
          'Number',
        );
      }
      if (data.hasOwnProperty('source_address_start')) {
        obj['source_address_start'] = ApiClient.convertToType(
          data['source_address_start'],
          'String',
        );
      }
      if (data.hasOwnProperty('source_address_end')) {
        obj['source_address_end'] = ApiClient.convertToType(
          data['source_address_end'],
          'String',
        );
      }
      if (data.hasOwnProperty('source_port_start')) {
        obj['source_port_start'] = ApiClient.convertToType(
          data['source_port_start'],
          'Number',
        );
      }
      if (data.hasOwnProperty('source_port_end')) {
        obj['source_port_end'] = ApiClient.convertToType(
          data['source_port_end'],
          'Number',
        );
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
    }
    return obj;
  };

  /**
   * The direction of network traffic this rule will be applied to.
   * @member {module:model/FirewallRule.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * Action to take if the rule conditions are met.
   * @member {module:model/FirewallRule.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Add the firewall rule to this position in the server's firewall list.
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * if protocol is set The address family of new firewall rule
   * @member {module:model/AddressFamily} family
   */
  exports.prototype['family'] = undefined;
  /**
   * The protocol this rule will be applied to.
   * @member {module:model/FirewallRule.ProtocolEnum} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * The ICMP type.
   * @member {String} icmp_type
   */
  exports.prototype['icmp_type'] = undefined;
  /**
   * The destination address range starts from this address.
   * @member {String} destination_address_start
   */
  exports.prototype['destination_address_start'] = undefined;
  /**
   * The destination address range ends to this address.
   * @member {String} destination_address_end
   */
  exports.prototype['destination_address_end'] = undefined;
  /**
   * The destination port range starts from this port number.
   * @member {Number} destination_port_start
   */
  exports.prototype['destination_port_start'] = undefined;
  /**
   * The destination port range ends to this port number.
   * @member {Number} destination_port_end
   */
  exports.prototype['destination_port_end'] = undefined;
  /**
   * The source address range starts from this address.
   * @member {String} source_address_start
   */
  exports.prototype['source_address_start'] = undefined;
  /**
   * The source address range ends to this address.
   * @member {String} source_address_end
   */
  exports.prototype['source_address_end'] = undefined;
  /**
   * The source port range starts from this port number.
   * @member {Number} source_port_start
   */
  exports.prototype['source_port_start'] = undefined;
  /**
   * The source port range ends to this port number.
   * @member {Number} source_port_end
   */
  exports.prototype['source_port_end'] = undefined;
  /**
   * Freeform comment string for the rule.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;

  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "in"
     * @const
     */
    in: 'in',
    /**
     * value: "out"
     * @const
     */
    out: 'out',
  };

  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "accept"
     * @const
     */
    accept: 'accept',
    /**
     * value: "reject"
     * @const
     */
    reject: 'reject',
    /**
     * value: "drop"
     * @const
     */
    drop: 'drop',
  };

  /**
   * Allowed values for the <code>protocol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProtocolEnum = {
    /**
     * value: "tcp"
     * @const
     */
    tcp: 'tcp',
    /**
     * value: "udp"
     * @const
     */
    udp: 'udp',
    /**
     * value: "icmp"
     * @const
     */
    icmp: 'icmp',
  };

  return exports;
});
