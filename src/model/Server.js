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
        'model/IpAddresses',
        'model/ServerState',
        'model/ServerStorageDevices',
        'model/ServerTags',
      ],
      factory,
    );
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./IpAddresses'),
      require('./ServerState'),
      require('./ServerStorageDevices'),
      require('./ServerTags'),
    );
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.Server = factory(
      root.upcloud.ApiClient,
      root.upcloud.IpAddresses,
      root.upcloud.ServerState,
      root.upcloud.ServerStorageDevices,
      root.upcloud.ServerTags,
    );
  }
})(this, function(
  ApiClient,
  IpAddresses,
  ServerState,
  ServerStorageDevices,
  ServerTags,
) {
  'use strict';

  /**
   * The Server model module.
   * @module model/Server
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Server</code>.
   * The server configuration defines which storage devices the server is attached to, which IP addresses can be used and how the server can be reached for remote management. A server must have at least one storage device attached in order to be started. Servers may have from zero to five public IPv4 and IPv6 addresses. All servers have a private IP address that cannot be removed.
   * @alias module:model/Server
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>Server</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Server} obj Optional instance to populate.
   * @return {module:model/Server} The populated <code>Server</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('boot_order')) {
        obj['boot_order'] = ApiClient.convertToType(
          data['boot_order'],
          'String',
        );
      }
      if (data.hasOwnProperty('core_number')) {
        obj['core_number'] = ApiClient.convertToType(
          data['core_number'],
          'Number',
        );
      }
      if (data.hasOwnProperty('firewall')) {
        obj['firewall'] = ApiClient.convertToType(data['firewall'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'Number');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('ip_addresses')) {
        obj['ip_addresses'] = IpAddresses.constructFromObject(
          data['ip_addresses'],
        );
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'Number');
      }
      if (data.hasOwnProperty('memory_amount')) {
        obj['memory_amount'] = ApiClient.convertToType(
          data['memory_amount'],
          'Number',
        );
      }
      if (data.hasOwnProperty('nic_model')) {
        obj['nic_model'] = ApiClient.convertToType(data['nic_model'], 'String');
      }
      if (data.hasOwnProperty('plan')) {
        obj['plan'] = ApiClient.convertToType(data['plan'], 'String');
      }
      if (data.hasOwnProperty('plan_ipv4_bytes')) {
        obj['plan_ipv4_bytes'] = ApiClient.convertToType(
          data['plan_ipv4_bytes'],
          'Number',
        );
      }
      if (data.hasOwnProperty('plan_ipv6_bytes')) {
        obj['plan_ipv6_bytes'] = ApiClient.convertToType(
          data['plan_ipv6_bytes'],
          'Number',
        );
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ServerState.constructFromObject(data['state']);
      }
      if (data.hasOwnProperty('storage_devices')) {
        obj['storage_devices'] = ServerStorageDevices.constructFromObject(
          data['storage_devices'],
        );
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ServerTags.constructFromObject(data['tags']);
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('video_model')) {
        obj['video_model'] = ApiClient.convertToType(
          data['video_model'],
          'String',
        );
      }
      if (data.hasOwnProperty('vnc')) {
        obj['vnc'] = ApiClient.convertToType(data['vnc'], 'String');
      }
      if (data.hasOwnProperty('vnc_host')) {
        obj['vnc_host'] = ApiClient.convertToType(data['vnc_host'], 'String');
      }
      if (data.hasOwnProperty('vnc_password')) {
        obj['vnc_password'] = ApiClient.convertToType(
          data['vnc_password'],
          'String',
        );
      }
      if (data.hasOwnProperty('vnc_port')) {
        obj['vnc_port'] = ApiClient.convertToType(data['vnc_port'], 'String');
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
      }
    }
    return obj;
  };

  /**
   * The storage device boot order.
   * @member {module:model/Server.BootOrderEnum} boot_order
   */
  exports.prototype['boot_order'] = undefined;
  /**
   * The number of CPU cores dedicated to the server. See List server configurations.
   * @member {Number} core_number
   */
  exports.prototype['core_number'] = undefined;
  /**
   * The state of the server firewall rules.
   * @member {module:model/Server.FirewallEnum} firewall
   * @default 'on'
   */
  exports.prototype['firewall'] = 'on';
  /**
   * @member {Number} host
   */
  exports.prototype['host'] = undefined;
  /**
   * A valid hostname, e.g. host.example.com. The maximum length is 128 characters.
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * @member {module:model/IpAddresses} ip_addresses
   */
  exports.prototype['ip_addresses'] = undefined;
  /**
   * @member {Number} license
   */
  exports.prototype['license'] = undefined;
  /**
   * The amount of main memory in megabytes. See List server configurations.
   * @member {Number} memory_amount
   */
  exports.prototype['memory_amount'] = undefined;
  /**
   * The model of the server's network interfaces.
   * @member {String} nic_model
   * @default 'e1000'
   */
  exports.prototype['nic_model'] = 'e1000';
  /**
   * The pricing plan used. If a plan is selected, the core_number and  memory_amount must match the plan if they are present.
   * @member {String} plan
   * @default 'custom'
   */
  exports.prototype['plan'] = 'custom';
  /**
   * @member {Number} plan_ipv4_bytes
   */
  exports.prototype['plan_ipv4_bytes'] = undefined;
  /**
   * @member {Number} plan_ipv6_bytes
   */
  exports.prototype['plan_ipv6_bytes'] = undefined;
  /**
   * @member {module:model/ServerState} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/ServerStorageDevices} storage_devices
   */
  exports.prototype['storage_devices'] = undefined;
  /**
   * @member {module:model/ServerTags} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A timezone identifier, e.g. Europe/Helsinki. See Timezones.
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * A short description.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * The model of the server's video interface.
   * @member {module:model/Server.VideoModelEnum} video_model
   * @default 'vga'
   */
  exports.prototype['video_model'] = 'vga';
  /**
   * The state of the VNC remote access service.
   * @member {module:model/Server.VncEnum} vnc
   * @default 'off'
   */
  exports.prototype['vnc'] = 'off';
  /**
   * @member {String} vnc_host
   */
  exports.prototype['vnc_host'] = undefined;
  /**
   * The VNC remote access password.
   * @member {String} vnc_password
   */
  exports.prototype['vnc_password'] = undefined;
  /**
   * @member {String} vnc_port
   */
  exports.prototype['vnc_port'] = undefined;
  /**
   * @member {String} zone
   */
  exports.prototype['zone'] = undefined;

  /**
   * Allowed values for the <code>boot_order</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BootOrderEnum = {
    /**
     * value: "disk"
     * @const
     */
    disk: 'disk',
    /**
     * value: "cdrom"
     * @const
     */
    cdrom: 'cdrom',
    /**
     * value: "disk,cdrom"
     * @const
     */
    'disk,cdrom': 'disk,cdrom',
    /**
     * value: "cdrom,disk"
     * @const
     */
    'cdrom,disk': 'cdrom,disk',
  };

  /**
   * Allowed values for the <code>firewall</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FirewallEnum = {
    /**
     * value: "on"
     * @const
     */
    on: 'on',
    /**
     * value: "off"
     * @const
     */
    off: 'off',
  };

  /**
   * Allowed values for the <code>video_model</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VideoModelEnum = {
    /**
     * value: "vga"
     * @const
     */
    vga: 'vga',
    /**
     * value: "cirrus"
     * @const
     */
    cirrus: 'cirrus',
  };

  /**
   * Allowed values for the <code>vnc</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VncEnum = {
    /**
     * value: "on"
     * @const
     */
    on: 'on',
    /**
     * value: "off"
     * @const
     */
    off: 'off',
  };

  return exports;
});
