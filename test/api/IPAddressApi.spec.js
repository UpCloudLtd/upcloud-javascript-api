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
    instance = new upcloud.IPAddressApi();
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

  describe('IPAddressApi', function() {
    describe('addIp', function() {
      it('should call addIp successfully', function() {
        return instance
          .addIp({ ip: { family: 'IPv4', server: uuid } })
          .then(res => {
            expect(res.access).to.be('public');
            expect(res.family).to.be('IPV4');
            expect(res.server).to.be(uuid);
          });
      });
    });
    describe('deleteIp', function() {
      it('should call deleteIp successfully', function() {
        return instance.deleteIp(1).then(function(result) {
          expect(result).to.be(null);
        });
      });
    });
    describe('getDetails', function() {
      it('should call getDetails successfully', function() {
        return instance.getDetails(function(result) {
          console.log('Result', result);
          expect(1).to.be(2);
        });
      });
    });
    describe('listIps', function() {
      it('should call listIps successfully', function() {
        return instance.listIps().then(res => {
          expect(
            res.ipAddresses.some(
              ipAddress => ipAddress.address === testIpAddress.address,
            ),
          ).to.be(true);
        });
      });
    });
    describe('modifyIp', function() {
      it('should call modifyIp successfully', function() {
        return instance
          .modifyIp(testIpAddress.address, { ipAddress })
          .then(res => {
            expect(res.ptrRecord).to.be('hostname.example.com');
            expect(res.access).to.be(testIpAddress.access);
            expect(res.family).to.be(testIpAddress.family);
            expect(res.server).to.be(testIpAddress.server);
          });
      });
    });
  });
});
