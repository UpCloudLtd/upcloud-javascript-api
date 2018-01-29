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

describe('PlanApi', function() {
  before(function() {
    instance = new upcloud.PlanApi();
    instance.apiClient.authentications.baseAuth.username =
      process.env.UPCLOUD_API_TEST_USER;
    instance.apiClient.authentications.baseAuth.password =
      process.env.UPCLOUD_API_TEST_PASSWORD;
  });

  describe('listPlans', function() {
    it('should call listPlans successfully', async () => {
      const { plans: { plan: plans } } = await instance.listPlans();
      expect(plans.length).to.not.be(0);
      const plan = plans[0];
      expect(plan.coreNumber).to.not.be(null);
      expect(plan.name).to.not.be(null);
      expect(plan.memoryAmount).to.not.be(null);
      expect(plan.publicTrafficOut).to.not.be(null);
      expect(plan.storageSize).to.not.be(null);
      expect(plan.storageTier).to.not.be(null);
    });
  });
});
