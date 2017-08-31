# UpcloudApi.TimezoneApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTimezones**](TimezoneApi.md#listTimezones) | **GET** /timezone | List timezones


<a name="listTimezones"></a>
# **listTimezones**
> TimezoneListResponse listTimezones()

List timezones

Returns a list of available timezones. Timezones are used to set the hardware clock for servers.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.TimezoneApi();

apiInstance.listTimezones((error, data, response) => {
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

[**TimezoneListResponse**](TimezoneListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

