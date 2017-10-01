/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountResponse', 'model/AddIpRequest', 'model/AddressFamily', 'model/AssignIpResponse', 'model/AttachStorageDeviceRequest', 'model/AvailablePlanListResponse', 'model/AvailablePlanListResponsePlans', 'model/BackupRule', 'model/CloneStorageRequest', 'model/ConfigurationListResponse', 'model/ConfigurationListResponseServerSizes', 'model/CreateBackupStorageRequest', 'model/CreateNewTagResponse', 'model/CreateServerRequest', 'model/CreateServerResponse', 'model/CreateStorageRequest', 'model/CreateStorageResponse', 'model/Error', 'model/ErrorCode', 'model/ErrorError', 'model/ErrorStatus', 'model/FirewallRule', 'model/FirewallRuleCreateResponse', 'model/FirewallRuleListResponse', 'model/FirewallRuleListResponseFirewallRules', 'model/FirewallRuleRequest', 'model/IpAddress', 'model/IpAddressListResponse', 'model/IpAddresses', 'model/ModifyIpRequest', 'model/ModifyStorageRequest', 'model/Plan', 'model/Price', 'model/PriceListResponse', 'model/PriceListResponsePrices', 'model/PriceZone', 'model/RestartServer', 'model/Server', 'model/ServerListResponse', 'model/ServerListResponseServers', 'model/ServerSize', 'model/ServerState', 'model/ServerStorageDevices', 'model/ServerTags', 'model/StopServer', 'model/StopServerRequest', 'model/Storage', 'model/StorageAccessType', 'model/StorageBackups', 'model/StorageDevice', 'model/StorageDeviceDetachRequest', 'model/StorageDeviceLoadRequest', 'model/StorageServers', 'model/StorageState', 'model/StorageTier', 'model/StorageType', 'model/SuccessStoragesResponse', 'model/SuccessStoragesResponseStorages', 'model/Tag', 'model/Tag1', 'model/TagListResponse', 'model/TagListResponseTags', 'model/TagServers', 'model/TemplitizeStorageRequest', 'model/Timezone', 'model/TimezoneListResponse', 'model/TimezoneListResponseTimezones', 'model/Zone', 'model/ZoneListResponse', 'model/ZoneListResponseZones', 'api/AccountApi', 'api/FirewallApi', 'api/IPAddressApi', 'api/PlanApi', 'api/PricesApi', 'api/ServerApi', 'api/StorageApi', 'api/TagApi', 'api/TimezoneApi', 'api/ZoneApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountResponse'), require('./model/AddIpRequest'), require('./model/AddressFamily'), require('./model/AssignIpResponse'), require('./model/AttachStorageDeviceRequest'), require('./model/AvailablePlanListResponse'), require('./model/AvailablePlanListResponsePlans'), require('./model/BackupRule'), require('./model/CloneStorageRequest'), require('./model/ConfigurationListResponse'), require('./model/ConfigurationListResponseServerSizes'), require('./model/CreateBackupStorageRequest'), require('./model/CreateNewTagResponse'), require('./model/CreateServerRequest'), require('./model/CreateServerResponse'), require('./model/CreateStorageRequest'), require('./model/CreateStorageResponse'), require('./model/Error'), require('./model/ErrorCode'), require('./model/ErrorError'), require('./model/ErrorStatus'), require('./model/FirewallRule'), require('./model/FirewallRuleCreateResponse'), require('./model/FirewallRuleListResponse'), require('./model/FirewallRuleListResponseFirewallRules'), require('./model/FirewallRuleRequest'), require('./model/IpAddress'), require('./model/IpAddressListResponse'), require('./model/IpAddresses'), require('./model/ModifyIpRequest'), require('./model/ModifyStorageRequest'), require('./model/Plan'), require('./model/Price'), require('./model/PriceListResponse'), require('./model/PriceListResponsePrices'), require('./model/PriceZone'), require('./model/RestartServer'), require('./model/Server'), require('./model/ServerListResponse'), require('./model/ServerListResponseServers'), require('./model/ServerSize'), require('./model/ServerState'), require('./model/ServerStorageDevices'), require('./model/ServerTags'), require('./model/StopServer'), require('./model/StopServerRequest'), require('./model/Storage'), require('./model/StorageAccessType'), require('./model/StorageBackups'), require('./model/StorageDevice'), require('./model/StorageDeviceDetachRequest'), require('./model/StorageDeviceLoadRequest'), require('./model/StorageServers'), require('./model/StorageState'), require('./model/StorageTier'), require('./model/StorageType'), require('./model/SuccessStoragesResponse'), require('./model/SuccessStoragesResponseStorages'), require('./model/Tag'), require('./model/Tag1'), require('./model/TagListResponse'), require('./model/TagListResponseTags'), require('./model/TagServers'), require('./model/TemplitizeStorageRequest'), require('./model/Timezone'), require('./model/TimezoneListResponse'), require('./model/TimezoneListResponseTimezones'), require('./model/Zone'), require('./model/ZoneListResponse'), require('./model/ZoneListResponseZones'), require('./api/AccountApi'), require('./api/FirewallApi'), require('./api/IPAddressApi'), require('./api/PlanApi'), require('./api/PricesApi'), require('./api/ServerApi'), require('./api/StorageApi'), require('./api/TagApi'), require('./api/TimezoneApi'), require('./api/ZoneApi'));
  }
}(function(ApiClient, Account, AccountResponse, AddIpRequest, AddressFamily, AssignIpResponse, AttachStorageDeviceRequest, AvailablePlanListResponse, AvailablePlanListResponsePlans, BackupRule, CloneStorageRequest, ConfigurationListResponse, ConfigurationListResponseServerSizes, CreateBackupStorageRequest, CreateNewTagResponse, CreateServerRequest, CreateServerResponse, CreateStorageRequest, CreateStorageResponse, Error, ErrorCode, ErrorError, ErrorStatus, FirewallRule, FirewallRuleCreateResponse, FirewallRuleListResponse, FirewallRuleListResponseFirewallRules, FirewallRuleRequest, IpAddress, IpAddressListResponse, IpAddresses, ModifyIpRequest, ModifyStorageRequest, Plan, Price, PriceListResponse, PriceListResponsePrices, PriceZone, RestartServer, Server, ServerListResponse, ServerListResponseServers, ServerSize, ServerState, ServerStorageDevices, ServerTags, StopServer, StopServerRequest, Storage, StorageAccessType, StorageBackups, StorageDevice, StorageDeviceDetachRequest, StorageDeviceLoadRequest, StorageServers, StorageState, StorageTier, StorageType, SuccessStoragesResponse, SuccessStoragesResponseStorages, Tag, Tag1, TagListResponse, TagListResponseTags, TagServers, TemplitizeStorageRequest, Timezone, TimezoneListResponse, TimezoneListResponseTimezones, Zone, ZoneListResponse, ZoneListResponseZones, AccountApi, FirewallApi, IPAddressApi, PlanApi, PricesApi, ServerApi, StorageApi, TagApi, TimezoneApi, ZoneApi) {
  'use strict';

  /**
   * The_UpCloud_API_consists_of_operations_used_to_control_resources_on_UpCloud__The_API_is_a_web_service_interface__HTTPS_is_used_to_connect_to_the_API__The_API_follows_the_principles_of_a_RESTful_web_service_wherever_possible__The_base_URL_for_all_API_operations_is__httpsapi_upcloud_com__All_API_operations_require_authentication_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var upcloud = require('index'); // See note below*.
   * var xxxSvc = new upcloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new upcloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new upcloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new upcloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountResponse model constructor.
     * @property {module:model/AccountResponse}
     */
    AccountResponse: AccountResponse,
    /**
     * The AddIpRequest model constructor.
     * @property {module:model/AddIpRequest}
     */
    AddIpRequest: AddIpRequest,
    /**
     * The AddressFamily model constructor.
     * @property {module:model/AddressFamily}
     */
    AddressFamily: AddressFamily,
    /**
     * The AssignIpResponse model constructor.
     * @property {module:model/AssignIpResponse}
     */
    AssignIpResponse: AssignIpResponse,
    /**
     * The AttachStorageDeviceRequest model constructor.
     * @property {module:model/AttachStorageDeviceRequest}
     */
    AttachStorageDeviceRequest: AttachStorageDeviceRequest,
    /**
     * The AvailablePlanListResponse model constructor.
     * @property {module:model/AvailablePlanListResponse}
     */
    AvailablePlanListResponse: AvailablePlanListResponse,
    /**
     * The AvailablePlanListResponsePlans model constructor.
     * @property {module:model/AvailablePlanListResponsePlans}
     */
    AvailablePlanListResponsePlans: AvailablePlanListResponsePlans,
    /**
     * The BackupRule model constructor.
     * @property {module:model/BackupRule}
     */
    BackupRule: BackupRule,
    /**
     * The CloneStorageRequest model constructor.
     * @property {module:model/CloneStorageRequest}
     */
    CloneStorageRequest: CloneStorageRequest,
    /**
     * The ConfigurationListResponse model constructor.
     * @property {module:model/ConfigurationListResponse}
     */
    ConfigurationListResponse: ConfigurationListResponse,
    /**
     * The ConfigurationListResponseServerSizes model constructor.
     * @property {module:model/ConfigurationListResponseServerSizes}
     */
    ConfigurationListResponseServerSizes: ConfigurationListResponseServerSizes,
    /**
     * The CreateBackupStorageRequest model constructor.
     * @property {module:model/CreateBackupStorageRequest}
     */
    CreateBackupStorageRequest: CreateBackupStorageRequest,
    /**
     * The CreateNewTagResponse model constructor.
     * @property {module:model/CreateNewTagResponse}
     */
    CreateNewTagResponse: CreateNewTagResponse,
    /**
     * The CreateServerRequest model constructor.
     * @property {module:model/CreateServerRequest}
     */
    CreateServerRequest: CreateServerRequest,
    /**
     * The CreateServerResponse model constructor.
     * @property {module:model/CreateServerResponse}
     */
    CreateServerResponse: CreateServerResponse,
    /**
     * The CreateStorageRequest model constructor.
     * @property {module:model/CreateStorageRequest}
     */
    CreateStorageRequest: CreateStorageRequest,
    /**
     * The CreateStorageResponse model constructor.
     * @property {module:model/CreateStorageResponse}
     */
    CreateStorageResponse: CreateStorageResponse,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorCode model constructor.
     * @property {module:model/ErrorCode}
     */
    ErrorCode: ErrorCode,
    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError: ErrorError,
    /**
     * The ErrorStatus model constructor.
     * @property {module:model/ErrorStatus}
     */
    ErrorStatus: ErrorStatus,
    /**
     * The FirewallRule model constructor.
     * @property {module:model/FirewallRule}
     */
    FirewallRule: FirewallRule,
    /**
     * The FirewallRuleCreateResponse model constructor.
     * @property {module:model/FirewallRuleCreateResponse}
     */
    FirewallRuleCreateResponse: FirewallRuleCreateResponse,
    /**
     * The FirewallRuleListResponse model constructor.
     * @property {module:model/FirewallRuleListResponse}
     */
    FirewallRuleListResponse: FirewallRuleListResponse,
    /**
     * The FirewallRuleListResponseFirewallRules model constructor.
     * @property {module:model/FirewallRuleListResponseFirewallRules}
     */
    FirewallRuleListResponseFirewallRules: FirewallRuleListResponseFirewallRules,
    /**
     * The FirewallRuleRequest model constructor.
     * @property {module:model/FirewallRuleRequest}
     */
    FirewallRuleRequest: FirewallRuleRequest,
    /**
     * The IpAddress model constructor.
     * @property {module:model/IpAddress}
     */
    IpAddress: IpAddress,
    /**
     * The IpAddressListResponse model constructor.
     * @property {module:model/IpAddressListResponse}
     */
    IpAddressListResponse: IpAddressListResponse,
    /**
     * The IpAddresses model constructor.
     * @property {module:model/IpAddresses}
     */
    IpAddresses: IpAddresses,
    /**
     * The ModifyIpRequest model constructor.
     * @property {module:model/ModifyIpRequest}
     */
    ModifyIpRequest: ModifyIpRequest,
    /**
     * The ModifyStorageRequest model constructor.
     * @property {module:model/ModifyStorageRequest}
     */
    ModifyStorageRequest: ModifyStorageRequest,
    /**
     * The Plan model constructor.
     * @property {module:model/Plan}
     */
    Plan: Plan,
    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price: Price,
    /**
     * The PriceListResponse model constructor.
     * @property {module:model/PriceListResponse}
     */
    PriceListResponse: PriceListResponse,
    /**
     * The PriceListResponsePrices model constructor.
     * @property {module:model/PriceListResponsePrices}
     */
    PriceListResponsePrices: PriceListResponsePrices,
    /**
     * The PriceZone model constructor.
     * @property {module:model/PriceZone}
     */
    PriceZone: PriceZone,
    /**
     * The RestartServer model constructor.
     * @property {module:model/RestartServer}
     */
    RestartServer: RestartServer,
    /**
     * The Server model constructor.
     * @property {module:model/Server}
     */
    Server: Server,
    /**
     * The ServerListResponse model constructor.
     * @property {module:model/ServerListResponse}
     */
    ServerListResponse: ServerListResponse,
    /**
     * The ServerListResponseServers model constructor.
     * @property {module:model/ServerListResponseServers}
     */
    ServerListResponseServers: ServerListResponseServers,
    /**
     * The ServerSize model constructor.
     * @property {module:model/ServerSize}
     */
    ServerSize: ServerSize,
    /**
     * The ServerState model constructor.
     * @property {module:model/ServerState}
     */
    ServerState: ServerState,
    /**
     * The ServerStorageDevices model constructor.
     * @property {module:model/ServerStorageDevices}
     */
    ServerStorageDevices: ServerStorageDevices,
    /**
     * The ServerTags model constructor.
     * @property {module:model/ServerTags}
     */
    ServerTags: ServerTags,
    /**
     * The StopServer model constructor.
     * @property {module:model/StopServer}
     */
    StopServer: StopServer,
    /**
     * The StopServerRequest model constructor.
     * @property {module:model/StopServerRequest}
     */
    StopServerRequest: StopServerRequest,
    /**
     * The Storage model constructor.
     * @property {module:model/Storage}
     */
    Storage: Storage,
    /**
     * The StorageAccessType model constructor.
     * @property {module:model/StorageAccessType}
     */
    StorageAccessType: StorageAccessType,
    /**
     * The StorageBackups model constructor.
     * @property {module:model/StorageBackups}
     */
    StorageBackups: StorageBackups,
    /**
     * The StorageDevice model constructor.
     * @property {module:model/StorageDevice}
     */
    StorageDevice: StorageDevice,
    /**
     * The StorageDeviceDetachRequest model constructor.
     * @property {module:model/StorageDeviceDetachRequest}
     */
    StorageDeviceDetachRequest: StorageDeviceDetachRequest,
    /**
     * The StorageDeviceLoadRequest model constructor.
     * @property {module:model/StorageDeviceLoadRequest}
     */
    StorageDeviceLoadRequest: StorageDeviceLoadRequest,
    /**
     * The StorageServers model constructor.
     * @property {module:model/StorageServers}
     */
    StorageServers: StorageServers,
    /**
     * The StorageState model constructor.
     * @property {module:model/StorageState}
     */
    StorageState: StorageState,
    /**
     * The StorageTier model constructor.
     * @property {module:model/StorageTier}
     */
    StorageTier: StorageTier,
    /**
     * The StorageType model constructor.
     * @property {module:model/StorageType}
     */
    StorageType: StorageType,
    /**
     * The SuccessStoragesResponse model constructor.
     * @property {module:model/SuccessStoragesResponse}
     */
    SuccessStoragesResponse: SuccessStoragesResponse,
    /**
     * The SuccessStoragesResponseStorages model constructor.
     * @property {module:model/SuccessStoragesResponseStorages}
     */
    SuccessStoragesResponseStorages: SuccessStoragesResponseStorages,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The Tag1 model constructor.
     * @property {module:model/Tag1}
     */
    Tag1: Tag1,
    /**
     * The TagListResponse model constructor.
     * @property {module:model/TagListResponse}
     */
    TagListResponse: TagListResponse,
    /**
     * The TagListResponseTags model constructor.
     * @property {module:model/TagListResponseTags}
     */
    TagListResponseTags: TagListResponseTags,
    /**
     * The TagServers model constructor.
     * @property {module:model/TagServers}
     */
    TagServers: TagServers,
    /**
     * The TemplitizeStorageRequest model constructor.
     * @property {module:model/TemplitizeStorageRequest}
     */
    TemplitizeStorageRequest: TemplitizeStorageRequest,
    /**
     * The Timezone model constructor.
     * @property {module:model/Timezone}
     */
    Timezone: Timezone,
    /**
     * The TimezoneListResponse model constructor.
     * @property {module:model/TimezoneListResponse}
     */
    TimezoneListResponse: TimezoneListResponse,
    /**
     * The TimezoneListResponseTimezones model constructor.
     * @property {module:model/TimezoneListResponseTimezones}
     */
    TimezoneListResponseTimezones: TimezoneListResponseTimezones,
    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone: Zone,
    /**
     * The ZoneListResponse model constructor.
     * @property {module:model/ZoneListResponse}
     */
    ZoneListResponse: ZoneListResponse,
    /**
     * The ZoneListResponseZones model constructor.
     * @property {module:model/ZoneListResponseZones}
     */
    ZoneListResponseZones: ZoneListResponseZones,
    /**
     * The AccountApi service constructor.
     * @property {module:api/AccountApi}
     */
    AccountApi: AccountApi,
    /**
     * The FirewallApi service constructor.
     * @property {module:api/FirewallApi}
     */
    FirewallApi: FirewallApi,
    /**
     * The IPAddressApi service constructor.
     * @property {module:api/IPAddressApi}
     */
    IPAddressApi: IPAddressApi,
    /**
     * The PlanApi service constructor.
     * @property {module:api/PlanApi}
     */
    PlanApi: PlanApi,
    /**
     * The PricesApi service constructor.
     * @property {module:api/PricesApi}
     */
    PricesApi: PricesApi,
    /**
     * The ServerApi service constructor.
     * @property {module:api/ServerApi}
     */
    ServerApi: ServerApi,
    /**
     * The StorageApi service constructor.
     * @property {module:api/StorageApi}
     */
    StorageApi: StorageApi,
    /**
     * The TagApi service constructor.
     * @property {module:api/TagApi}
     */
    TagApi: TagApi,
    /**
     * The TimezoneApi service constructor.
     * @property {module:api/TimezoneApi}
     */
    TimezoneApi: TimezoneApi,
    /**
     * The ZoneApi service constructor.
     * @property {module:api/ZoneApi}
     */
    ZoneApi: ZoneApi
  };

  return exports;
}));
