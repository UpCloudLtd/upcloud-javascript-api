# UpcloudApi.ServerApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serverGet**](ServerApi.md#serverGet) | **GET** /server | List of servers
[**serverPost**](ServerApi.md#serverPost) | **POST** /server | Create server
[**serverServerIdDelete**](ServerApi.md#serverServerIdDelete) | **DELETE** /server/{serverId} | Delete server
[**serverServerIdGet**](ServerApi.md#serverServerIdGet) | **GET** /server/{serverId} | Server details
[**serverServerIdPut**](ServerApi.md#serverServerIdPut) | **PUT** /server/{serverId} | Modify server


<a name="serverGet"></a>
# **serverGet**
> InlineResponse200 serverGet()

List of servers

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

apiInstance.serverGet((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="serverPost"></a>
# **serverPost**
> InlineResponse2001 serverPost(opts)

Create server

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let opts = { 
  'server': new UpcloudApi.Server() // Server | 
};

apiInstance.serverPost(opts, (error, data, response) => {
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
 **server** | [**Server**](Server.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serverServerIdDelete"></a>
# **serverServerIdDelete**
> serverServerIdDelete(serverId)

Delete server

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to delete


apiInstance.serverServerIdDelete(serverId, (error, data, response) => {
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
 **serverId** | **String**| Id of server to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdGet"></a>
# **serverServerIdGet**
> InlineResponse2001 serverServerIdGet(serverId)

Server details

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to return


apiInstance.serverServerIdGet(serverId, (error, data, response) => {
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
 **serverId** | **String**| Id of server to return | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdPut"></a>
# **serverServerIdPut**
> InlineResponse2001 serverServerIdPut(serverId, opts)

Modify server

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to modify

let opts = { 
  'server': new UpcloudApi.Server() // Server | 
};

apiInstance.serverServerIdPut(serverId, opts, (error, data, response) => {
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
 **serverId** | **String**| Id of server to modify | 
 **server** | [**Server**](Server.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

