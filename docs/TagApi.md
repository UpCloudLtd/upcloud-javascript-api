# UpcloudApi.TagApi

All URIs are relative to *http://localhost/1.2*

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
> ServerListResponse assignTag(serverId, tagList)

Assign tag to a server

Servers can be tagged with one or more tags. The tags used must exist

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let serverId = "serverId_example"; // String | Server id

let tagList = "tagList_example"; // String | List of tags


apiInstance.assignTag(serverId, tagList, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **tagList** | **String**| List of tags | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createTag"></a>
# **createTag**
> CreateNewTagResponse createTag(tag)

Create a new tag

Creates a new tag. Existing servers can be tagged in same request

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let tag = new UpcloudApi.Tag(); // Tag | 


apiInstance.createTag(tag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(tagName)

Delete tag

Deleting existing tag untags all servers from specified tag and deletes tag definition

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let tagName = "tagName_example"; // String | Tag name


apiInstance.deleteTag(tagName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listTags"></a>
# **listTags**
> TagListResponse listTags()

List existing tags

Returns all existing tags with their properties and servers tagged

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

apiInstance.listTags((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TagListResponse**](TagListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="modifyTag"></a>
# **modifyTag**
> CreateNewTagResponse modifyTag(tagNametag)

Modify existing tag

Changes attributes of an existing tag

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let tagName = "tagName_example"; // String | Tag name

let tag = new UpcloudApi.Tag1(); // Tag1 | 


apiInstance.modifyTag(tagNametag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="untag"></a>
# **untag**
> ServerListResponse untag(serverId, tagName)

Remove tag from server

Untags tags from given server. The tag(s) must exist

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let serverId = "serverId_example"; // String | Server id

let tagName = "tagName_example"; // String | Tag name


apiInstance.untag(serverId, tagName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **tagName** | **String**| Tag name | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

