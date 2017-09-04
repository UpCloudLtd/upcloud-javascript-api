/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SuccessStoragesResponseStorages'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SuccessStoragesResponseStorages'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.SuccessStoragesResponse = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.SuccessStoragesResponseStorages);
  }
}(this, function(ApiClient, SuccessStoragesResponseStorages) {
  'use strict';




  /**
   * The SuccessStoragesResponse model module.
   * @module model/SuccessStoragesResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>SuccessStoragesResponse</code>.
   * @alias module:model/SuccessStoragesResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SuccessStoragesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuccessStoragesResponse} obj Optional instance to populate.
   * @return {module:model/SuccessStoragesResponse} The populated <code>SuccessStoragesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('storages')) {
        obj['storages'] = SuccessStoragesResponseStorages.constructFromObject(data['storages']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SuccessStoragesResponseStorages} storages
   */
  exports.prototype['storages'] = undefined;



  return exports;
}));


