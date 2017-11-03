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

  beforeEach(function() {
    instance = new upcloud.AccountApi()
    instance.apiClient.authentications.baseAuth.username =
      process.env.UPCLOUD_API_TEST_USER
    instance.apiClient.authentications.baseAuth.password =
      process.env.UPCLOUD_API_TEST_PASSWORD
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

  describe('AccountApi', function() {
    describe('getAccount', function() {
      it('should call getAccount successfully', function(done) {
        instance.getAccount().then(function(result) {
          expect(result.account).to.have.key(['credits', 'username'])
          done()
        })
      })
    })
  })
})
