# UpcloudApi.IPAddressApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ipAddressGet**](IPAddressApi.md#ipAddressGet) | **GET** /ip_address | List IP addresses
[**ipAddressIpDelete**](IPAddressApi.md#ipAddressIpDelete) | **DELETE** /ip_address/{ip} | Release IP address
[**ipAddressIpGet**](IPAddressApi.md#ipAddressIpGet) | **GET** /ip_address/{ip} | Get IP address details
[**ipAddressIpPut**](IPAddressApi.md#ipAddressIpPut) | **PUT** /ip_address/{ip} | Modify IP address
[**ipAddressPost**](IPAddressApi.md#ipAddressPost) | **POST** /ip_address | Assign IP address


<a name="ipAddressGet"></a>
# **ipAddressGet**
> InlineResponse2006 ipAddressGet()

List IP addresses

Returns a list of all IP addresses assigned to servers on the current user account.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

apiInstance.ipAddressGet((error, data, response) => {
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ipAddressIpDelete"></a>
# **ipAddressIpDelete**
> ipAddressIpDelete(ip)

Release IP address

Removes an IP address from a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

let ip = "ip_example"; // String | Ip address


apiInstance.ipAddressIpDelete(ip, (error, data, response) => {
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

<a name="ipAddressIpGet"></a>
# **ipAddressIpGet**
> InlineResponse2011 ipAddressIpGet(ip)

Get IP address details

Returns detailed information about a specific IP address.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

let ip = "ip_example"; // String | Ip address


apiInstance.ipAddressIpGet(ip, (error, data, response) => {
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

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ipAddressIpPut"></a>
# **ipAddressIpPut**
> InlineResponse2011 ipAddressIpPut(ip, opts)

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

apiInstance.ipAddressIpPut(ip, opts, (error, data, response) => {
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

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ipAddressPost"></a>
# **ipAddressPost**
> InlineResponse2011 ipAddressPost(opts)

Assign IP address

Assigns a new IP address to a server.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.IPAddressApi();

let opts = { 
  'ipAddress': new UpcloudApi.IpAddress() // IpAddress | 
};

apiInstance.ipAddressPost(opts, (error, data, response) => {
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

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

