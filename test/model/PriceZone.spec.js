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
    instance = new upcloud.PriceZone();
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

  describe('PriceZone', function() {
    it('should create an instance of PriceZone', function() {
      // uncomment below and update the code to test PriceZone
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be.a(upcloud.PriceZone);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property firewall (base name: "firewall")', function() {
      // uncomment below and update the code to test the property firewall
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property ioRequestBackup (base name: "io_request_backup")', function() {
      // uncomment below and update the code to test the property ioRequestBackup
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property ioRequestHdd (base name: "io_request_hdd")', function() {
      // uncomment below and update the code to test the property ioRequestHdd
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property ioRequestMaxiops (base name: "io_request_maxiops")', function() {
      // uncomment below and update the code to test the property ioRequestMaxiops
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property ipv4Address (base name: "ipv4_address")', function() {
      // uncomment below and update the code to test the property ipv4Address
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property ipv6Address (base name: "ipv6_address")', function() {
      // uncomment below and update the code to test the property ipv6Address
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property publicIpv4BandwidthIn (base name: "public_ipv4_bandwidth_in")', function() {
      // uncomment below and update the code to test the property publicIpv4BandwidthIn
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property publicIpv4BandwidthOut (base name: "public_ipv4_bandwidth_out")', function() {
      // uncomment below and update the code to test the property publicIpv4BandwidthOut
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property publicIpv6BandwidthIn (base name: "public_ipv6_bandwidth_in")', function() {
      // uncomment below and update the code to test the property publicIpv6BandwidthIn
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property publicIpv6BandwidthOut (base name: "public_ipv6_bandwidth_out")', function() {
      // uncomment below and update the code to test the property publicIpv6BandwidthOut
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property serverCore (base name: "server_core")', function() {
      // uncomment below and update the code to test the property serverCore
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property serverMemory (base name: "server_memory")', function() {
      // uncomment below and update the code to test the property serverMemory
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property storageBackup (base name: "storage_backup")', function() {
      // uncomment below and update the code to test the property storageBackup
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property storageHdd (base name: "storage_hdd")', function() {
      // uncomment below and update the code to test the property storageHdd
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property storageMaxiops (base name: "storage_maxiops")', function() {
      // uncomment below and update the code to test the property storageMaxiops
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property serverPlan1xCPU1GB (base name: "server_plan_1xCPU-1GB")', function() {
      // uncomment below and update the code to test the property serverPlan1xCPU1GB
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

    it('should have the property serverPlan2xCPU2GB (base name: "server_plan_2xCPU-2GB")', function() {
      // uncomment below and update the code to test the property serverPlan2xCPU2GB
      //var instane = new upcloud.PriceZone();
      //expect(instance).to.be();
    });

  });

}));
