# UpcloudApi.ServerApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignTag**](ServerApi.md#assignTag) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
[**attachStorage**](ServerApi.md#attachStorage) | **POST** /server/{serverId}/storage/attach | Attach storage
[**createFirewallRule**](ServerApi.md#createFirewallRule) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
[**createServer**](ServerApi.md#createServer) | **POST** /server | Create server
[**deleteFirewallRule**](ServerApi.md#deleteFirewallRule) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
[**deleteServer**](ServerApi.md#deleteServer) | **DELETE** /server/{serverId} | Delete server
[**detachStorage**](ServerApi.md#detachStorage) | **POST** /server/{serverId}/storage/detach | Detach storage
[**ejectCdrom**](ServerApi.md#ejectCdrom) | **POST** /server/{serverId}/storage/cdrom/eject | Eject CD-ROM
[**getFirewallRule**](ServerApi.md#getFirewallRule) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
[**listServerConfigurations**](ServerApi.md#listServerConfigurations) | **GET** /server_size | List server configurations
[**listServers**](ServerApi.md#listServers) | **GET** /server | List of servers
[**loadCdrom**](ServerApi.md#loadCdrom) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
[**modifyServer**](ServerApi.md#modifyServer) | **PUT** /server/{serverId} | Modify server
[**restartServer**](ServerApi.md#restartServer) | **POST** /server/{serverId}/restart | Restart server
[**serverDetails**](ServerApi.md#serverDetails) | **GET** /server/{serverId} | Get server details
[**serverServerIdFirewallRuleGet**](ServerApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
[**startServer**](ServerApi.md#startServer) | **POST** /server/{serverId}/start | Start server
[**stopServer**](ServerApi.md#stopServer) | **POST** /server/{serverId}/stop | Stop server
[**untag**](ServerApi.md#untag) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server


<a name="assignTag"></a>
# **assignTag**
> ServerListResponse assignTag(serverId, tagList)

Assign tag to a server

Servers can be tagged with one or more tags. The tags used must exist

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

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

<a name="attachStorage"></a>
# **attachStorage**
> ServerListResponse attachStorage(serverId, storageDevice)

Attach storage

Attaches a storage as a device to a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let storageDevice = new UpcloudApi.StorageDevice(); // StorageDevice | 


apiInstance.attachStorage(serverId, storageDevice, (error, data, response) => {
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

<a name="createFirewallRule"></a>
# **createFirewallRule**
> createFirewallRule(serverId, firewallRule)

Create firewall rule

Creates a new firewall rule

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let firewallRule = new UpcloudApi.FirewallRule(); // FirewallRule | 


apiInstance.createFirewallRule(serverId, firewallRule, (error, data, response) => {
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

<a name="deleteFirewallRule"></a>
# **deleteFirewallRule**
> deleteFirewallRule(serverId, firewallRuleNumber)

Remove firewall rule

Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let firewallRuleNumber = "firewallRuleNumber_example"; // String | Denotes the index of the firewall rule in the server's firewall rule list


apiInstance.deleteFirewallRule(serverId, firewallRuleNumber, (error, data, response) => {
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

<a name="detachStorage"></a>
# **detachStorage**
> ServerListResponse detachStorage(serverId, storageDevice)

Detach storage

Detaches a storage resource from a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let storageDevice = new UpcloudApi.StorageDevice(); // StorageDevice | 


apiInstance.detachStorage(serverId, storageDevice, (error, data, response) => {
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

<a name="ejectCdrom"></a>
# **ejectCdrom**
> ServerListResponse ejectCdrom(serverId)

Eject CD-ROM

Ejects the storage from the CD-ROM device of a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id


apiInstance.ejectCdrom(serverId, (error, data, response) => {
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

<a name="getFirewallRule"></a>
# **getFirewallRule**
> FirewallRuleDetailsResponse getFirewallRule(serverId, firewallRuleNumber)

Get firewall rule details

Returns detailed information about a specific firewall rule

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Server id

let firewallRuleNumber = "firewallRuleNumber_example"; // String | Denotes the index of the firewall rule in the server's firewall rule list


apiInstance.getFirewallRule(serverId, firewallRuleNumber, (error, data, response) => {
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

[**FirewallRuleDetailsResponse**](FirewallRuleDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listServerConfigurations"></a>
# **listServerConfigurations**
> ConfigurationListResponse listServerConfigurations()

List server configurations

Returns a list of available server configurations. A server configuration consists of a combination of CPU core count and main memory amount. All servers are created using these configurations.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

apiInstance.listServerConfigurations((error, data, response) => {
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

[**ConfigurationListResponse**](ConfigurationListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listServers"></a>
# **listServers**
> ServerListResponse listServers()

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

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loadCdrom"></a>
# **loadCdrom**
> ServerListResponse loadCdrom(serverId, opts)

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

apiInstance.loadCdrom(serverId, opts, (error, data, response) => {
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

<a name="modifyServer"></a>
# **modifyServer**
> ServerListResponse modifyServer(serverId, opts)

Modify server

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to modify

let opts = { 
  'server': new UpcloudApi.Server() // Server | 
};

apiInstance.modifyServer(serverId, opts, (error, data, response) => {
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

<a name="restartServer"></a>
# **restartServer**
> ServerListResponse restartServer(serverId, restartServer)

Restart server

Stops and starts a server. The server state must be &#x60;started&#x60;.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to restart

let restartServer = new UpcloudApi.RestartServer(); // RestartServer | 


apiInstance.restartServer(serverId, restartServer, (error, data, response) => {
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

<a name="serverServerIdFirewallRuleGet"></a>
# **serverServerIdFirewallRuleGet**
> FirewallRuleListResponse serverServerIdFirewallRuleGet(serverId, )

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

[**FirewallRuleListResponse**](FirewallRuleListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startServer"></a>
# **startServer**
> ServerListResponse startServer(serverId)

Start server

Starts a stopped server. The server state must be &#x60;stopped&#x60;.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to start


apiInstance.startServer(serverId, (error, data, response) => {
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

<a name="stopServer"></a>
# **stopServer**
> ServerListResponse stopServer(serverId, stopServer)

Stop server

Stops a started server. The server state must be &#x60;started&#x60;.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

let serverId = "serverId_example"; // String | Id of server to stop

let stopServer = new UpcloudApi.StopServer(); // StopServer | 


apiInstance.stopServer(serverId, stopServer, (error, data, response) => {
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

<a name="untag"></a>
# **untag**
> ServerListResponse untag(serverId, tagName)

Remove tag from server

Untags tags from given server. The tag(s) must exist

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.ServerApi();

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

