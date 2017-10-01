# upcloud.IPAddressApi

All URIs are relative to *https://api.upcloud.com/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addIp**](IPAddressApi.md#addIp) | **POST** /ip_address | Assign IP address
[**deleteIp**](IPAddressApi.md#deleteIp) | **DELETE** /ip_address/{ip} | Release IP address
[**getDetails**](IPAddressApi.md#getDetails) | **GET** /ip_address/{ip} | Get IP address details
[**listIps**](IPAddressApi.md#listIps) | **GET** /ip_address | List IP addresses
[**modifyIp**](IPAddressApi.md#modifyIp) | **PUT** /ip_address/{ip} | Modify IP address


<a name="addIp"></a>
# **addIp**
> AssignIpResponse addIp(opts)

Assign IP address

Assigns a new IP address to a server.

### Example
```javascript
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.IPAddressApi();

var opts = { 
  'ipAddress': new upcloud.AddIpRequest() // AddIpRequest | 
};
apiInstance.addIp(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipAddress** | [**AddIpRequest**](AddIpRequest.md)|  | [optional] 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIp"></a>
# **deleteIp**
> deleteIp(ip)

Release IP address

Removes an IP address from a server.

### Example
```javascript
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.IPAddressApi();

var ip = "ip_example"; // String | Ip address

apiInstance.deleteIp(ip).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Ip address | 

### Return type

null (empty response body)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDetails"></a>
# **getDetails**
> AssignIpResponse getDetails(ip)

Get IP address details

Returns detailed information about a specific IP address.

### Example
```javascript
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.IPAddressApi();

var ip = "ip_example"; // String | Ip address

apiInstance.getDetails(ip).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Ip address | 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listIps"></a>
# **listIps**
> IpAddressListResponse listIps()

List IP addresses

Returns a list of all IP addresses assigned to servers on the current user account.

### Example
```javascript
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.IPAddressApi();
apiInstance.listIps().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**IpAddressListResponse**](IpAddressListResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyIp"></a>
# **modifyIp**
> AssignIpResponse modifyIp(ip, opts)

Modify IP address

Modifies the reverse DNS PTR record corresponding to an IP address. The PTR record can only be set to public IP address.

### Example
```javascript
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.IPAddressApi();

var ip = "ip_example"; // String | Ip address

var opts = { 
  'ipAddress': new upcloud.ModifyIpRequest() // ModifyIpRequest | 
};
apiInstance.modifyIp(ip, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Ip address | 
 **ipAddress** | [**ModifyIpRequest**](ModifyIpRequest.md)|  | [optional] 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

