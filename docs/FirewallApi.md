# upcloud.FirewallApi

All URIs are relative to *http://api.upcloud.com/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFirewallRule**](FirewallApi.md#createFirewallRule) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
[**deleteFirewallRule**](FirewallApi.md#deleteFirewallRule) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
[**getFirewallRule**](FirewallApi.md#getFirewallRule) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
[**serverServerIdFirewallRuleGet**](FirewallApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules


<a name="createFirewallRule"></a>
# **createFirewallRule**
> createFirewallRule(serverId, firewallRule)

Create firewall rule

Creates a new firewall rule

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.FirewallApi();

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

<a name="deleteFirewallRule"></a>
# **deleteFirewallRule**
> deleteFirewallRule(serverId, firewallRuleNumber)

Remove firewall rule

Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.FirewallApi();

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

<a name="getFirewallRule"></a>
# **getFirewallRule**
> FirewallRuleDetailsResponse getFirewallRule(serverId, firewallRuleNumber)

Get firewall rule details

Returns detailed information about a specific firewall rule

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.FirewallApi();

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

<a name="serverServerIdFirewallRuleGet"></a>
# **serverServerIdFirewallRuleGet**
> FirewallRuleListResponse serverServerIdFirewallRuleGet(serverId, )

List firewall rules

Returns a list of firewall rules for a specific server.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.FirewallApi();

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

