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
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.ErrorCode = factory(root.UpcloudApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class ErrorCode.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "ACTION_INVALID"
     * @const
     */
    "ACTION_INVALID": "ACTION_INVALID",
    /**
     * value: "ACTION_MISSING"
     * @const
     */
    "ACTION_MISSING": "ACTION_MISSING",
    /**
     * value: "BOOT_ORDER_INVALID"
     * @const
     */
    "BOOT_ORDER_INVALID": "BOOT_ORDER_INVALID",
    /**
     * value: "CORE_MEMORY_UNSUPPORTED"
     * @const
     */
    "CORE_MEMORY_UNSUPPORTED": "CORE_MEMORY_UNSUPPORTED",
    /**
     * value: "FIREWALL_INVALID"
     * @const
     */
    "FIREWALL_INVALID": "FIREWALL_INVALID",
    /**
     * value: "CORE_NUMBER_INVALID"
     * @const
     */
    "CORE_NUMBER_INVALID": "CORE_NUMBER_INVALID",
    /**
     * value: "HOSTNAME_INVALID"
     * @const
     */
    "HOSTNAME_INVALID": "HOSTNAME_INVALID",
    /**
     * value: "HOSTNAME_MISSING"
     * @const
     */
    "HOSTNAME_MISSING": "HOSTNAME_MISSING",
    /**
     * value: "MEMORY_AMOUNT_INVALID"
     * @const
     */
    "MEMORY_AMOUNT_INVALID": "MEMORY_AMOUNT_INVALID",
    /**
     * value: "NIC_MODEL_INVALID"
     * @const
     */
    "NIC_MODEL_INVALID": "NIC_MODEL_INVALID",
    /**
     * value: "PASSWORD_DELIVERY_INVALID"
     * @const
     */
    "PASSWORD_DELIVERY_INVALID": "PASSWORD_DELIVERY_INVALID",
    /**
     * value: "SERVER_TITLE_INVALID"
     * @const
     */
    "SERVER_TITLE_INVALID": "SERVER_TITLE_INVALID",
    /**
     * value: "SERVER_TITLE_MISSING"
     * @const
     */
    "SERVER_TITLE_MISSING": "SERVER_TITLE_MISSING",
    /**
     * value: "SIZE_INVALID"
     * @const
     */
    "SIZE_INVALID": "SIZE_INVALID",
    /**
     * value: "SIZE_MISSING"
     * @const
     */
    "SIZE_MISSING": "SIZE_MISSING",
    /**
     * value: "STORAGE_DEVICE_INVALID"
     * @const
     */
    "STORAGE_DEVICE_INVALID": "STORAGE_DEVICE_INVALID",
    /**
     * value: "STORAGE_DEVICE_MISSING"
     * @const
     */
    "STORAGE_DEVICE_MISSING": "STORAGE_DEVICE_MISSING",
    /**
     * value: "STORAGE_DEVICES_INVALID"
     * @const
     */
    "STORAGE_DEVICES_INVALID": "STORAGE_DEVICES_INVALID",
    /**
     * value: "STORAGE_DEVICES_MISSING"
     * @const
     */
    "STORAGE_DEVICES_MISSING": "STORAGE_DEVICES_MISSING",
    /**
     * value: "STORAGE_INVALID"
     * @const
     */
    "STORAGE_INVALID": "STORAGE_INVALID",
    /**
     * value: "STORAGE_MISSING"
     * @const
     */
    "STORAGE_MISSING": "STORAGE_MISSING",
    /**
     * value: "STORAGE_TITLE_INVALID"
     * @const
     */
    "STORAGE_TITLE_INVALID": "STORAGE_TITLE_INVALID",
    /**
     * value: "STORAGE_TITLE_MISSING"
     * @const
     */
    "STORAGE_TITLE_MISSING": "STORAGE_TITLE_MISSING",
    /**
     * value: "TIMEZONE_INVALID"
     * @const
     */
    "TIMEZONE_INVALID": "TIMEZONE_INVALID",
    /**
     * value: "TYPE_INVALID"
     * @const
     */
    "TYPE_INVALID": "TYPE_INVALID",
    /**
     * value: "TIER_INVALID"
     * @const
     */
    "TIER_INVALID": "TIER_INVALID",
    /**
     * value: "VIDEO_MODEL_INVALID"
     * @const
     */
    "VIDEO_MODEL_INVALID": "VIDEO_MODEL_INVALID",
    /**
     * value: "VNC_INVALID"
     * @const
     */
    "VNC_INVALID": "VNC_INVALID",
    /**
     * value: "VNC_PASSWORD_INVALID"
     * @const
     */
    "VNC_PASSWORD_INVALID": "VNC_PASSWORD_INVALID",
    /**
     * value: "ZONE_INVALID"
     * @const
     */
    "ZONE_INVALID": "ZONE_INVALID",
    /**
     * value: "ZONE_MISSING"
     * @const
     */
    "ZONE_MISSING": "ZONE_MISSING",
    /**
     * value: "USER_DATA_INVALID"
     * @const
     */
    "USER_DATA_INVALID": "USER_DATA_INVALID",
    /**
     * value: "INSUFFICIENT_CREDITS"
     * @const
     */
    "INSUFFICIENT_CREDITS": "INSUFFICIENT_CREDITS",
    /**
     * value: "STORAGE_FORBIDDEN"
     * @const
     */
    "STORAGE_FORBIDDEN": "STORAGE_FORBIDDEN",
    /**
     * value: "PLAN_CORE_NUMBER_ILLEGAL"
     * @const
     */
    "PLAN_CORE_NUMBER_ILLEGAL": "PLAN_CORE_NUMBER_ILLEGAL",
    /**
     * value: "PLAN_MEMORY_AMOUNT_ILLEGAL"
     * @const
     */
    "PLAN_MEMORY_AMOUNT_ILLEGAL": "PLAN_MEMORY_AMOUNT_ILLEGAL",
    /**
     * value: "TRIAL_PLAN"
     * @const
     */
    "TRIAL_PLAN": "TRIAL_PLAN",
    /**
     * value: "STORAGE_NOT_FOUND"
     * @const
     */
    "STORAGE_NOT_FOUND": "STORAGE_NOT_FOUND",
    /**
     * value: "ZONE_NOT_FOUND"
     * @const
     */
    "ZONE_NOT_FOUND": "ZONE_NOT_FOUND",
    /**
     * value: "CDROM_DEVICE_IN_USE"
     * @const
     */
    "CDROM_DEVICE_IN_USE": "CDROM_DEVICE_IN_USE",
    /**
     * value: "DEVICE_ADDRESS_IN_USE"
     * @const
     */
    "DEVICE_ADDRESS_IN_USE": "DEVICE_ADDRESS_IN_USE",
    /**
     * value: "IP_ADDRESS_RESOURCES_UNAVAILABLE"
     * @const
     */
    "IP_ADDRESS_RESOURCES_UNAVAILABLE": "IP_ADDRESS_RESOURCES_UNAVAILABLE",
    /**
     * value: "MULTIPLE_TEMPLATES"
     * @const
     */
    "MULTIPLE_TEMPLATES": "MULTIPLE_TEMPLATES",
    /**
     * value: "PUBLIC_STORAGE_ATTACH"
     * @const
     */
    "PUBLIC_STORAGE_ATTACH": "PUBLIC_STORAGE_ATTACH",
    /**
     * value: "SERVER_RESOURCES_UNAVAILABLE"
     * @const
     */
    "SERVER_RESOURCES_UNAVAILABLE": "SERVER_RESOURCES_UNAVAILABLE",
    /**
     * value: "STORAGE_ATTACHED_AS_CDROM"
     * @const
     */
    "STORAGE_ATTACHED_AS_CDROM": "STORAGE_ATTACHED_AS_CDROM",
    /**
     * value: "STORAGE_ATTACHED_AS_DISK"
     * @const
     */
    "STORAGE_ATTACHED_AS_DISK": "STORAGE_ATTACHED_AS_DISK",
    /**
     * value: "STORAGE_DEVICE_LIMIT_REACHED"
     * @const
     */
    "STORAGE_DEVICE_LIMIT_REACHED": "STORAGE_DEVICE_LIMIT_REACHED",
    /**
     * value: "STORAGE_IN_USE"
     * @const
     */
    "STORAGE_IN_USE": "STORAGE_IN_USE",
    /**
     * value: "STORAGE_RESOURCES_UNAVAILABLE"
     * @const
     */
    "STORAGE_RESOURCES_UNAVAILABLE": "STORAGE_RESOURCES_UNAVAILABLE",
    /**
     * value: "STORAGE_STATE_ILLEGAL"
     * @const
     */
    "STORAGE_STATE_ILLEGAL": "STORAGE_STATE_ILLEGAL",
    /**
     * value: "STORAGE_TYPE_ILLEGAL"
     * @const
     */
    "STORAGE_TYPE_ILLEGAL": "STORAGE_TYPE_ILLEGAL",
    /**
     * value: "ZONE_MISMATCH"
     * @const
     */
    "ZONE_MISMATCH": "ZONE_MISMATCH",
    /**
     * value: "INVALID_USERNAME"
     * @const
     */
    "INVALID_USERNAME": "INVALID_USERNAME"  };

  /**
   * Returns a <code>ErrorCode</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ErrorCode} The enum <code>ErrorCode</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


