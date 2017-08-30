# UpcloudApi.FirewallApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serverServerIdFirewallRuleFirewallRuleNumberDelete**](FirewallApi.md#serverServerIdFirewallRuleFirewallRuleNumberDelete) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
[**serverServerIdFirewallRuleFirewallRuleNumberGet**](FirewallApi.md#serverServerIdFirewallRuleFirewallRuleNumberGet) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
[**serverServerIdFirewallRuleGet**](FirewallApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
[**serverServerIdFirewallRulePost**](FirewallApi.md#serverServerIdFirewallRulePost) | **POST** /server/{serverId}/firewall_rule | Create firewall rule


<a name="serverServerIdFirewallRuleFirewallRuleNumberDelete"></a>
# **serverServerIdFirewallRuleFirewallRuleNumberDelete**
> serverServerIdFirewallRuleFirewallRuleNumberDelete(serverId, firewallRuleNumber)

Remove firewall rule

Removes a firewall rule from a server. Firewall rules must be removed individually. The positions of remaining firewall rules will be adjusted after a rule is removed.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.FirewallApi();

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

let apiInstance = new UpcloudApi.FirewallApi();

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

let apiInstance = new UpcloudApi.FirewallApi();

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

let apiInstance = new UpcloudApi.FirewallApi();

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

