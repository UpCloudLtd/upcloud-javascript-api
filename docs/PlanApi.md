# upcloud.PlanApi

All URIs are relative to *https://api.upcloud.com/1.2*

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
var upcloud = require('upcloud');
var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME';
baseAuth.password = 'YOUR PASSWORD';

var apiInstance = new upcloud.PlanApi();
apiInstance.listPlans().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AvailablePlanListResponse**](AvailablePlanListResponse.md)

### Authorization

[baseAuth](../README.md#baseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

