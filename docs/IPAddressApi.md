# UpcloudApi.IPAddressApi

All URIs are relative to *http://localhost/1.2*

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
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

let opts = { 
  'ipAddress': new UpcloudApi.IpAddress() // IpAddress | 
};

apiInstance.addIp(opts, (error, data, response) => {
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
 **ipAddress** | [**IpAddress**](IpAddress.md)|  | [optional] 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIp"></a>
# **deleteIp**
> deleteIp(ip)

Release IP address

Removes an IP address from a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

let ip = "ip_example"; // String | Ip address


apiInstance.deleteIp(ip, (error, data, response) => {
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
 **ip** | **String**| Ip address | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDetails"></a>
# **getDetails**
> AssignIpResponse getDetails(ip)

Get IP address details

Returns detailed information about a specific IP address.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

let ip = "ip_example"; // String | Ip address


apiInstance.getDetails(ip, (error, data, response) => {
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
 **ip** | **String**| Ip address | 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listIps"></a>
# **listIps**
> IpAddressListResponse listIps()

List IP addresses

Returns a list of all IP addresses assigned to servers on the current user account.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

apiInstance.listIps((error, data, response) => {
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

[**IpAddressListResponse**](IpAddressListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="modifyIp"></a>
# **modifyIp**
> AssignIpResponse modifyIp(ip, opts)

Modify IP address

Modifies the reverse DNS PTR record corresponding to an IP address. The PTR record can only be set to public IP address.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

let ip = "ip_example"; // String | Ip address

let opts = { 
  'ipAddress': new UpcloudApi.IpAddress1() // IpAddress1 | 
};

apiInstance.modifyIp(ip, opts, (error, data, response) => {
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
 **ip** | **String**| Ip address | 
 **ipAddress** | [**IpAddress1**](IpAddress1.md)|  | [optional] 

### Return type

[**AssignIpResponse**](AssignIpResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

