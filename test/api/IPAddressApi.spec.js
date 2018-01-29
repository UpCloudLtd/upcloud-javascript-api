/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

import expect from 'expect.js';
import helpers from '../helpers';
import upcloud from '../../src/index';

var instance, testServer;

describe('IPAddressApi', function() {
  before(function() {
    instance = new upcloud.IPAddressApi();
    instance.apiClient.authentications.baseAuth.username =
      process.env.UPCLOUD_API_TEST_USER;
    instance.apiClient.authentications.baseAuth.password =
      process.env.UPCLOUD_API_TEST_PASSWORD;
  });

  beforeEach(async () => {
    testServer = await helpers.createServer();
    await helpers.stopServer(testServer.uuid);

    return testServer;
  });

  describe('addIp', function() {
    it('should call addIp successfully', async () => {
      const { ip_address: { access, family, server } } = await instance.addIp({
        ip_address: { family: 'IPv4', server: testServer.uuid },
      });
      expect(access).to.be('public');
      expect(family).to.be('IPv4');
      expect(server).to.be(testServer.uuid);
    });
  });
  describe('deleteIp', function() {
    it('should call deleteIp successfully', async () => {
      const { ip_address: { address } } = await instance.addIp({
        ip_address: { family: 'IPv4', server: testServer.uuid },
      });
      const result = await instance.deleteIp(address);
      expect(result).to.be(null);
    });
  });
  describe('getDetails', function() {
    it('should call getDetails successfully', async () => {
      const { ip_address: { address } } = await instance.addIp({
        ip_address: { family: 'IPv4', server: testServer.uuid },
      });
      const {
        ip_address: { access, family, server },
        ip_address,
      } = await instance.getDetails(address);
      expect(ip_address).to.have.keys([
        'access',
        'server',
        'address',
        'family',
        'ptr_record',
      ]);
      expect(access).to.be('public');
      expect(family).to.be('IPv4');
      expect(server).to.be(testServer.uuid);
    });
  });
  describe('listIps', function() {
    it('should call listIps successfully', async () => {
      const { ip_address: { address } } = await instance.addIp({
        ip_address: { family: 'IPv4', server: testServer.uuid },
      });
      const { ip_addresses: { ip_address: ips } } = await instance.listIps();
      expect(ips.some(ipAddress => ipAddress.address === address));
    });
  });
  describe('modifyIp', function() {
    it('should call modifyIp successfully', async () => {
      const { ip_address: { address } } = await instance.addIp({
        ip_address: { family: 'IPv4', server: testServer.uuid },
      });
      const { ip_address: { ptr_record } } = await instance.modifyIp(address, {
        ip_address: {
          ptr_record: 'hostname.example.com',
        },
      });
      expect(ptr_record).to.be('hostname.example.com');
    });
  });
});
