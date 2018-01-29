/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

import expect from 'expect.js';
import helpers from '../helpers';
import upcloud from '../../src/index';

var instance;

describe('PricesApi', function() {
  before(function() {
    instance = new upcloud.PricesApi();
  });

  describe('listPrices', function() {
    it('should call listPrices successfully', async () => {
      const { prices: { zone: priceZones } } = await instance.listPrices();
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
