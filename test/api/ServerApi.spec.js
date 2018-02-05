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

describe('ServerApi', function() {
  before(function() {
    instance = new upcloud.ServerApi();
  });

  beforeEach(function() {});

  describe('createServer', function() {
    it('should call createServer successfully', async () => {
      const createdServer = await helpers.createServer();
      const testServer = helpers.serverData.server;
      expect(createdServer.title).to.be(testServer.title);
      expect(createdServer.zone).to.be(testServer.zone);
      expect(createdServer.hostname).to.be(testServer.hostname);
      expect(createdServer.plan).to.be(testServer.plan);
    });
  });

  describe('listServers', function() {
    it('should call listServers successfully', async () => {
      const { servers: { server: servers } } = await instance.listServers();
      const prevSize = servers.length;
      const createdServer = await helpers.createServer();
      const serverList = (await instance.listServers()).servers.server;

      expect(
        serverList.some(server => server.uuid === createdServer.uuid),
      ).to.be(true);
    });
  });
});
