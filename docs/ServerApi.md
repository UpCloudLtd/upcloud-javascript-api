# UpcloudApi.ServerApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServer**](ServerApi.md#createServer) | **POST** /server | Create server
[**deleteServer**](ServerApi.md#deleteServer) | **DELETE** /server/{serverId} | Delete server
[**listServers**](ServerApi.md#listServers) | **GET** /server | List of servers
[**serverDetails**](ServerApi.md#serverDetails) | **GET** /server/{serverId} | Get server details
[**serverServerIdFirewallRuleFirewallRuleNumberDelete**](ServerApi.md#serverServerIdFirewallRuleFirewallRuleNumberDelete) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
[**serverServerIdFirewallRuleFirewallRuleNumberGet**](ServerApi.md#serverServerIdFirewallRuleFirewallRuleNumberGet) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
[**serverServerIdFirewallRuleGet**](ServerApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
[**serverServerIdFirewallRulePost**](ServerApi.md#serverServerIdFirewallRulePost) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
[**serverServerIdRestartPost**](ServerApi.md#serverServerIdRestartPost) | **POST** /server/{serverId}/restart | Restart server
[**serverServerIdStartPost**](ServerApi.md#serverServerIdStartPost) | **POST** /server/{serverId}/start | Start server
[**serverServerIdStopPost**](ServerApi.md#serverServerIdStopPost) | **POST** /server/{serverId}/stop | Stop server
[**serverServerIdStorageAttachPost**](ServerApi.md#serverServerIdStorageAttachPost) | **POST** /server/{serverId}/storage/attach | Attach storage
[**serverServerIdStorageCdromEjectPost**](ServerApi.md#serverServerIdStorageCdromEjectPost) | **POST** /server/{serverId}/storage/cdrom/eject | Eject CD-ROM
[**serverServerIdStorageCdromLoadPost**](ServerApi.md#serverServerIdStorageCdromLoadPost) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
[**serverServerIdStorageDetachPost**](ServerApi.md#serverServerIdStorageDetachPost) | **POST** /server/{serverId}/storage/detach | Detach storage
[**serverServerIdTagTagListPost**](ServerApi.md#serverServerIdTagTagListPost) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
[**serverServerIdUntagTagNamePost**](ServerApi.md#serverServerIdUntagTagNamePost) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
[**serverSizeGet**](ServerApi.md#serverSizeGet) | **GET** /server_size | List server configurations
[**updateServer**](ServerApi.md#updateServer) | **PUT** /server/{serverId} | Modify server


<a name="createServer"></a>
# **createServer**
> ServerListResponse createServer(opts)

Create server

Creates a new server instance.

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

[**ServerListResponse**](ServerListResponse.md)

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
> InlineResponse2005 listServers()

List of servers

Returns a list of all servers associated with the current account.

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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="serverDetails"></a>
# **serverDetails**
> ServerListResponse serverDetails(serverId)

Get server details

Returns detailed information about a specific server.

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

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdFirewallRuleFirewallRuleNumberDelete"></a>
# **serverServerIdFirewallRuleFirewallRuleNumberDelete**
> serverServerIdFirewallRuleFirewallRuleNumberDelete(serverId, firewallRuleNumber)

Remove firewall rule

Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let firewallRuleNumber = "firewallRuleNumber_example"; // String | Denotes the index of the firewall rule in the server's firewall rule list


apiInstance.serverServerIdFirewallRuleFirewallRuleNumberDelete(serverId, firewallRuleNumber, (error, data, response) => {
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
 **serverId** | **String**| Server id | 
 **firewallRuleNumber** | **String**| Denotes the index of the firewall rule in the server&#39;s firewall rule list | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdFirewallRuleFirewallRuleNumberGet"></a>
# **serverServerIdFirewallRuleFirewallRuleNumberGet**
> InlineResponse2008 serverServerIdFirewallRuleFirewallRuleNumberGet(serverId, firewallRuleNumber)

Get firewall rule details

Returns detailed information about a specific firewall rule

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let firewallRuleNumber = "firewallRuleNumber_example"; // String | Denotes the index of the firewall rule in the server's firewall rule list


apiInstance.serverServerIdFirewallRuleFirewallRuleNumberGet(serverId, firewallRuleNumber, (error, data, response) => {
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
 **firewallRuleNumber** | **String**| Denotes the index of the firewall rule in the server&#39;s firewall rule list | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdFirewallRuleGet"></a>
# **serverServerIdFirewallRuleGet**
> InlineResponse2007 serverServerIdFirewallRuleGet(serverId, )

List firewall rules

Returns a list of firewall rules for a specific server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id


apiInstance.serverServerIdFirewallRuleGet(serverId, , (error, data, response) => {
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

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdFirewallRulePost"></a>
# **serverServerIdFirewallRulePost**
> serverServerIdFirewallRulePost(serverId, firewallRule)

Create firewall rule

Creates a new firewall rule

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let firewallRule = new UpcloudApi.FirewallRule(); // FirewallRule | 


apiInstance.serverServerIdFirewallRulePost(serverId, firewallRule, (error, data, response) => {
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
 **serverId** | **String**| Server id | 
 **firewallRule** | [**FirewallRule**](FirewallRule.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdRestartPost"></a>
# **serverServerIdRestartPost**
> ServerListResponse serverServerIdRestartPost(serverId, restartServer)

Restart server

Stops and starts a server. The server state must be &#x60;started&#x60;.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to restart

let restartServer = new UpcloudApi.RestartServer(); // RestartServer | 


apiInstance.serverServerIdRestartPost(serverId, restartServer, (error, data, response) => {
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
 **serverId** | **String**| Id of server to restart | 
 **restartServer** | [**RestartServer**](RestartServer.md)|  | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="serverServerIdStartPost"></a>
# **serverServerIdStartPost**
> ServerListResponse serverServerIdStartPost(serverId)

Start server

Starts a stopped server. The server state must be &#x60;stopped&#x60;.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to start


apiInstance.serverServerIdStartPost(serverId, (error, data, response) => {
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
 **serverId** | **String**| Id of server to start | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="serverServerIdStopPost"></a>
# **serverServerIdStopPost**
> ServerListResponse serverServerIdStopPost(serverId, stopServer)

Stop server

Stops a started server. The server state must be &#x60;started&#x60;.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to stop

let stopServer = new UpcloudApi.StopServer(); // StopServer | 


apiInstance.serverServerIdStopPost(serverId, stopServer, (error, data, response) => {
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
 **serverId** | **String**| Id of server to stop | 
 **stopServer** | [**StopServer**](StopServer.md)|  | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serverServerIdStorageAttachPost"></a>
# **serverServerIdStorageAttachPost**
> ServerListResponse serverServerIdStorageAttachPost(serverId, storageDevice)

Attach storage

Attaches a storage as a device to a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let storageDevice = new UpcloudApi.StorageDevice(); // StorageDevice | 


apiInstance.serverServerIdStorageAttachPost(serverId, storageDevice, (error, data, response) => {
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
 **storageDevice** | [**StorageDevice**](StorageDevice.md)|  | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdStorageCdromEjectPost"></a>
# **serverServerIdStorageCdromEjectPost**
> ServerListResponse serverServerIdStorageCdromEjectPost(serverId)

Eject CD-ROM

Ejects the storage from the CD-ROM device of a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id


apiInstance.serverServerIdStorageCdromEjectPost(serverId, (error, data, response) => {
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

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdStorageCdromLoadPost"></a>
# **serverServerIdStorageCdromLoadPost**
> ServerListResponse serverServerIdStorageCdromLoadPost(serverId, opts)

Load CD-ROM

Loads a storage as a CD-ROM in the CD-ROM device of a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let opts = { 
  'storageDevice': new UpcloudApi.StorageDevice1() // StorageDevice1 | 
};

apiInstance.serverServerIdStorageCdromLoadPost(serverId, opts, (error, data, response) => {
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
 **storageDevice** | [**StorageDevice1**](StorageDevice1.md)|  | [optional] 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdStorageDetachPost"></a>
# **serverServerIdStorageDetachPost**
> ServerListResponse serverServerIdStorageDetachPost(serverId, storageDevice)

Detach storage

Detaches a storage resource from a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let storageDevice = new UpcloudApi.StorageDevice(); // StorageDevice | 


apiInstance.serverServerIdStorageDetachPost(serverId, storageDevice, (error, data, response) => {
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
 **storageDevice** | [**StorageDevice**](StorageDevice.md)|  | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serverServerIdTagTagListPost"></a>
# **serverServerIdTagTagListPost**
> ServerListResponse serverServerIdTagTagListPost(serverId, tagList)

Assign tag to a server

Servers can be tagged with one or more tags. The tags used must exist

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

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

let apiInstance = new UpcloudApi.ServerApi();

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

<a name="serverSizeGet"></a>
# **serverSizeGet**
> InlineResponse2004 serverSizeGet()

List server configurations

Returns a list of available server configurations. A server configuration consists of a combination of CPU core count and main memory amount. All servers are created using these configurations.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

apiInstance.serverSizeGet((error, data, response) => {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateServer"></a>
# **updateServer**
> ServerListResponse updateServer(serverId, opts)

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

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

