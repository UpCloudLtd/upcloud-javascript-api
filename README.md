# upcloud

upcloud - JavaScript client for upcloud
The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.

## Table of content
* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
* [Issues](#issues)
* [Contributing](#contributing-optional)
* [License](#license)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install upcloud --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your upcloud from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('upcloud')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Usage

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var upcloud = require('upcloud');

var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'YOUR USERNAME'
baseAuth.password = 'YOUR PASSWORD'

var api = new upcloud.AccountApi()
api.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation

All URIs are relative to *https://api.upcloud.com/1.2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*upcloud.AccountApi* | [**getAccount**](docs/AccountApi.md#getAccount) | **GET** /account | Account information
*upcloud.FirewallApi* | [**createFirewallRule**](docs/FirewallApi.md#createFirewallRule) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
*upcloud.FirewallApi* | [**deleteFirewallRule**](docs/FirewallApi.md#deleteFirewallRule) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
*upcloud.FirewallApi* | [**getFirewallRule**](docs/FirewallApi.md#getFirewallRule) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
*upcloud.FirewallApi* | [**serverServerIdFirewallRuleGet**](docs/FirewallApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
*upcloud.IPAddressApi* | [**addIp**](docs/IPAddressApi.md#addIp) | **POST** /ip_address | Assign IP address
*upcloud.IPAddressApi* | [**deleteIp**](docs/IPAddressApi.md#deleteIp) | **DELETE** /ip_address/{ip} | Release IP address
*upcloud.IPAddressApi* | [**getDetails**](docs/IPAddressApi.md#getDetails) | **GET** /ip_address/{ip} | Get IP address details
*upcloud.IPAddressApi* | [**listIps**](docs/IPAddressApi.md#listIps) | **GET** /ip_address | List IP addresses
*upcloud.IPAddressApi* | [**modifyIp**](docs/IPAddressApi.md#modifyIp) | **PUT** /ip_address/{ip} | Modify IP address
*upcloud.PlanApi* | [**listPlans**](docs/PlanApi.md#listPlans) | **GET** /plan | List available plans
*upcloud.PricesApi* | [**listPrices**](docs/PricesApi.md#listPrices) | **GET** /price | List prices
*upcloud.ServerApi* | [**assignTag**](docs/ServerApi.md#assignTag) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
*upcloud.ServerApi* | [**attachStorage**](docs/ServerApi.md#attachStorage) | **POST** /server/{serverId}/storage/attach | Attach storage
*upcloud.ServerApi* | [**createFirewallRule**](docs/ServerApi.md#createFirewallRule) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
*upcloud.ServerApi* | [**createServer**](docs/ServerApi.md#createServer) | **POST** /server | Create server
*upcloud.ServerApi* | [**deleteFirewallRule**](docs/ServerApi.md#deleteFirewallRule) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
*upcloud.ServerApi* | [**deleteServer**](docs/ServerApi.md#deleteServer) | **DELETE** /server/{serverId} | Delete server
*upcloud.ServerApi* | [**detachStorage**](docs/ServerApi.md#detachStorage) | **POST** /server/{serverId}/storage/detach | Detach storage
*upcloud.ServerApi* | [**ejectCdrom**](docs/ServerApi.md#ejectCdrom) | **POST** /server/{serverId}/cdrom/eject | Eject CD-ROM
*upcloud.ServerApi* | [**getFirewallRule**](docs/ServerApi.md#getFirewallRule) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
*upcloud.ServerApi* | [**listServerConfigurations**](docs/ServerApi.md#listServerConfigurations) | **GET** /server_size | List server configurations
*upcloud.ServerApi* | [**listServers**](docs/ServerApi.md#listServers) | **GET** /server | List of servers
*upcloud.ServerApi* | [**loadCdrom**](docs/ServerApi.md#loadCdrom) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
*upcloud.ServerApi* | [**modifyServer**](docs/ServerApi.md#modifyServer) | **PUT** /server/{serverId} | Modify server
*upcloud.ServerApi* | [**restartServer**](docs/ServerApi.md#restartServer) | **POST** /server/{serverId}/restart | Restart server
*upcloud.ServerApi* | [**serverDetails**](docs/ServerApi.md#serverDetails) | **GET** /server/{serverId} | Get server details
*upcloud.ServerApi* | [**serverServerIdFirewallRuleGet**](docs/ServerApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
*upcloud.ServerApi* | [**startServer**](docs/ServerApi.md#startServer) | **POST** /server/{serverId}/start | Start server
*upcloud.ServerApi* | [**stopServer**](docs/ServerApi.md#stopServer) | **POST** /server/{serverId}/stop | Stop server
*upcloud.ServerApi* | [**untag**](docs/ServerApi.md#untag) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
*upcloud.StorageApi* | [**attachStorage**](docs/StorageApi.md#attachStorage) | **POST** /server/{serverId}/storage/attach | Attach storage
*upcloud.StorageApi* | [**backupStorage**](docs/StorageApi.md#backupStorage) | **POST** /storage/{storageId}/backup | Create backup
*upcloud.StorageApi* | [**cancelOperation**](docs/StorageApi.md#cancelOperation) | **POST** /storage/{storageId}/cancel | Cancel storage operation
*upcloud.StorageApi* | [**cloneStorage**](docs/StorageApi.md#cloneStorage) | **POST** /storage/{storageId}/clone | Clone storage
*upcloud.StorageApi* | [**createStorage**](docs/StorageApi.md#createStorage) | **POST** /storage | Create storage
*upcloud.StorageApi* | [**deleteStorage**](docs/StorageApi.md#deleteStorage) | **DELETE** /storage/{storageId} | Delete storage
*upcloud.StorageApi* | [**detachStorage**](docs/StorageApi.md#detachStorage) | **POST** /server/{serverId}/storage/detach | Detach storage
*upcloud.StorageApi* | [**ejectCdrom**](docs/StorageApi.md#ejectCdrom) | **POST** /server/{serverId}/cdrom/eject | Eject CD-ROM
*upcloud.StorageApi* | [**favoriteStorage**](docs/StorageApi.md#favoriteStorage) | **POST** /storage/{storageId}/favorite | Add storage to favorites
*upcloud.StorageApi* | [**getStorageDetails**](docs/StorageApi.md#getStorageDetails) | **GET** /storage/{storageId} | Get storage details
*upcloud.StorageApi* | [**listStorageTypes**](docs/StorageApi.md#listStorageTypes) | **GET** /storage/{type}/ | List of storages by type
*upcloud.StorageApi* | [**listStorages**](docs/StorageApi.md#listStorages) | **GET** /storage | List of storages
*upcloud.StorageApi* | [**loadCdrom**](docs/StorageApi.md#loadCdrom) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
*upcloud.StorageApi* | [**modifyStorage**](docs/StorageApi.md#modifyStorage) | **PUT** /storage/{storageId} | Modify storage
*upcloud.StorageApi* | [**restoreStorage**](docs/StorageApi.md#restoreStorage) | **POST** /storage/{storageId}/restore | Restore backup
*upcloud.StorageApi* | [**templatizeStorage**](docs/StorageApi.md#templatizeStorage) | **POST** /storage/{storageId}/templatize | Templatize storage
*upcloud.StorageApi* | [**unfavoriteStorage**](docs/StorageApi.md#unfavoriteStorage) | **DELETE** /storage/{storageId}/favorite | Remove storage from favorites
*upcloud.TagApi* | [**assignTag**](docs/TagApi.md#assignTag) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
*upcloud.TagApi* | [**createTag**](docs/TagApi.md#createTag) | **POST** /tag | Create a new tag
*upcloud.TagApi* | [**deleteTag**](docs/TagApi.md#deleteTag) | **DELETE** /tag/{tagName} | Delete tag
*upcloud.TagApi* | [**listTags**](docs/TagApi.md#listTags) | **GET** /tag | List existing tags
*upcloud.TagApi* | [**modifyTag**](docs/TagApi.md#modifyTag) | **PUT** /tag/{tagName} | Modify existing tag
*upcloud.TagApi* | [**untag**](docs/TagApi.md#untag) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
*upcloud.TimezoneApi* | [**listTimezones**](docs/TimezoneApi.md#listTimezones) | **GET** /timezone | List timezones
*upcloud.ZoneApi* | [**listZones**](docs/ZoneApi.md#listZones) | **GET** /zone | List available zones


## Documentation for Models

 - [upcloud.Account](docs/Account.md)
 - [upcloud.AccountResponse](docs/AccountResponse.md)
 - [upcloud.AddIpRequest](docs/AddIpRequest.md)
 - [upcloud.AddressFamily](docs/AddressFamily.md)
 - [upcloud.AssignIpResponse](docs/AssignIpResponse.md)
 - [upcloud.AttachStorageDeviceRequest](docs/AttachStorageDeviceRequest.md)
 - [upcloud.AvailablePlanListResponse](docs/AvailablePlanListResponse.md)
 - [upcloud.AvailablePlanListResponsePlans](docs/AvailablePlanListResponsePlans.md)
 - [upcloud.BackupRule](docs/BackupRule.md)
 - [upcloud.CloneStorageRequest](docs/CloneStorageRequest.md)
 - [upcloud.ConfigurationListResponse](docs/ConfigurationListResponse.md)
 - [upcloud.ConfigurationListResponseServerSizes](docs/ConfigurationListResponseServerSizes.md)
 - [upcloud.CreateBackupStorageRequest](docs/CreateBackupStorageRequest.md)
 - [upcloud.CreateNewTagResponse](docs/CreateNewTagResponse.md)
 - [upcloud.CreateServerRequest](docs/CreateServerRequest.md)
 - [upcloud.CreateServerResponse](docs/CreateServerResponse.md)
 - [upcloud.CreateStorageRequest](docs/CreateStorageRequest.md)
 - [upcloud.CreateStorageResponse](docs/CreateStorageResponse.md)
 - [upcloud.Error](docs/Error.md)
 - [upcloud.ErrorCode](docs/ErrorCode.md)
 - [upcloud.ErrorError](docs/ErrorError.md)
 - [upcloud.ErrorStatus](docs/ErrorStatus.md)
 - [upcloud.FirewallRule](docs/FirewallRule.md)
 - [upcloud.FirewallRuleCreateResponse](docs/FirewallRuleCreateResponse.md)
 - [upcloud.FirewallRuleListResponse](docs/FirewallRuleListResponse.md)
 - [upcloud.FirewallRuleListResponseFirewallRules](docs/FirewallRuleListResponseFirewallRules.md)
 - [upcloud.FirewallRuleRequest](docs/FirewallRuleRequest.md)
 - [upcloud.IpAddress](docs/IpAddress.md)
 - [upcloud.IpAddressListResponse](docs/IpAddressListResponse.md)
 - [upcloud.IpAddresses](docs/IpAddresses.md)
 - [upcloud.ModifyIpRequest](docs/ModifyIpRequest.md)
 - [upcloud.ModifyStorageRequest](docs/ModifyStorageRequest.md)
 - [upcloud.ModifyTagRequest](docs/ModifyTagRequest.md)
 - [upcloud.Plan](docs/Plan.md)
 - [upcloud.Price](docs/Price.md)
 - [upcloud.PriceListResponse](docs/PriceListResponse.md)
 - [upcloud.PriceListResponsePrices](docs/PriceListResponsePrices.md)
 - [upcloud.PriceZone](docs/PriceZone.md)
 - [upcloud.RestartServer](docs/RestartServer.md)
 - [upcloud.Server](docs/Server.md)
 - [upcloud.ServerListResponse](docs/ServerListResponse.md)
 - [upcloud.ServerListResponseServers](docs/ServerListResponseServers.md)
 - [upcloud.ServerSize](docs/ServerSize.md)
 - [upcloud.ServerState](docs/ServerState.md)
 - [upcloud.ServerStorageDevices](docs/ServerStorageDevices.md)
 - [upcloud.ServerTags](docs/ServerTags.md)
 - [upcloud.StopServer](docs/StopServer.md)
 - [upcloud.StopServerRequest](docs/StopServerRequest.md)
 - [upcloud.Storage](docs/Storage.md)
 - [upcloud.StorageAccessType](docs/StorageAccessType.md)
 - [upcloud.StorageBackups](docs/StorageBackups.md)
 - [upcloud.StorageDevice](docs/StorageDevice.md)
 - [upcloud.StorageDeviceDetachRequest](docs/StorageDeviceDetachRequest.md)
 - [upcloud.StorageDeviceLoadRequest](docs/StorageDeviceLoadRequest.md)
 - [upcloud.StorageServers](docs/StorageServers.md)
 - [upcloud.StorageState](docs/StorageState.md)
 - [upcloud.StorageTier](docs/StorageTier.md)
 - [upcloud.StorageType](docs/StorageType.md)
 - [upcloud.SuccessStoragesResponse](docs/SuccessStoragesResponse.md)
 - [upcloud.SuccessStoragesResponseStorages](docs/SuccessStoragesResponseStorages.md)
 - [upcloud.Tag](docs/Tag.md)
 - [upcloud.TagCreateRequest](docs/TagCreateRequest.md)
 - [upcloud.TagListResponse](docs/TagListResponse.md)
 - [upcloud.TagListResponseTags](docs/TagListResponseTags.md)
 - [upcloud.TagServers](docs/TagServers.md)
 - [upcloud.TemplitizeStorageRequest](docs/TemplitizeStorageRequest.md)
 - [upcloud.Timezone](docs/Timezone.md)
 - [upcloud.TimezoneListResponse](docs/TimezoneListResponse.md)
 - [upcloud.TimezoneListResponseTimezones](docs/TimezoneListResponseTimezones.md)
 - [upcloud.Zone](docs/Zone.md)
 - [upcloud.ZoneListResponse](docs/ZoneListResponse.md)
 - [upcloud.ZoneListResponseZones](docs/ZoneListResponseZones.md)


## Documentation for Authorization


### baseAuth

- **Type**: HTTP basic authentication


## Issues

[Open a new issue here](https://github.com/UpCloudLtd/upcloud-javascript-api/issues/new).

## Contributing

How to contribute to the software. Forking and pull requests.

## License

This project is distributed under the [MIT License](https://opensource.org/licenses/MIT), see LICENSE.txt for more information.