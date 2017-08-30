# UpcloudApi.TagApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serverServerIdTagTagListPost**](TagApi.md#serverServerIdTagTagListPost) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
[**serverServerIdUntagTagNamePost**](TagApi.md#serverServerIdUntagTagNamePost) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
[**tagGet**](TagApi.md#tagGet) | **GET** /tag | List existing tags
[**tagPost**](TagApi.md#tagPost) | **POST** /tag | Create a new tag
[**tagTagNameDelete**](TagApi.md#tagTagNameDelete) | **DELETE** /tag/{tagName} | Delete tag
[**tagTagNamePut**](TagApi.md#tagTagNamePut) | **PUT** /tag/{tagName} | Modify existing tag


<a name="serverServerIdTagTagListPost"></a>
# **serverServerIdTagTagListPost**
> ServerListResponse serverServerIdTagTagListPost(serverId, tagList)

Assign tag to a server

Servers can be tagged with one or more tags. The tags used must exist

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let serverId = "serverId_example"; // String | Server id

let tagList = "tagList_example"; // String | List of tags


apiInstance.serverServerIdTagTagListPost(serverId, tagList, (error, data, response) => {
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

<a name="serverServerIdUntagTagNamePost"></a>
# **serverServerIdUntagTagNamePost**
> ServerListResponse serverServerIdUntagTagNamePost(serverId, tagName)

Remove tag from server

Untags tags from given server. The tag(s) must exist

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let serverId = "serverId_example"; // String | Server id

let tagName = "tagName_example"; // String | Tag name


apiInstance.serverServerIdUntagTagNamePost(serverId, tagName, (error, data, response) => {
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

<a name="tagGet"></a>
# **tagGet**
> InlineResponse2009 tagGet()

List existing tags

Returns all existing tags with their properties and servers tagged

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

apiInstance.tagGet((error, data, response) => {
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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="tagPost"></a>
# **tagPost**
> InlineResponse20010 tagPost(tag)

Create a new tag

Creates a new tag. Existing servers can be tagged in same request

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let tag = new UpcloudApi.Tag(); // Tag | 


apiInstance.tagPost(tag, (error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="tagTagNameDelete"></a>
# **tagTagNameDelete**
> tagTagNameDelete(tagName)

Delete tag

Deleting existing tag untags all servers from specified tag and deletes tag definition

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let tagName = "tagName_example"; // String | Tag name


apiInstance.tagTagNameDelete(tagName, (error, data, response) => {
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

<a name="tagTagNamePut"></a>
# **tagTagNamePut**
> InlineResponse20010 tagTagNamePut(tagNametag)

Modify existing tag

Changes attributes of an existing tag

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TagApi();

let tagName = "tagName_example"; // String | Tag name

let tag = new UpcloudApi.Tag1(); // Tag1 | 


apiInstance.tagTagNamePut(tagNametag, (error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

