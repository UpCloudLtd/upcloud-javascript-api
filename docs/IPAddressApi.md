# UpcloudApi.IPAddressApi

All URIs are relative to *http://api.upcloud.com/1.2*

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
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.IPAddressApi();

var opts = { 
  'ipAddress': new UpcloudApi.IpAddress() // IpAddress | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addIp(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipAddress** | [**IpAddress**](IpAddress.md)|  | [optional] 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

No authorization required

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
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.IPAddressApi();

var ip = "ip_example"; // String | Ip address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteIp(ip, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Ip address | 

### Return type

null (empty response body)

### Authorization

No authorization required

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
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.IPAddressApi();

var ip = "ip_example"; // String | Ip address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDetails(ip, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Ip address | 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

No authorization required

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
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.IPAddressApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listIps(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**IpAddressListResponse**](IpAddressListResponse.md)

### Authorization

No authorization required

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
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.IPAddressApi();

var ip = "ip_example"; // String | Ip address

var opts = { 
  'ipAddress': new UpcloudApi.IpAddress1() // IpAddress1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyIp(ip, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| Ip address | 
 **ipAddress** | [**IpAddress1**](IpAddress1.md)|  | [optional] 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

