/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.upcloud)
  }
})(this, function(expect, upcloud) {
  'use strict'

  var instance

  let testFirewallRule = {
    direction: 'in',
    action: 'accept',
    position: 1,
    family: 'IPv4',
    protocol: 'tcp',
    icmp_type: 0,
    destination_address_start: '127.0.0.1',
    destination_address_end: '127.0.1.1',
    destination_port_start: 80,
    destination_port_end: 80,
    source_address_start: '192.168.1.1',
    source_address_end: '192.168.1.255',
    source_port_start: 1,
    source_port_end: 2,
    comment: 'Allow SSH from this network',
  }

  beforeEach(function() {
    instance = new upcloud.FirewallApi()
    instance.apiClient.basePath = 'http://localhost:8080/1.2'
  })

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]()
    else return object[property]
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value)
    else object[property] = value
  }

  describe('FirewallApi', function() {
    describe('createFirewallRule', function() {
      it('should call createFirewallRule successfully', function() {
        return instance
          .createFirewallRule(1, { firewall_rule: testFirewallRule })
          .then(function(result) {
            expect(result).to.have.key('firewall_rule')
            expect(result.firewall_rule).to.have.keys([
              'icmp_type',
              'source_address_start',
              'source_port_start',
              'destination_port_end',
              'protocol',
              'source_address_end',
              'source_port_end',
              'action',
              'comment',
              'position',
              'destination_address_end',
              'family',
              'destination_address_start',
              'direction',
              'destination_port_start',
            ])
          })
      })
    })
    describe('deleteFirewallRule', function() {
      it('should call deleteFirewallRule successfully', function() {
        return instance.deleteFirewallRule(1, 1).then(function(result) {
          expect(result).to.be(null)
        })
      })
    })
    describe('getFirewallRule', function() {
      it('should call getFirewallRule successfully', function() {
        return instance.getFirewallRule(1, 1).then(function(result) {
          expect(result).to.have.key('firewall_rule')
          expect(result.firewall_rule).to.have.keys([
            'icmp_type',
            'source_address_start',
            'source_port_start',
            'destination_port_end',
            'protocol',
            'source_address_end',
            'source_port_end',
            'action',
            'comment',
            'position',
            'destination_address_end',
            'family',
            'destination_address_start',
            'direction',
            'destination_port_start',
          ])
        })
      })
    })
    describe('serverServerIdFirewallRuleGet', function() {
      it('should call serverServerIdFirewallRuleGet successfully', function() {
        return instance
          .serverServerIdFirewallRuleGet(1, 1)
          .then(function(result) {
            expect(result).to.have.key('firewall_rules')
            expect(result.firewall_rules).to.have.key('firewall_rule')
            expect(result.firewall_rules.firewall_rule).to.be.an('array')
          })
      })
    })
  })
})
