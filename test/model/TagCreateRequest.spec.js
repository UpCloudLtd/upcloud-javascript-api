/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.upcloud);
  }
}(this, function(expect, upcloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new upcloud.TagCreateRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TagCreateRequest', function() {
    it('should create an instance of TagCreateRequest', function() {
      // uncomment below and update the code to test TagCreateRequest
      //var instane = new upcloud.TagCreateRequest();
      //expect(instance).to.be.a(upcloud.TagCreateRequest);
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new upcloud.TagCreateRequest();
      //expect(instance).to.be();
    });

  });

}));
