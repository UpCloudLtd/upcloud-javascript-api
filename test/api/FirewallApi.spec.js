/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

import expect from 'expect.js';
import upcloud from '../../src/index';
import helpers from '../helpers';

var instance, serverApi, testServer;

let testFirewallRule = {
  direction: 'in',
  action: 'accept',
  family: 'IPv4',
  protocol: 'tcp',
  destination_port_start: 22,
  destination_port_end: 22,
  source_address_start: '193.168.1.1',
  source_address_end: '193.168.1.255',
  source_port_start: 1,
  source_port_end: 32000,
  comment: 'Allow SSH from this network',
};

describe('FirewallApi', function() {
  before(async () => {
    instance = new upcloud.FirewallApi();
    instance.apiClient.authentications.baseAuth.username =
      process.env.UPCLOUD_API_TEST_USER;
    instance.apiClient.authentications.baseAuth.password =
      process.env.UPCLOUD_API_TEST_PASSWORD;
  });

  beforeEach(async () => {
    testServer = await helpers.createServer();
    const testRule = {
      ...testFirewallRule,
      source_address_start: '192.168.1.1',
      source_address_end: '192.168.1.255',
      comment: 'Common firewall rule',
    };
    await instance.createFirewallRule(testServer.uuid, {
      firewall_rule: testRule,
    });

    return testServer;
  });

  afterEach(() => {
    // return helpers.deleteServer(testServer.uuid);
  });

  describe('createFirewallRule', () => {
    it('should call createFirewallRule successfully', async () => {
      const result = await instance.createFirewallRule(testServer.uuid, {
        firewall_rule: testFirewallRule,
      });

      expect(result).to.have.key('firewall_rule');
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
      ]);
    });
  });
  describe('deleteFirewallRule', function() {
    it('should call deleteFirewallRule successfully', function() {
      return instance
        .deleteFirewallRule(testServer.uuid, 1)
        .then(function(result) {
          expect(result).to.be(null);
        });
    });
  });
  describe('getFirewallRule', () => {
    it('should call getFirewallRule successfully', () => {
      return instance.getFirewallRule(testServer.uuid, 1).then(result => {
        expect(result).to.have.key('firewall_rule');
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
        ]);
      });
    });
  });
  describe('serverServerIdFirewallRuleGet', function() {
    it('should call serverServerIdFirewallRuleGet successfully', function() {
      return instance
        .serverServerIdFirewallRuleGet(testServer.uuid, 1)
        .then(function(result) {
          expect(result).to.have.key('firewall_rules');
          expect(result.firewall_rules).to.have.key('firewall_rule');
          expect(result.firewall_rules.firewall_rule).to.be.an('array');
        });
    });
  });
});
