/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TagServers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagServers'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.Tag = factory(root.upcloud.ApiClient, root.upcloud.TagServers);
  }
}(this, function(ApiClient, TagServers) {
  'use strict';




  /**
   * The Tag model module.
   * @module model/Tag
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   * @class
   * @param name {String} The new tag
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;


  };

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tag} obj Optional instance to populate.
   * @return {module:model/Tag} The populated <code>Tag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('servers')) {
        obj['servers'] = TagServers.constructFromObject(data['servers']);
      }
    }
    return obj;
  }

  /**
   * The new tag
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the tag
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/TagServers} servers
   */
  exports.prototype['servers'] = undefined;



  return exports;
}));


