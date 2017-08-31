# UpcloudApi.PlanApi

All URIs are relative to *http://localhost/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPlans**](PlanApi.md#listPlans) | **GET** /plan | List available plans


<a name="listPlans"></a>
# **listPlans**
> AvailablePlanListResponse listPlans()

List available plans

Returns a list of available plans.

### Example
```javascript
import UpcloudApi from 'upcloud_api';

let apiInstance = new UpcloudApi.PlanApi();

apiInstance.listPlans((error, data, response) => {
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

[**AvailablePlanListResponse**](AvailablePlanListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

