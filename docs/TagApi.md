# upcloud.TagApi

All URIs are relative to *http://api.upcloud.com/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignTag**](TagApi.md#assignTag) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
[**createTag**](TagApi.md#createTag) | **POST** /tag | Create a new tag
[**deleteTag**](TagApi.md#deleteTag) | **DELETE** /tag/{tagName} | Delete tag
[**listTags**](TagApi.md#listTags) | **GET** /tag | List existing tags
[**modifyTag**](TagApi.md#modifyTag) | **PUT** /tag/{tagName} | Modify existing tag
[**untag**](TagApi.md#untag) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server


<a name="assignTag"></a>
# **assignTag**
> CreateServerResponse assignTag(serverId, tagList)

Assign tag to a server

Servers can be tagged with one or more tags. The tags used must exist

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.TagApi();

var serverId = "serverId_example"; // String | Server id

var tagList = "tagList_example"; // String | List of tags

apiInstance.assignTag(serverId, tagList).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **tagList** | **String**| List of tags | 

### Return type

[**CreateServerResponse**](CreateServerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTag"></a>
# **createTag**
> CreateNewTagResponse createTag(tag)

Create a new tag

Creates a new tag. Existing servers can be tagged in same request

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.TagApi();

var tag = new upcloud.Tag(); // Tag | 

apiInstance.createTag(tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**Tag**](Tag.md)|  | 

### Return type

[**CreateNewTagResponse**](CreateNewTagResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(tagName)

Delete tag

Deleting existing tag untags all servers from specified tag and deletes tag definition

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.TagApi();

var tagName = "tagName_example"; // String | Tag name

apiInstance.deleteTag(tagName).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagName** | **String**| Tag name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTags"></a>
# **listTags**
> TagListResponse listTags()

List existing tags

Returns all existing tags with their properties and servers tagged

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.TagApi();
apiInstance.listTags().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TagListResponse**](TagListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyTag"></a>
# **modifyTag**
> CreateNewTagResponse modifyTag(tagNametag)

Modify existing tag

Changes attributes of an existing tag

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.TagApi();

var tagName = "tagName_example"; // String | Tag name

var tag = new upcloud.Tag1(); // Tag1 | 

apiInstance.modifyTag(tagNametag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagName** | **String**| Tag name | 
 **tag** | [**Tag1**](Tag1.md)|  | 

### Return type

[**CreateNewTagResponse**](CreateNewTagResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="untag"></a>
# **untag**
> CreateServerResponse untag(serverId, tagName)

Remove tag from server

Untags tags from given server. The tag(s) must exist

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.TagApi();

var serverId = "serverId_example"; // String | Server id

var tagName = "tagName_example"; // String | Tag name

apiInstance.untag(serverId, tagName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **tagName** | **String**| Tag name | 

### Return type

[**CreateServerResponse**](CreateServerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

