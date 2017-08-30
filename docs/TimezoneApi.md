# UpcloudApi.TimezoneApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timezoneGet**](TimezoneApi.md#timezoneGet) | **GET** /timezone | List timezones


<a name="timezoneGet"></a>
# **timezoneGet**
> InlineResponse2002 timezoneGet()

List timezones

Returns a list of available timezones. Timezones are used to set the hardware clock for servers.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TimezoneApi();

apiInstance.timezoneGet((error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

