# upcloud.ZoneApi

All URIs are relative to *http://api.upcloud.com/1.2*

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
var upcloud = require('upcloud');

var apiInstance = new upcloud.ZoneApi();

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

 - **Content-Type**: application/json
 - **Accept**: application/json

