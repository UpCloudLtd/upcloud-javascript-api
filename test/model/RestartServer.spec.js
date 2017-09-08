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
    instance = new upcloud.RestartServer();
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

  describe('RestartServer', function() {
    it('should create an instance of RestartServer', function() {
      // uncomment below and update the code to test RestartServer
      //var instane = new upcloud.RestartServer();
      //expect(instance).to.be.a(upcloud.RestartServer);
    });

    it('should have the property stopType (base name: "stop_type")', function() {
      // uncomment below and update the code to test the property stopType
      //var instane = new upcloud.RestartServer();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instane = new upcloud.RestartServer();
      //expect(instance).to.be();
    });

    it('should have the property timeoutAction (base name: "timeout_action")', function() {
      // uncomment below and update the code to test the property timeoutAction
      //var instane = new upcloud.RestartServer();
      //expect(instance).to.be();
    });

  });

}));
