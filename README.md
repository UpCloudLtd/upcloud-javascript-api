# upcloud_api

UpcloudApi - JavaScript client for upcloud_api
The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.2.0
- Package version: 1.2.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install upcloud_api --save
```

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
perform the following (assuming *main.js* is your entry file):

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

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var UpcloudApi = require('upcloud_api');

var api = new UpcloudApi.AccountApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost/1.2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UpcloudApi.AccountApi* | [**accountGet**](docs/AccountApi.md#accountGet) | **GET** /account | Account information
*UpcloudApi.FirewallApi* | [**serverServerIdFirewallRuleFirewallRuleNumberDelete**](docs/FirewallApi.md#serverServerIdFirewallRuleFirewallRuleNumberDelete) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
*UpcloudApi.FirewallApi* | [**serverServerIdFirewallRuleFirewallRuleNumberGet**](docs/FirewallApi.md#serverServerIdFirewallRuleFirewallRuleNumberGet) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
*UpcloudApi.FirewallApi* | [**serverServerIdFirewallRuleGet**](docs/FirewallApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
*UpcloudApi.FirewallApi* | [**serverServerIdFirewallRulePost**](docs/FirewallApi.md#serverServerIdFirewallRulePost) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
*UpcloudApi.IPAddressApi* | [**ipAddressGet**](docs/IPAddressApi.md#ipAddressGet) | **GET** /ip_address | List IP addresses
*UpcloudApi.IPAddressApi* | [**ipAddressIpDelete**](docs/IPAddressApi.md#ipAddressIpDelete) | **DELETE** /ip_address/{ip} | Release IP address
*UpcloudApi.IPAddressApi* | [**ipAddressIpGet**](docs/IPAddressApi.md#ipAddressIpGet) | **GET** /ip_address/{ip} | Get IP address details
*UpcloudApi.IPAddressApi* | [**ipAddressIpPut**](docs/IPAddressApi.md#ipAddressIpPut) | **PUT** /ip_address/{ip} | Modify IP address
*UpcloudApi.IPAddressApi* | [**ipAddressPost**](docs/IPAddressApi.md#ipAddressPost) | **POST** /ip_address | Assign IP address
*UpcloudApi.PlanApi* | [**planGet**](docs/PlanApi.md#planGet) | **GET** /plan | List available plans
*UpcloudApi.PricesApi* | [**priceGet**](docs/PricesApi.md#priceGet) | **GET** /price | List prices
*UpcloudApi.ServerApi* | [**createServer**](docs/ServerApi.md#createServer) | **POST** /server | Create server
*UpcloudApi.ServerApi* | [**deleteServer**](docs/ServerApi.md#deleteServer) | **DELETE** /server/{serverId} | Delete server
*UpcloudApi.ServerApi* | [**listServers**](docs/ServerApi.md#listServers) | **GET** /server | List of servers
*UpcloudApi.ServerApi* | [**serverDetails**](docs/ServerApi.md#serverDetails) | **GET** /server/{serverId} | Get server details
*UpcloudApi.ServerApi* | [**serverServerIdFirewallRuleFirewallRuleNumberDelete**](docs/ServerApi.md#serverServerIdFirewallRuleFirewallRuleNumberDelete) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
*UpcloudApi.ServerApi* | [**serverServerIdFirewallRuleFirewallRuleNumberGet**](docs/ServerApi.md#serverServerIdFirewallRuleFirewallRuleNumberGet) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
*UpcloudApi.ServerApi* | [**serverServerIdFirewallRuleGet**](docs/ServerApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
*UpcloudApi.ServerApi* | [**serverServerIdFirewallRulePost**](docs/ServerApi.md#serverServerIdFirewallRulePost) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
*UpcloudApi.ServerApi* | [**serverServerIdRestartPost**](docs/ServerApi.md#serverServerIdRestartPost) | **POST** /server/{serverId}/restart | Restart server
*UpcloudApi.ServerApi* | [**serverServerIdStartPost**](docs/ServerApi.md#serverServerIdStartPost) | **POST** /server/{serverId}/start | Start server
*UpcloudApi.ServerApi* | [**serverServerIdStopPost**](docs/ServerApi.md#serverServerIdStopPost) | **POST** /server/{serverId}/stop | Stop server
*UpcloudApi.ServerApi* | [**serverServerIdStorageAttachPost**](docs/ServerApi.md#serverServerIdStorageAttachPost) | **POST** /server/{serverId}/storage/attach | Attach storage
*UpcloudApi.ServerApi* | [**serverServerIdStorageCdromEjectPost**](docs/ServerApi.md#serverServerIdStorageCdromEjectPost) | **POST** /server/{serverId}/storage/cdrom/eject | Eject CD-ROM
*UpcloudApi.ServerApi* | [**serverServerIdStorageCdromLoadPost**](docs/ServerApi.md#serverServerIdStorageCdromLoadPost) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
*UpcloudApi.ServerApi* | [**serverServerIdStorageDetachPost**](docs/ServerApi.md#serverServerIdStorageDetachPost) | **POST** /server/{serverId}/storage/detach | Detach storage
*UpcloudApi.ServerApi* | [**serverServerIdTagTagListPost**](docs/ServerApi.md#serverServerIdTagTagListPost) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
*UpcloudApi.ServerApi* | [**serverServerIdUntagTagNamePost**](docs/ServerApi.md#serverServerIdUntagTagNamePost) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
*UpcloudApi.ServerApi* | [**serverSizeGet**](docs/ServerApi.md#serverSizeGet) | **GET** /server_size | List server configurations
*UpcloudApi.ServerApi* | [**updateServer**](docs/ServerApi.md#updateServer) | **PUT** /server/{serverId} | Modify server
*UpcloudApi.StorageApi* | [**listStorages**](docs/StorageApi.md#listStorages) | **GET** /storage | List of storages
*UpcloudApi.StorageApi* | [**listStorages_0**](docs/StorageApi.md#listStorages_0) | **GET** /storage/{type} | List of storages by type
*UpcloudApi.StorageApi* | [**serverServerIdStorageAttachPost**](docs/StorageApi.md#serverServerIdStorageAttachPost) | **POST** /server/{serverId}/storage/attach | Attach storage
*UpcloudApi.StorageApi* | [**serverServerIdStorageCdromEjectPost**](docs/StorageApi.md#serverServerIdStorageCdromEjectPost) | **POST** /server/{serverId}/storage/cdrom/eject | Eject CD-ROM
*UpcloudApi.StorageApi* | [**serverServerIdStorageCdromLoadPost**](docs/StorageApi.md#serverServerIdStorageCdromLoadPost) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
*UpcloudApi.StorageApi* | [**serverServerIdStorageDetachPost**](docs/StorageApi.md#serverServerIdStorageDetachPost) | **POST** /server/{serverId}/storage/detach | Detach storage
*UpcloudApi.StorageApi* | [**storagePost**](docs/StorageApi.md#storagePost) | **POST** /storage | Create storage
*UpcloudApi.StorageApi* | [**storageStorageIdBackupPost**](docs/StorageApi.md#storageStorageIdBackupPost) | **POST** /storage/{storageId}/backup | Create backup
*UpcloudApi.StorageApi* | [**storageStorageIdCancelPost**](docs/StorageApi.md#storageStorageIdCancelPost) | **POST** /storage/{storageId}/cancel | Cancel storage operation
*UpcloudApi.StorageApi* | [**storageStorageIdClonePost**](docs/StorageApi.md#storageStorageIdClonePost) | **POST** /storage/{storageId}/clone | Clone storage
*UpcloudApi.StorageApi* | [**storageStorageIdDelete**](docs/StorageApi.md#storageStorageIdDelete) | **DELETE** /storage/{storageId} | Delete storage
*UpcloudApi.StorageApi* | [**storageStorageIdFavoriteDelete**](docs/StorageApi.md#storageStorageIdFavoriteDelete) | **DELETE** /storage/{storageId}/favorite | Remove storage from favorites
*UpcloudApi.StorageApi* | [**storageStorageIdFavoritePost**](docs/StorageApi.md#storageStorageIdFavoritePost) | **POST** /storage/{storageId}/favorite | Add storage to favorites
*UpcloudApi.StorageApi* | [**storageStorageIdGet**](docs/StorageApi.md#storageStorageIdGet) | **GET** /storage/{storageId} | Get storage details
*UpcloudApi.StorageApi* | [**storageStorageIdPut**](docs/StorageApi.md#storageStorageIdPut) | **PUT** /storage/{storageId} | Modify storage
*UpcloudApi.StorageApi* | [**storageStorageIdRestorePost**](docs/StorageApi.md#storageStorageIdRestorePost) | **POST** /storage/{storageId}/restore | Restore backup
*UpcloudApi.StorageApi* | [**storageStorageIdTemplatizePost**](docs/StorageApi.md#storageStorageIdTemplatizePost) | **POST** /storage/{storageId}/templatize | Templatize storage
*UpcloudApi.TagApi* | [**serverServerIdTagTagListPost**](docs/TagApi.md#serverServerIdTagTagListPost) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
*UpcloudApi.TagApi* | [**serverServerIdUntagTagNamePost**](docs/TagApi.md#serverServerIdUntagTagNamePost) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
*UpcloudApi.TagApi* | [**tagGet**](docs/TagApi.md#tagGet) | **GET** /tag | List existing tags
*UpcloudApi.TagApi* | [**tagPost**](docs/TagApi.md#tagPost) | **POST** /tag | Create a new tag
*UpcloudApi.TagApi* | [**tagTagNameDelete**](docs/TagApi.md#tagTagNameDelete) | **DELETE** /tag/{tagName} | Delete tag
*UpcloudApi.TagApi* | [**tagTagNamePut**](docs/TagApi.md#tagTagNamePut) | **PUT** /tag/{tagName} | Modify existing tag
*UpcloudApi.TimezoneApi* | [**timezoneGet**](docs/TimezoneApi.md#timezoneGet) | **GET** /timezone | List timezones
*UpcloudApi.ZoneApi* | [**zoneGet**](docs/ZoneApi.md#zoneGet) | **GET** /zone | List available zones


## Documentation for Models

 - [UpcloudApi.Account](docs/Account.md)
 - [UpcloudApi.AddressFamily](docs/AddressFamily.md)
 - [UpcloudApi.BackupRule](docs/BackupRule.md)
 - [UpcloudApi.Error](docs/Error.md)
 - [UpcloudApi.ErrorCode](docs/ErrorCode.md)
 - [UpcloudApi.ErrorError](docs/ErrorError.md)
 - [UpcloudApi.ErrorStatus](docs/ErrorStatus.md)
 - [UpcloudApi.FirewallRule](docs/FirewallRule.md)
 - [UpcloudApi.InlineResponse200](docs/InlineResponse200.md)
 - [UpcloudApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [UpcloudApi.InlineResponse20010](docs/InlineResponse20010.md)
 - [UpcloudApi.InlineResponse2001Zones](docs/InlineResponse2001Zones.md)
 - [UpcloudApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [UpcloudApi.InlineResponse2002Timezones](docs/InlineResponse2002Timezones.md)
 - [UpcloudApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [UpcloudApi.InlineResponse2003Plans](docs/InlineResponse2003Plans.md)
 - [UpcloudApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [UpcloudApi.InlineResponse2004ServerSizes](docs/InlineResponse2004ServerSizes.md)
 - [UpcloudApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [UpcloudApi.InlineResponse2005Servers](docs/InlineResponse2005Servers.md)
 - [UpcloudApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [UpcloudApi.InlineResponse2006IpAddresses](docs/InlineResponse2006IpAddresses.md)
 - [UpcloudApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [UpcloudApi.InlineResponse2007FirewallRules](docs/InlineResponse2007FirewallRules.md)
 - [UpcloudApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [UpcloudApi.InlineResponse2009](docs/InlineResponse2009.md)
 - [UpcloudApi.InlineResponse2009Tags](docs/InlineResponse2009Tags.md)
 - [UpcloudApi.InlineResponse200Price](docs/InlineResponse200Price.md)
 - [UpcloudApi.InlineResponse201](docs/InlineResponse201.md)
 - [UpcloudApi.InlineResponse2011](docs/InlineResponse2011.md)
 - [UpcloudApi.IpAddress](docs/IpAddress.md)
 - [UpcloudApi.IpAddress1](docs/IpAddress1.md)
 - [UpcloudApi.Plan](docs/Plan.md)
 - [UpcloudApi.Price](docs/Price.md)
 - [UpcloudApi.PriceZone](docs/PriceZone.md)
 - [UpcloudApi.RestartServer](docs/RestartServer.md)
 - [UpcloudApi.Server](docs/Server.md)
 - [UpcloudApi.ServerListResponse](docs/ServerListResponse.md)
 - [UpcloudApi.ServerSize](docs/ServerSize.md)
 - [UpcloudApi.ServerState](docs/ServerState.md)
 - [UpcloudApi.ServerStorageDevices](docs/ServerStorageDevices.md)
 - [UpcloudApi.ServerTags](docs/ServerTags.md)
 - [UpcloudApi.StopServer](docs/StopServer.md)
 - [UpcloudApi.Storage](docs/Storage.md)
 - [UpcloudApi.Storage1](docs/Storage1.md)
 - [UpcloudApi.Storage2](docs/Storage2.md)
 - [UpcloudApi.Storage3](docs/Storage3.md)
 - [UpcloudApi.Storage4](docs/Storage4.md)
 - [UpcloudApi.StorageAccessType](docs/StorageAccessType.md)
 - [UpcloudApi.StorageBackups](docs/StorageBackups.md)
 - [UpcloudApi.StorageDevice](docs/StorageDevice.md)
 - [UpcloudApi.StorageDevice1](docs/StorageDevice1.md)
 - [UpcloudApi.StorageServers](docs/StorageServers.md)
 - [UpcloudApi.StorageState](docs/StorageState.md)
 - [UpcloudApi.StorageTier](docs/StorageTier.md)
 - [UpcloudApi.StorageType](docs/StorageType.md)
 - [UpcloudApi.SuccessStoragesResponse](docs/SuccessStoragesResponse.md)
 - [UpcloudApi.SuccessStoragesResponseStorages](docs/SuccessStoragesResponseStorages.md)
 - [UpcloudApi.Tag](docs/Tag.md)
 - [UpcloudApi.Tag1](docs/Tag1.md)
 - [UpcloudApi.TagServers](docs/TagServers.md)
 - [UpcloudApi.Timezone](docs/Timezone.md)
 - [UpcloudApi.Zone](docs/Zone.md)


## Documentation for Authorization

 All endpoints do not require authorization.

