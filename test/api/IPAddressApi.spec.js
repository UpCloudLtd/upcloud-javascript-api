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
    instance = new upcloud.IPAddressApi()
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

  describe('IPAddressApi', function() {
    describe('addIp', function() {
      it('should call addIp successfully', function() {
        return instance.addIp().then(function(result) {
          expect(result).to.have.key('ip_address')
          expect(result.ip_address).to.have.keys(['access', 'family', 'server'])
        })
      })
    })
    describe('deleteIp', function() {
      it('should call deleteIp successfully', function() {
        return instance.deleteIp(1).then(function(result) {
          expect(result).to.be(null)
        })
      })
    })
    describe('getDetails', function() {
      it('should call getDetails successfully', function() {
        return instance.getDetails(function(result) {
          console.log('Result', result)
          expect(1).to.be(2)
        })
      })
    })
    describe('listIps', function() {
      it('should call listIps successfully', function(done) {
        //uncomment below and update the code to test listIps
        //instance.listIps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('modifyIp', function() {
      it('should call modifyIp successfully', function(done) {
        //uncomment below and update the code to test modifyIp
        //instance.modifyIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
  })
})
