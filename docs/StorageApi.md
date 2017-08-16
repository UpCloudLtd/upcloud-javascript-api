# UpcloudApi.StorageApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listStorages**](StorageApi.md#listStorages) | **GET** /storage | List of storages


<a name="listStorages"></a>
# **listStorages**
> InlineResponse2002 listStorages()

List of storages

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.StorageApi();

apiInstance.listStorages((error, data, response) => {
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

