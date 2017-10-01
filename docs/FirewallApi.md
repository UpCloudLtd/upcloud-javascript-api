# upcloud.FirewallApi

All URIs are relative to *https://api.upcloud.com/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFirewallRule**](FirewallApi.md#createFirewallRule) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
[**deleteFirewallRule**](FirewallApi.md#deleteFirewallRule) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
[**getFirewallRule**](FirewallApi.md#getFirewallRule) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
[**serverServerIdFirewallRuleGet**](FirewallApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules


<a name="createFirewallRule"></a>
# **createFirewallRule**
> FirewallRuleCreateResponse createFirewallRule(serverId, firewallRule)

Create firewall rule

Creates a new firewall rule

### Example
```javascript
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.FirewallApi();

var serverId = "serverId_example"; // String | Server id

var firewallRule = new upcloud.FirewallRuleRequest(); // FirewallRuleRequest | 

apiInstance.createFirewallRule(serverId, firewallRule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **firewallRule** | [**FirewallRuleRequest**](FirewallRuleRequest.md)|  | 

### Return type

[**FirewallRuleCreateResponse**](FirewallRuleCreateResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

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
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.FirewallApi();

var serverId = "serverId_example"; // String | Server id

var firewallRuleNumber = 3.4; // Number | Denotes the index of the firewall rule in the server's firewall rule list

apiInstance.deleteFirewallRule(serverId, firewallRuleNumber).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **firewallRuleNumber** | **Number**| Denotes the index of the firewall rule in the server&#39;s firewall rule list | 

### Return type

null (empty response body)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFirewallRule"></a>
# **getFirewallRule**
> FirewallRuleCreateResponse getFirewallRule(serverId, firewallRuleNumber)

Get firewall rule details

Returns detailed information about a specific firewall rule

### Example
```javascript
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.FirewallApi();

var serverId = "serverId_example"; // String | Server id

var firewallRuleNumber = 3.4; // Number | Denotes the index of the firewall rule in the server's firewall rule list

apiInstance.getFirewallRule(serverId, firewallRuleNumber).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **firewallRuleNumber** | **Number**| Denotes the index of the firewall rule in the server&#39;s firewall rule list | 

### Return type

[**FirewallRuleCreateResponse**](FirewallRuleCreateResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

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
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.FirewallApi();

var serverId = "serverId_example"; // String | Server id

apiInstance.serverServerIdFirewallRuleGet(serverId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 

### Return type

[**FirewallRuleListResponse**](FirewallRuleListResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

