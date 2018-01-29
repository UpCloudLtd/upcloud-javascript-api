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

const deleteAllTags = async () => {
  const instance = new upcloud.TagApi();
  const { tags: { tag: tags } } = await instance.listTags();
  return Promise.all(
    tags.map(tag => tag.name).map(instance.deleteTag.bind(instance)),
  );
};

describe('TagApi', function() {
  before(async () => {
    instance = new upcloud.TagApi();
    await deleteAllTags();
    await instance.createTag({
      tag: { name: 'TESTTAG1', description: 'Test tag 1' },
    });
    await instance.createTag({
      tag: { name: 'TESTTAG2', description: 'Test tag 2' },
    });
  });

  after(async () => {
    await deleteAllTags();
  });

  beforeEach(async () => {});

  describe('assignTag', function() {
    it('should call assignTag successfully', async () => {
      testServer = await helpers.createServer();
      const serverId = testServer.uuid;
      let tagList = 'TESTTAG1';
      let { server } = await instance.assignTag(serverId, tagList);
      expect(server.tags.tag.length).to.be(1);
      tagList = 'TESTTAG2';
      server = (await instance.assignTag(serverId, tagList)).server;
      expect(server.tags.tag.length).to.be(2);
      expect(
        server.tags.tag.every(tag => tag === 'TESTTAG1' || tag === 'TESTTAG2'),
      );
    });
  });
  describe('createTag', async () => {
    it('should call createTag successfully', async () => {
      const { tag } = await instance.createTag({
        tag: {
          name: 'TESTTAG',
          description: 'Test tag',
        },
      });
      expect(tag.name).to.be('TESTTAG');
      expect(tag.description).to.be('Test tag');
      expect(tag.servers).not.to.be(null);
      await instance.deleteTag('TESTTAG');
    });
  });
  describe('deleteTag', function() {
    it('should call deleteTag successfully', async () => {
      const { tag } = await instance.createTag({
        tag: {
          name: 'TESTTAG',
          description: 'Test tag',
        },
      });
      let { tags: { tag: tags } } = await instance.listTags();
      const prevLength = tags.length;
      await instance.deleteTag('TESTTAG');
      tags = (await instance.listTags()).tags.tag;
      expect(prevLength).to.be(tags.length + 1);
    });
  });
  describe('listTags', function() {
    it('should call listTags successfully', async () => {
      const result = await instance.listTags();
      expect(result).to.have.key('tags');
      expect(result.tags).to.have.key('tag');
    });
  });
  describe('modifyTag', function() {
    it('should call modifyTag successfully', async () => {
      const { tag } = await instance.createTag({
        tag: {
          name: 'MTAG1',
          description: 'Modify tag',
        },
      });
      const { tag: modifiedTag } = await instance.modifyTag(tag.name, {
        tag: {
          name: 'MTAG2',
          description: 'Modified tag',
        },
      });
      expect(modifiedTag.name).to.be('MTAG2');
      expect(modifiedTag.description).to.be('Modified tag');
    });
  });
});
