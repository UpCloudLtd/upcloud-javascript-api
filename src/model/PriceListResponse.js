/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PriceListResponsePrices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceListResponsePrices'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.PriceListResponse = factory(root.upcloud.ApiClient, root.upcloud.PriceListResponsePrices);
  }
}(this, function(ApiClient, PriceListResponsePrices) {
  'use strict';




  /**
   * The PriceListResponse model module.
   * @module model/PriceListResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>PriceListResponse</code>.
   * @alias module:model/PriceListResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PriceListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceListResponse} obj Optional instance to populate.
   * @return {module:model/PriceListResponse} The populated <code>PriceListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prices')) {
        obj['prices'] = PriceListResponsePrices.constructFromObject(data['prices']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PriceListResponsePrices} prices
   */
  exports.prototype['prices'] = undefined;



  return exports;
}));


