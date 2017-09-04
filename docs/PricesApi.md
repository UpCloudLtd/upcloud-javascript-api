# UpcloudApi.PricesApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPrices**](PricesApi.md#listPrices) | **GET** /price | List prices


<a name="listPrices"></a>
# **listPrices**
> PriceListResponse listPrices()

List prices

Returns a list resource prices.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.PricesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPrices(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PriceListResponse**](PriceListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

