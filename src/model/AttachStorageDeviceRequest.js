/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/StorageDevice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./StorageDevice'),
    );
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.AttachStorageDeviceRequest = factory(
      root.upcloud.ApiClient,
      root.upcloud.StorageDevice,
    );
  }
})(this, function(ApiClient, StorageDevice) {
  'use strict';

  /**
   * The AttachStorageDeviceRequest model module.
   * @module model/AttachStorageDeviceRequest
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>AttachStorageDeviceRequest</code>.
   * @alias module:model/AttachStorageDeviceRequest
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>AttachStorageDeviceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachStorageDeviceRequest} obj Optional instance to populate.
   * @return {module:model/AttachStorageDeviceRequest} The populated <code>AttachStorageDeviceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('storage_device')) {
        obj['storage_device'] = StorageDevice.constructFromObject(
          data['storage_device'],
        );
      }
    }
    return obj;
  };

  /**
   * @member {module:model/StorageDevice} storage_device
   */
  exports.prototype['storage_device'] = undefined;

  return exports;
});
