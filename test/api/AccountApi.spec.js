/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

import expect from 'expect.js';
import upcloud from '../../src/index';
import helpers from '../helpers';

var instance;

describe('AccountApi', function() {
  beforeEach(function() {
    instance = new upcloud.AccountApi();
    instance.apiClient.authentications.baseAuth.username =
      process.env.UPCLOUD_API_TEST_USER;
    instance.apiClient.authentications.baseAuth.password =
      process.env.UPCLOUD_API_TEST_PASSWORD;
  });

  describe('getAccount', function() {
    it('should call getAccount successfully', function(done) {
      instance.getAccount().then(function(result) {
        expect(result.account).to.have.key(['credits', 'username']);
        expect(result.account.username).to.be(
          process.env.UPCLOUD_API_TEST_USER,
        );
        done();
      });
    });
  });
});
