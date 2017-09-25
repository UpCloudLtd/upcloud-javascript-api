# upcloud.AccountApi

All URIs are relative to *http://api.upcloud.com/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AccountApi.md#getAccount) | **GET** /account | Account information


<a name="getAccount"></a>
# **getAccount**
> Account getAccount()

Account information

Returns information on the user&#39;s account.

### Example
```javascript
var upcloud = require('upcloud');

var apiInstance = new upcloud.AccountApi();
apiInstance.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

