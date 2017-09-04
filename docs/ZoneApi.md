# UpcloudApi.ZoneApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listZones**](ZoneApi.md#listZones) | **GET** /zone | List available zones


<a name="listZones"></a>
# **listZones**
> ZoneListResponse listZones()

List available zones

Returns a list of available zones.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.ZoneApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listZones(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ZoneListResponse**](ZoneListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

