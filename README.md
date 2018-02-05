# UpCloud JavaScript API client library

[![Build Status](https://travis-ci.org/UpCloudLtd/upcloud-javascript-api.svg?branch=master)](https://travis-ci.org/UpCloudLtd/upcloud-javascript-api) [![npm version](https://badge.fury.io/js/%40upcloud%2Fupcloud.svg)](https://badge.fury.io/js/%40upcloud%2Fupcloud) [![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/UpCloudLtd/upcloud-javascript-api/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/UpCloudLtd/upcloud-javascript-api/badge.svg?branch=master)](https://coveralls.io/github/UpCloudLtd/upcloud-javascript-api?branch=master)

This is a Javascript API client library that provides integration with the UpCloud API. It allows cloud resource management on UpCloud's IaaS with easy to use functions. The API client follows the RESTful web service principles wherever possible.

The base URL for all API operations is https://api.upcloud.com/ and require basic authentication using UpCloud username and password. We recommend [creating a subaccount](https://www.upcloud.com/support/server-tags-and-group-accounts/) dedicated for the API communication for security purposes. This allows you to restrict API access by servers, storages, and tags ensuring you will never accidentally affect critical systems.

## Table of content

* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
* [Issues](#issues)
* [License](#license)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install @upcloud/upcloud --save
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

Install the library via git:

```shell
    npm install UpCloudLtd/upcloud-javascript-api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming _main.js_ is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include _bundle.js_ in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false,
      },
    },
  ];
}
```

## Usage

Please follow the [installation](#installation) instruction and execute the following JS code (**NOTE**: In real production applications you should use for example ENV variables instead of inserting credentials directly to code and to version control):

```javascript
var upcloud = require('upcloud');

var defaultClient = upcloud.ApiClient.instance;

// Configure HTTP basic authorization: baseAuth
var baseAuth = defaultClient.authentications['baseAuth'];
baseAuth.username = 'UPCLOUD_USERNAME';
baseAuth.password = 'UPCLOUD_PASSWORD';

var api = new upcloud.AccountApi();
api.getAccount().then(
  function(data) {
    console.log('API called successfully. Returned data: ' + data);
  },
  function(error) {
    console.error(error);
  },
);
```

## Documentation

All URIs are relative to _https://api.upcloud.com/1.2_

| Class                  | Method                                                                                 | HTTP request                                                     | Description                   |
| ---------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------- |
| _upcloud.AccountApi_   | [**getAccount**](docs/AccountApi.md#getAccount)                                        | **GET** /account                                                 | Account information           |
| _upcloud.FirewallApi_  | [**createFirewallRule**](docs/FirewallApi.md#createFirewallRule)                       | **POST** /server/{serverId}/firewall_rule                        | Create firewall rule          |
| _upcloud.FirewallApi_  | [**deleteFirewallRule**](docs/FirewallApi.md#deleteFirewallRule)                       | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule          |
| _upcloud.FirewallApi_  | [**getFirewallRule**](docs/FirewallApi.md#getFirewallRule)                             | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber}    | Get firewall rule details     |
| _upcloud.FirewallApi_  | [**serverServerIdFirewallRuleGet**](docs/FirewallApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule                         | List firewall rules           |
| _upcloud.IPAddressApi_ | [**addIp**](docs/IPAddressApi.md#addIp)                                                | **POST** /ip_address                                             | Assign IP address             |
| _upcloud.IPAddressApi_ | [**deleteIp**](docs/IPAddressApi.md#deleteIp)                                          | **DELETE** /ip_address/{ip}                                      | Release IP address            |
| _upcloud.IPAddressApi_ | [**getDetails**](docs/IPAddressApi.md#getDetails)                                      | **GET** /ip_address/{ip}                                         | Get IP address details        |
| _upcloud.IPAddressApi_ | [**listIps**](docs/IPAddressApi.md#listIps)                                            | **GET** /ip_address                                              | List IP addresses             |
| _upcloud.IPAddressApi_ | [**modifyIp**](docs/IPAddressApi.md#modifyIp)                                          | **PUT** /ip_address/{ip}                                         | Modify IP address             |
| _upcloud.PlanApi_      | [**listPlans**](docs/PlanApi.md#listPlans)                                             | **GET** /plan                                                    | List available plans          |
| _upcloud.PricesApi_    | [**listPrices**](docs/PricesApi.md#listPrices)                                         | **GET** /price                                                   | List prices                   |
| _upcloud.ServerApi_    | [**assignTag**](docs/ServerApi.md#assignTag)                                           | **POST** /server/{serverId}/tag/{tagList}                        | Assign tag to a server        |
| _upcloud.ServerApi_    | [**attachStorage**](docs/ServerApi.md#attachStorage)                                   | **POST** /server/{serverId}/storage/attach                       | Attach storage                |
| _upcloud.ServerApi_    | [**createFirewallRule**](docs/ServerApi.md#createFirewallRule)                         | **POST** /server/{serverId}/firewall_rule                        | Create firewall rule          |
| _upcloud.ServerApi_    | [**createServer**](docs/ServerApi.md#createServer)                                     | **POST** /server                                                 | Create server                 |
| _upcloud.ServerApi_    | [**deleteFirewallRule**](docs/ServerApi.md#deleteFirewallRule)                         | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule          |
| _upcloud.ServerApi_    | [**deleteServer**](docs/ServerApi.md#deleteServer)                                     | **DELETE** /server/{serverId}                                    | Delete server                 |
| _upcloud.ServerApi_    | [**detachStorage**](docs/ServerApi.md#detachStorage)                                   | **POST** /server/{serverId}/storage/detach                       | Detach storage                |
| _upcloud.ServerApi_    | [**ejectCdrom**](docs/ServerApi.md#ejectCdrom)                                         | **POST** /server/{serverId}/cdrom/eject                          | Eject CD-ROM                  |
| _upcloud.ServerApi_    | [**getFirewallRule**](docs/ServerApi.md#getFirewallRule)                               | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber}    | Get firewall rule details     |
| _upcloud.ServerApi_    | [**listServerConfigurations**](docs/ServerApi.md#listServerConfigurations)             | **GET** /server_size                                             | List server configurations    |
| _upcloud.ServerApi_    | [**listServers**](docs/ServerApi.md#listServers)                                       | **GET** /server                                                  | List of servers               |
| _upcloud.ServerApi_    | [**loadCdrom**](docs/ServerApi.md#loadCdrom)                                           | **POST** /server/{serverId}/storage/cdrom/load                   | Load CD-ROM                   |
| _upcloud.ServerApi_    | [**modifyServer**](docs/ServerApi.md#modifyServer)                                     | **PUT** /server/{serverId}                                       | Modify server                 |
| _upcloud.ServerApi_    | [**restartServer**](docs/ServerApi.md#restartServer)                                   | **POST** /server/{serverId}/restart                              | Restart server                |
| _upcloud.ServerApi_    | [**serverDetails**](docs/ServerApi.md#serverDetails)                                   | **GET** /server/{serverId}                                       | Get server details            |
| _upcloud.ServerApi_    | [**serverServerIdFirewallRuleGet**](docs/ServerApi.md#serverServerIdFirewallRuleGet)   | **GET** /server/{serverId}/firewall_rule                         | List firewall rules           |
| _upcloud.ServerApi_    | [**startServer**](docs/ServerApi.md#startServer)                                       | **POST** /server/{serverId}/start                                | Start server                  |
| _upcloud.ServerApi_    | [**stopServer**](docs/ServerApi.md#stopServer)                                         | **POST** /server/{serverId}/stop                                 | Stop server                   |
| _upcloud.ServerApi_    | [**untag**](docs/ServerApi.md#untag)                                                   | **POST** /server/{serverId}/untag/{tagName}                      | Remove tag from server        |
| _upcloud.StorageApi_   | [**attachStorage**](docs/StorageApi.md#attachStorage)                                  | **POST** /server/{serverId}/storage/attach                       | Attach storage                |
| _upcloud.StorageApi_   | [**backupStorage**](docs/StorageApi.md#backupStorage)                                  | **POST** /storage/{storageId}/backup                             | Create backup                 |
| _upcloud.StorageApi_   | [**cancelOperation**](docs/StorageApi.md#cancelOperation)                              | **POST** /storage/{storageId}/cancel                             | Cancel storage operation      |
| _upcloud.StorageApi_   | [**cloneStorage**](docs/StorageApi.md#cloneStorage)                                    | **POST** /storage/{storageId}/clone                              | Clone storage                 |
| _upcloud.StorageApi_   | [**createStorage**](docs/StorageApi.md#createStorage)                                  | **POST** /storage                                                | Create storage                |
| _upcloud.StorageApi_   | [**deleteStorage**](docs/StorageApi.md#deleteStorage)                                  | **DELETE** /storage/{storageId}                                  | Delete storage                |
| _upcloud.StorageApi_   | [**detachStorage**](docs/StorageApi.md#detachStorage)                                  | **POST** /server/{serverId}/storage/detach                       | Detach storage                |
| _upcloud.StorageApi_   | [**ejectCdrom**](docs/StorageApi.md#ejectCdrom)                                        | **POST** /server/{serverId}/cdrom/eject                          | Eject CD-ROM                  |
| _upcloud.StorageApi_   | [**favoriteStorage**](docs/StorageApi.md#favoriteStorage)                              | **POST** /storage/{storageId}/favorite                           | Add storage to favorites      |
| _upcloud.StorageApi_   | [**getStorageDetails**](docs/StorageApi.md#getStorageDetails)                          | **GET** /storage/{storageId}                                     | Get storage details           |
| _upcloud.StorageApi_   | [**listStorageTypes**](docs/StorageApi.md#listStorageTypes)                            | **GET** /storage/{type}/                                         | List of storages by type      |
| _upcloud.StorageApi_   | [**listStorages**](docs/StorageApi.md#listStorages)                                    | **GET** /storage                                                 | List of storages              |
| _upcloud.StorageApi_   | [**loadCdrom**](docs/StorageApi.md#loadCdrom)                                          | **POST** /server/{serverId}/storage/cdrom/load                   | Load CD-ROM                   |
| _upcloud.StorageApi_   | [**modifyStorage**](docs/StorageApi.md#modifyStorage)                                  | **PUT** /storage/{storageId}                                     | Modify storage                |
| _upcloud.StorageApi_   | [**restoreStorage**](docs/StorageApi.md#restoreStorage)                                | **POST** /storage/{storageId}/restore                            | Restore backup                |
| _upcloud.StorageApi_   | [**templatizeStorage**](docs/StorageApi.md#templatizeStorage)                          | **POST** /storage/{storageId}/templatize                         | Templatize storage            |
| _upcloud.StorageApi_   | [**unfavoriteStorage**](docs/StorageApi.md#unfavoriteStorage)                          | **DELETE** /storage/{storageId}/favorite                         | Remove storage from favorites |
| _upcloud.TagApi_       | [**assignTag**](docs/TagApi.md#assignTag)                                              | **POST** /server/{serverId}/tag/{tagList}                        | Assign tag to a server        |
| _upcloud.TagApi_       | [**createTag**](docs/TagApi.md#createTag)                                              | **POST** /tag                                                    | Create a new tag              |
| _upcloud.TagApi_       | [**deleteTag**](docs/TagApi.md#deleteTag)                                              | **DELETE** /tag/{tagName}                                        | Delete tag                    |
| _upcloud.TagApi_       | [**listTags**](docs/TagApi.md#listTags)                                                | **GET** /tag                                                     | List existing tags            |
| _upcloud.TagApi_       | [**modifyTag**](docs/TagApi.md#modifyTag)                                              | **PUT** /tag/{tagName}                                           | Modify existing tag           |
| _upcloud.TagApi_       | [**untag**](docs/TagApi.md#untag)                                                      | **POST** /server/{serverId}/untag/{tagName}                      | Remove tag from server        |
| _upcloud.TimezoneApi_  | [**listTimezones**](docs/TimezoneApi.md#listTimezones)                                 | **GET** /timezone                                                | List timezones                |
| _upcloud.ZoneApi_      | [**listZones**](docs/ZoneApi.md#listZones)                                             | **GET** /zone                                                    | List available zones          |

## Documentation of the models

* [upcloud.Account](docs/Account.md)
* [upcloud.AccountResponse](docs/AccountResponse.md)
* [upcloud.AddIpRequest](docs/AddIpRequest.md)
* [upcloud.AddressFamily](docs/AddressFamily.md)
* [upcloud.AssignIpResponse](docs/AssignIpResponse.md)
* [upcloud.AttachStorageDeviceRequest](docs/AttachStorageDeviceRequest.md)
* [upcloud.AvailablePlanListResponse](docs/AvailablePlanListResponse.md)
* [upcloud.AvailablePlanListResponsePlans](docs/AvailablePlanListResponsePlans.md)
* [upcloud.BackupRule](docs/BackupRule.md)
* [upcloud.CloneStorageRequest](docs/CloneStorageRequest.md)
* [upcloud.ConfigurationListResponse](docs/ConfigurationListResponse.md)
* [upcloud.ConfigurationListResponseServerSizes](docs/ConfigurationListResponseServerSizes.md)
* [upcloud.CreateBackupStorageRequest](docs/CreateBackupStorageRequest.md)
* [upcloud.CreateNewTagResponse](docs/CreateNewTagResponse.md)
* [upcloud.CreateServerRequest](docs/CreateServerRequest.md)
* [upcloud.CreateServerResponse](docs/CreateServerResponse.md)
* [upcloud.CreateStorageRequest](docs/CreateStorageRequest.md)
* [upcloud.CreateStorageResponse](docs/CreateStorageResponse.md)
* [upcloud.Error](docs/Error.md)
* [upcloud.ErrorCode](docs/ErrorCode.md)
* [upcloud.ErrorError](docs/ErrorError.md)
* [upcloud.ErrorStatus](docs/ErrorStatus.md)
* [upcloud.FirewallRule](docs/FirewallRule.md)
* [upcloud.FirewallRuleCreateResponse](docs/FirewallRuleCreateResponse.md)
* [upcloud.FirewallRuleListResponse](docs/FirewallRuleListResponse.md)
* [upcloud.FirewallRuleListResponseFirewallRules](docs/FirewallRuleListResponseFirewallRules.md)
* [upcloud.FirewallRuleRequest](docs/FirewallRuleRequest.md)
* [upcloud.IpAddress](docs/IpAddress.md)
* [upcloud.IpAddressListResponse](docs/IpAddressListResponse.md)
* [upcloud.IpAddresses](docs/IpAddresses.md)
* [upcloud.ModifyIpRequest](docs/ModifyIpRequest.md)
* [upcloud.ModifyStorageRequest](docs/ModifyStorageRequest.md)
* [upcloud.ModifyTagRequest](docs/ModifyTagRequest.md)
* [upcloud.Plan](docs/Plan.md)
* [upcloud.Price](docs/Price.md)
* [upcloud.PriceListResponse](docs/PriceListResponse.md)
* [upcloud.PriceListResponsePrices](docs/PriceListResponsePrices.md)
* [upcloud.PriceZone](docs/PriceZone.md)
* [upcloud.RestartServer](docs/RestartServer.md)
* [upcloud.Server](docs/Server.md)
* [upcloud.ServerListResponse](docs/ServerListResponse.md)
* [upcloud.ServerListResponseServers](docs/ServerListResponseServers.md)
* [upcloud.ServerSize](docs/ServerSize.md)
* [upcloud.ServerState](docs/ServerState.md)
* [upcloud.ServerStorageDevices](docs/ServerStorageDevices.md)
* [upcloud.ServerTags](docs/ServerTags.md)
* [upcloud.StopServer](docs/StopServer.md)
* [upcloud.StopServerRequest](docs/StopServerRequest.md)
* [upcloud.Storage](docs/Storage.md)
* [upcloud.StorageAccessType](docs/StorageAccessType.md)
* [upcloud.StorageBackups](docs/StorageBackups.md)
* [upcloud.StorageDevice](docs/StorageDevice.md)
* [upcloud.StorageDeviceDetachRequest](docs/StorageDeviceDetachRequest.md)
* [upcloud.StorageDeviceLoadRequest](docs/StorageDeviceLoadRequest.md)
* [upcloud.StorageServers](docs/StorageServers.md)
* [upcloud.StorageState](docs/StorageState.md)
* [upcloud.StorageTier](docs/StorageTier.md)
* [upcloud.StorageType](docs/StorageType.md)
* [upcloud.SuccessStoragesResponse](docs/SuccessStoragesResponse.md)
* [upcloud.SuccessStoragesResponseStorages](docs/SuccessStoragesResponseStorages.md)
* [upcloud.Tag](docs/Tag.md)
* [upcloud.TagCreateRequest](docs/TagCreateRequest.md)
* [upcloud.TagListResponse](docs/TagListResponse.md)
* [upcloud.TagListResponseTags](docs/TagListResponseTags.md)
* [upcloud.TagServers](docs/TagServers.md)
* [upcloud.TemplitizeStorageRequest](docs/TemplitizeStorageRequest.md)
* [upcloud.Timezone](docs/Timezone.md)
* [upcloud.TimezoneListResponse](docs/TimezoneListResponse.md)
* [upcloud.TimezoneListResponseTimezones](docs/TimezoneListResponseTimezones.md)
* [upcloud.Zone](docs/Zone.md)
* [upcloud.ZoneListResponse](docs/ZoneListResponse.md)
* [upcloud.ZoneListResponseZones](docs/ZoneListResponseZones.md)

## Documentation for authorization

Take care if storing usernames or passwords in files while developing API applications to avoid accidentally publishing your account credentials.

### baseAuth

* **Type**: HTTP basic authentication
* **Username**: Your UpCloud API username
* **Password**: Your UpCloud API user's password

## Issues

Found a bug, have a problem using the client, or anything else about the library you would want to mention? [Open a new issue here](https://github.com/UpCloudLtd/upcloud-javascript-api/issues/new) to get in contact.

## License

This project is distributed under the [MIT License](https://opensource.org/licenses/MIT), see LICENSE.txt for more information.
