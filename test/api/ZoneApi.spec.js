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

describe('ZoneApi', function() {
  beforeEach(function() {
    instance = new upcloud.ZoneApi();
  });

  describe('listZones', function() {
    it('should call listZones successfully', async () => {
      const { zones: { zone: zones } } = await instance.listZones();
      expect(zones.length).to.be.greaterThan(0);
    });
  });
});
