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
    instance = new upcloud.ServerApi()
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

  describe('ServerApi', function() {
    describe('assignTag', function() {
      it('should call assignTag successfully', function(done) {
        //uncomment below and update the code to test assignTag
        //instance.assignTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('attachStorage', function() {
      it('should call attachStorage successfully', function(done) {
        //uncomment below and update the code to test attachStorage
        //instance.attachStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('createFirewallRule', function() {
      it('should call createFirewallRule successfully', function(done) {
        //uncomment below and update the code to test createFirewallRule
        //instance.createFirewallRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('createServer', function() {
      it('should call createServer successfully', function(done) {
        //uncomment below and update the code to test createServer
        //instance.createServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('deleteFirewallRule', function() {
      it('should call deleteFirewallRule successfully', function(done) {
        //uncomment below and update the code to test deleteFirewallRule
        //instance.deleteFirewallRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('deleteServer', function() {
      it('should call deleteServer successfully', function(done) {
        //uncomment below and update the code to test deleteServer
        //instance.deleteServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('detachStorage', function() {
      it('should call detachStorage successfully', function(done) {
        //uncomment below and update the code to test detachStorage
        //instance.detachStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('ejectCdrom', function() {
      it('should call ejectCdrom successfully', function(done) {
        //uncomment below and update the code to test ejectCdrom
        //instance.ejectCdrom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('getFirewallRule', function() {
      it('should call getFirewallRule successfully', function(done) {
        //uncomment below and update the code to test getFirewallRule
        //instance.getFirewallRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('listServerConfigurations', function() {
      it('should call listServerConfigurations successfully', function(done) {
        //uncomment below and update the code to test listServerConfigurations
        //instance.listServerConfigurations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('listServers', function() {
      it('should call listServers successfully', function(done) {
        //uncomment below and update the code to test listServers
        instance.listServers().then(function(resp) {
          console.log('Resp', resp.servers.server[0])
          done()
        })
        //  if (error) throw error;
        //expect().to.be();
        //});
      })
    })
    describe('loadCdrom', function() {
      it('should call loadCdrom successfully', function(done) {
        //uncomment below and update the code to test loadCdrom
        //instance.loadCdrom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('modifyServer', function() {
      it('should call modifyServer successfully', function(done) {
        //uncomment below and update the code to test modifyServer
        //instance.modifyServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('restartServer', function() {
      it('should call restartServer successfully', function(done) {
        //uncomment below and update the code to test restartServer
        //instance.restartServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('serverDetails', function() {
      it('should call serverDetails successfully', function(done) {
        //uncomment below and update the code to test serverDetails
        //instance.serverDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('serverServerIdFirewallRuleGet', function() {
      it('should call serverServerIdFirewallRuleGet successfully', function(
        done
      ) {
        //uncomment below and update the code to test serverServerIdFirewallRuleGet
        //instance.serverServerIdFirewallRuleGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('startServer', function() {
      it('should call startServer successfully', function(done) {
        //uncomment below and update the code to test startServer
        //instance.startServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('stopServer', function() {
      it('should call stopServer successfully', function(done) {
        //uncomment below and update the code to test stopServer
        //instance.stopServer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
    describe('untag', function() {
      it('should call untag successfully', function(done) {
        //uncomment below and update the code to test untag
        //instance.untag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done()
      })
    })
  })
})
