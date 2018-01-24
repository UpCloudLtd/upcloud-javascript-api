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
    instance = new upcloud.TagApi();
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

  describe('TagApi', function() {
    describe('assignTag', function() {
      it('should call assignTag successfully', function() {
        const serverId = testServer.uuid;
        const tagList = 'DEV';
        return instance.assignTag(serverId, tagList).then(res => {
          let server = res.server;
          expect(server.tags.tag.length).to.be(1);
          const tagList = 'TAG2';
          server = instance.assignTag(serverId, tagList).server;
          expect(server.tags.tag.length).to.be(2);
          expect(server.tags.tag.every(tag => tag === 'DEV' || tag === 'TAG2'));
        });
      });
    });
    describe('createTag', function() {
      it('should call createTag successfully', function() {
        return instance
          .createTag({ name: 'TESTTAG', description: 'Test tag' })
          .then(res => {
            const tag = res.tag;
            expect(tag.name).to.be('TESTTAG');
            expect(tag.description).to.be('Test tag');
            expect(tag.servers).not.to.be(null);
            instance.deleteTag('TESTTAG');
          });
      });
    });
    describe('deleteTag', function() {
      it('should call deleteTag successfully', function() {
        // List<Tag> tagList = api.listTags().getTags().getTag();
        // assertEquals(2, tagList.size());
        // api.deleteTag("DEV");
        // tagList = api.listTags().getTags().getTag();
        // assertEquals(1, tagList.size());
        // assertTrue(tagList.stream().noneMatch(tag -> tag.equals("DEV")));
        // const tagList =
      });
    });
    describe('listTags', function() {
      it('should call listTags successfully', function(done) {
        //uncomment below and update the code to test listTags
        //instance.listTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyTag', function() {
      it('should call modifyTag successfully', function(done) {
        //uncomment below and update the code to test modifyTag
        //instance.modifyTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('untag', function() {
      it('should call untag successfully', function(done) {
        //uncomment below and update the code to test untag
        //instance.untag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
