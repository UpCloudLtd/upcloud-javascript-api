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
    instance = new upcloud.Server();
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

  describe('Server', function() {
    it('should create an instance of Server', function() {
      // uncomment below and update the code to test Server
      //var instane = new upcloud.Server();
      //expect(instance).to.be.a(upcloud.Server);
    });

    it('should have the property bootOrder (base name: "boot_order")', function() {
      // uncomment below and update the code to test the property bootOrder
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property coreNumber (base name: "core_number")', function() {
      // uncomment below and update the code to test the property coreNumber
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property firewall (base name: "firewall")', function() {
      // uncomment below and update the code to test the property firewall
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property ipAddresses (base name: "ip_addresses")', function() {
      // uncomment below and update the code to test the property ipAddresses
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property license (base name: "license")', function() {
      // uncomment below and update the code to test the property license
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property memoryAmount (base name: "memory_amount")', function() {
      // uncomment below and update the code to test the property memoryAmount
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property nicModel (base name: "nic_model")', function() {
      // uncomment below and update the code to test the property nicModel
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property plan (base name: "plan")', function() {
      // uncomment below and update the code to test the property plan
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property planIpv4Bytes (base name: "plan_ipv4_bytes")', function() {
      // uncomment below and update the code to test the property planIpv4Bytes
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property planIpv6Bytes (base name: "plan_ipv6_bytes")', function() {
      // uncomment below and update the code to test the property planIpv6Bytes
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property storageDevices (base name: "storage_devices")', function() {
      // uncomment below and update the code to test the property storageDevices
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property videoModel (base name: "video_model")', function() {
      // uncomment below and update the code to test the property videoModel
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property vnc (base name: "vnc")', function() {
      // uncomment below and update the code to test the property vnc
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property vncHost (base name: "vnc_host")', function() {
      // uncomment below and update the code to test the property vncHost
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property vncPassword (base name: "vnc_password")', function() {
      // uncomment below and update the code to test the property vncPassword
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property vncPort (base name: "vnc_port")', function() {
      // uncomment below and update the code to test the property vncPort
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

    it('should have the property zone (base name: "zone")', function() {
      // uncomment below and update the code to test the property zone
      //var instane = new upcloud.Server();
      //expect(instance).to.be();
    });

  });

}));
