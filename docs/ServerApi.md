# UpcloudApi.ServerApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServer**](ServerApi.md#createServer) | **POST** /server | Create server
[**deleteServer**](ServerApi.md#deleteServer) | **DELETE** /server/{serverId} | Delete server
[**listServers**](ServerApi.md#listServers) | **GET** /server | List of servers
[**serverDetails**](ServerApi.md#serverDetails) | **GET** /server/{serverId} | Server details
[**updateServer**](ServerApi.md#updateServer) | **PUT** /server/{serverId} | Modify server


<a name="createServer"></a>
# **createServer**
> InlineResponse2001 createServer(opts)

Create server

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let opts = { 
  'server': new UpcloudApi.Server() // Server | 
};

apiInstance.createServer(opts, (error, data, response) => {
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

<a name="deleteServer"></a>
# **deleteServer**
> deleteServer(serverId)

Delete server

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to delete


apiInstance.deleteServer(serverId, (error, data, response) => {
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

<a name="listServers"></a>
# **listServers**
> InlineResponse200 listServers()

List of servers

List servers

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

apiInstance.listServers((error, data, response) => {
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

<a name="serverDetails"></a>
# **serverDetails**
> InlineResponse2001 serverDetails(serverId)

Server details

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to return


apiInstance.serverDetails(serverId, (error, data, response) => {
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

<a name="updateServer"></a>
# **updateServer**
> InlineResponse2001 updateServer(serverId, opts)

Modify server

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to modify

let opts = { 
  'server': new UpcloudApi.Server() // Server | 
};

apiInstance.updateServer(serverId, opts, (error, data, response) => {
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

