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
    instance = new upcloud.PricesApi();
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

  describe('PricesApi', function() {
    describe('listPrices', function() {
      it('should call listPrices successfully', function() {
        return instance.listPrices().then(res => {
          const priceZones = res.prices.zone;
          const priceZone = priceZones[0];

          expect(priceZones.length).not.to.be(0);
          expect(priceZone.name).not.to.be(null);
          expect(priceZone.firewall).not.to.be(null);
          expect(priceZone.ioRequestBackup).not.to.be(null);
          expect(priceZone.ioRequestMaxiops).not.to.be(null);
          expect(priceZone.ipv4Address).not.to.be(null);
          expect(priceZone.ipv6Address).not.to.be(null);
          expect(priceZone.iublicIpv4BandwidthIn).not.to.be(null);
          expect(priceZone.publicIpv4BandwidthOut).not.to.be(null);
          expect(priceZone.publicIpv6BandwidthIn).not.to.be(null);
          expect(priceZone.publicIpv6BandwidthOut).not.to.be(null);
          expect(priceZone.serverCore).not.to.be(null);
          expect(priceZone.serverMemory).not.to.be(null);
          expect(priceZone.serverPlan1xCPU1GB).not.to.be(null);
          expect(priceZone.serverPlan2xCPU2GB).not.to.be(null);
          expect(priceZone.storageBackup).not.to.be(null);
          expect(priceZone.storageMaxiops).not.to.be(null);
        });
      });
    });
  });
});
