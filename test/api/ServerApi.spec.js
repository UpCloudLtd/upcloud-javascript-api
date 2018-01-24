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
})(this, function(expect, upcloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new upcloud.ServerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();
    else return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);
    else object[property] = value;
  };

  describe('ServerApi', function() {
    describe('createServer', function() {
      it('should call createServer successfully', function() {
        return instance.createServer(testServer).then(res => {
          const createdServer = res.server;
          expect(createdServer.title).to.be(testServer.title);
          expect(createdServer.zone).to.be(testServer.zone);
          expect(createdServer.hostname).to.be(testServer.hostname);
          expect(createdServer.plan).to.be(testServer.plan);
        });
      });
    });

    describe('listServers', function() {
      it('should call listServers successfully', function() {
        return instance.listServers().then(res => {
          const servers = res.servers.server;
          const prevSize = servers.length;
          const createdServer = instance.createServer(testServer).server;
          const newSize = instance.listServers().servers.server.length;
          expect(newSize).to.be(prevSize + 1);
        });
      });
    });
  });
});
