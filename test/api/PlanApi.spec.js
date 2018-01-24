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
})(this, function(expect, upcloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new upcloud.PlanApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();
    else return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);
    else object[property] = value;
  };

  describe('PlanApi', function() {
    describe('listPlans', function() {
      it('should call listPlans successfully', function() {
        instance.getPlans().then(plans => {
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
  });
});
