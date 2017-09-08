# upcloud.ServerApi

All URIs are relative to *http://api.upcloud.com/1.2*

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
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var tagList = "tagList_example"; // String | List of tags


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.assignTag(serverId, tagList, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachStorage"></a>
# **attachStorage**
> ServerListResponse attachStorage(serverId, storageDevice)

Attach storage

Attaches a storage as a device to a server.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var storageDevice = new upcloud.StorageDevice(); // StorageDevice | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachStorage(serverId, storageDevice, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFirewallRule"></a>
# **createFirewallRule**
> createFirewallRule(serverId, firewallRule)

Create firewall rule

Creates a new firewall rule

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var firewallRule = new upcloud.FirewallRule(); // FirewallRule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createFirewallRule(serverId, firewallRule, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createServer"></a>
# **createServer**
> ServerListResponse createServer(opts)

Create server

Creates a new server instance.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var opts = { 
  'server': new upcloud.Server() // Server | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createServer(opts, callback);
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
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var firewallRuleNumber = "firewallRuleNumber_example"; // String | Denotes the index of the firewall rule in the server's firewall rule list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFirewallRule(serverId, firewallRuleNumber, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteServer"></a>
# **deleteServer**
> deleteServer(serverId)

Delete server

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Id of server to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteServer(serverId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="detachStorage"></a>
# **detachStorage**
> ServerListResponse detachStorage(serverId, storageDevice)

Detach storage

Detaches a storage resource from a server.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var storageDevice = new upcloud.StorageDevice(); // StorageDevice | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.detachStorage(serverId, storageDevice, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ejectCdrom"></a>
# **ejectCdrom**
> ServerListResponse ejectCdrom(serverId)

Eject CD-ROM

Ejects the storage from the CD-ROM device of a server.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ejectCdrom(serverId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFirewallRule"></a>
# **getFirewallRule**
> FirewallRuleDetailsResponse getFirewallRule(serverId, firewallRuleNumber)

Get firewall rule details

Returns detailed information about a specific firewall rule

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var firewallRuleNumber = "firewallRuleNumber_example"; // String | Denotes the index of the firewall rule in the server's firewall rule list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFirewallRule(serverId, firewallRuleNumber, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listServerConfigurations"></a>
# **listServerConfigurations**
> ConfigurationListResponse listServerConfigurations()

List server configurations

Returns a list of available server configurations. A server configuration consists of a combination of CPU core count and main memory amount. All servers are created using these configurations.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listServerConfigurations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ConfigurationListResponse**](ConfigurationListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listServers"></a>
# **listServers**
> ServerListResponse listServers()

List of servers

Returns a list of all servers associated with the current account.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listServers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loadCdrom"></a>
# **loadCdrom**
> ServerListResponse loadCdrom(serverId, opts)

Load CD-ROM

Loads a storage as a CD-ROM in the CD-ROM device of a server.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var opts = { 
  'storageDevice': new upcloud.StorageDevice1() // StorageDevice1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loadCdrom(serverId, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyServer"></a>
# **modifyServer**
> ServerListResponse modifyServer(serverId, opts)

Modify server

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Id of server to modify

var opts = { 
  'server': new upcloud.Server() // Server | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyServer(serverId, opts, callback);
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
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Id of server to restart

var restartServer = new upcloud.RestartServer(); // RestartServer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.restartServer(serverId, restartServer, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serverDetails"></a>
# **serverDetails**
> ServerListResponse serverDetails(serverId)

Get server details

Returns detailed information about a specific server.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Id of server to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serverDetails(serverId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serverServerIdFirewallRuleGet"></a>
# **serverServerIdFirewallRuleGet**
> FirewallRuleListResponse serverServerIdFirewallRuleGet(serverId, )

List firewall rules

Returns a list of firewall rules for a specific server.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serverServerIdFirewallRuleGet(serverId, , callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startServer"></a>
# **startServer**
> ServerListResponse startServer(serverId)

Start server

Starts a stopped server. The server state must be &#x60;stopped&#x60;.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Id of server to start


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startServer(serverId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stopServer"></a>
# **stopServer**
> ServerListResponse stopServer(serverId, stopServer)

Stop server

Stops a started server. The server state must be &#x60;started&#x60;.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Id of server to stop

var stopServer = new upcloud.StopServer(); // StopServer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stopServer(serverId, stopServer, callback);
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
var upcloud = require('upcloud');

var apiInstance = new upcloud.ServerApi();

var serverId = "serverId_example"; // String | Server id

var tagName = "tagName_example"; // String | Tag name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.untag(serverId, tagName, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

