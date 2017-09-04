# UpcloudApi.StorageApi

All URIs are relative to *http://api.upcloud.com/1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachStorage**](StorageApi.md#attachStorage) | **POST** /server/{serverId}/storage/attach | Attach storage
[**backupStorage**](StorageApi.md#backupStorage) | **POST** /storage/{storageId}/backup | Create backup
[**cancelOperation**](StorageApi.md#cancelOperation) | **POST** /storage/{storageId}/cancel | Cancel storage operation
[**cloneStorage**](StorageApi.md#cloneStorage) | **POST** /storage/{storageId}/clone | Clone storage
[**createStorage**](StorageApi.md#createStorage) | **POST** /storage | Create storage
[**deleteStorage**](StorageApi.md#deleteStorage) | **DELETE** /storage/{storageId} | Delete storage
[**detachStorage**](StorageApi.md#detachStorage) | **POST** /server/{serverId}/storage/detach | Detach storage
[**ejectCdrom**](StorageApi.md#ejectCdrom) | **POST** /server/{serverId}/storage/cdrom/eject | Eject CD-ROM
[**favoriteStorage**](StorageApi.md#favoriteStorage) | **POST** /storage/{storageId}/favorite | Add storage to favorites
[**getStorageDetails**](StorageApi.md#getStorageDetails) | **GET** /storage/{storageId} | Get storage details
[**listStorageTypes**](StorageApi.md#listStorageTypes) | **GET** /storage/{type} | List of storages by type
[**listStorages**](StorageApi.md#listStorages) | **GET** /storage | List of storages
[**loadCdrom**](StorageApi.md#loadCdrom) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
[**modifyStorage**](StorageApi.md#modifyStorage) | **PUT** /storage/{storageId} | Modify storage
[**restoreStorage**](StorageApi.md#restoreStorage) | **POST** /storage/{storageId}/restore | Restore backup
[**templatizeStorage**](StorageApi.md#templatizeStorage) | **POST** /storage/{storageId}/templatize | Templatize storage
[**unfavoriteStorage**](StorageApi.md#unfavoriteStorage) | **DELETE** /storage/{storageId}/favorite | Remove storage from favorites


<a name="attachStorage"></a>
# **attachStorage**
> ServerListResponse attachStorage(serverId, storageDevice)

Attach storage

Attaches a storage as a device to a server.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var serverId = "serverId_example"; // String | Server id

var storageDevice = new UpcloudApi.StorageDevice(); // StorageDevice | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachStorage(serverId, storageDevice, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **storageDevice** | [**StorageDevice**](StorageDevice.md)|  | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="backupStorage"></a>
# **backupStorage**
> CreateStorageResponse backupStorage(storageId, opts)

Create backup

Creates a point-in-time backup of a storage resource. For automatic, scheduled backups, see  &#x60;backup_rule&#x60; in Create storage or Modify storage.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | Storage id

var opts = { 
  'storage': new UpcloudApi.Storage4() // Storage4 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.backupStorage(storageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Storage id | 
 **storage** | [**Storage4**](Storage4.md)|  | [optional] 

### Return type

[**CreateStorageResponse**](CreateStorageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelOperation"></a>
# **cancelOperation**
> cancelOperation(storageId)

Cancel storage operation

Cancels a running cloning operation and deletes the incomplete copy.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | Strage id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cancelOperation(storageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Strage id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cloneStorage"></a>
# **cloneStorage**
> CreateStorageResponse cloneStorage(storageId, opts)

Clone storage

Creates an exact copy of an existing storage resource.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | Storage id

var opts = { 
  'storage': new UpcloudApi.Storage2() // Storage2 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cloneStorage(storageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Storage id | 
 **storage** | [**Storage2**](Storage2.md)|  | [optional] 

### Return type

[**CreateStorageResponse**](CreateStorageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createStorage"></a>
# **createStorage**
> CreateStorageResponse createStorage(storage)

Create storage

Creates a new storage resource.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storage = new UpcloudApi.Storage(); // Storage | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStorage(storage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage** | [**Storage**](Storage.md)|  | 

### Return type

[**CreateStorageResponse**](CreateStorageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteStorage"></a>
# **deleteStorage**
> deleteStorage(storageId)

Delete storage

Deleted an existing storage resource.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteStorage(storageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="detachStorage"></a>
# **detachStorage**
> ServerListResponse detachStorage(serverId, storageDevice)

Detach storage

Detaches a storage resource from a server.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var serverId = "serverId_example"; // String | Server id

var storageDevice = new UpcloudApi.StorageDevice(); // StorageDevice | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.detachStorage(serverId, storageDevice, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **storageDevice** | [**StorageDevice**](StorageDevice.md)|  | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ejectCdrom"></a>
# **ejectCdrom**
> ServerListResponse ejectCdrom(serverId)

Eject CD-ROM

Ejects the storage from the CD-ROM device of a server.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var serverId = "serverId_example"; // String | Server id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ejectCdrom(serverId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="favoriteStorage"></a>
# **favoriteStorage**
> favoriteStorage(storageId)

Add storage to favorites

Adds a storage to the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | Storage id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.favoriteStorage(storageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Storage id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStorageDetails"></a>
# **getStorageDetails**
> CreateStorageResponse getStorageDetails(storageId)

Get storage details

Returns detailed information about a specific storage resource.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStorageDetails(storageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**|  | 

### Return type

[**CreateStorageResponse**](CreateStorageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listStorageTypes"></a>
# **listStorageTypes**
> SuccessStoragesResponse listStorageTypes(type)

List of storages by type

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var type = "type_example"; // String | Storage's access type (`public` or `private`) or storage type (`normal`, `backup`, `cdrom` or `template`) or `favorite` status


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStorageTypes(type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Storage&#39;s access type (&#x60;public&#x60; or &#x60;private&#x60;) or storage type (&#x60;normal&#x60;, &#x60;backup&#x60;, &#x60;cdrom&#x60; or &#x60;template&#x60;) or &#x60;favorite&#x60; status | 

### Return type

[**SuccessStoragesResponse**](SuccessStoragesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listStorages"></a>
# **listStorages**
> SuccessStoragesResponse listStorages()

List of storages

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStorages(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessStoragesResponse**](SuccessStoragesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loadCdrom"></a>
# **loadCdrom**
> ServerListResponse loadCdrom(serverId, opts)

Load CD-ROM

Loads a storage as a CD-ROM in the CD-ROM device of a server.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var serverId = "serverId_example"; // String | Server id

var opts = { 
  'storageDevice': new UpcloudApi.StorageDevice1() // StorageDevice1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loadCdrom(serverId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| Server id | 
 **storageDevice** | [**StorageDevice1**](StorageDevice1.md)|  | [optional] 

### Return type

[**ServerListResponse**](ServerListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyStorage"></a>
# **modifyStorage**
> CreateStorageResponse modifyStorage(storageIdstorage)

Modify storage

Modifies an existing storage resource. This operation is used to rename or resize the storage.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | 

var storage = new UpcloudApi.Storage1(); // Storage1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyStorage(storageIdstorage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**|  | 
 **storage** | [**Storage1**](Storage1.md)|  | 

### Return type

[**CreateStorageResponse**](CreateStorageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="restoreStorage"></a>
# **restoreStorage**
> restoreStorage(storageId)

Restore backup

Restores the origin storage with data from the specified backup storage.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | Storage id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.restoreStorage(storageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Storage id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templatizeStorage"></a>
# **templatizeStorage**
> CreateStorageResponse templatizeStorage(storageId, opts)

Templatize storage

Creates an exact copy of an existing storage resource which can be used as a template for creating new servers.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | Storage id

var opts = { 
  'storage': new UpcloudApi.Storage3() // Storage3 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatizeStorage(storageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Storage id | 
 **storage** | [**Storage3**](Storage3.md)|  | [optional] 

### Return type

[**CreateStorageResponse**](CreateStorageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unfavoriteStorage"></a>
# **unfavoriteStorage**
> unfavoriteStorage(storageId)

Remove storage from favorites

Delete a storage from the list of favorite storages. To list favorite storages, see List storages. This operations succeeds even if the storage is already on the list of favorites.

### Example
```javascript
var UpcloudApi = require('upcloud_api');

var apiInstance = new UpcloudApi.StorageApi();

var storageId = "storageId_example"; // String | Storage id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unfavoriteStorage(storageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Storage id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

