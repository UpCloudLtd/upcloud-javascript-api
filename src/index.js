/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AddressFamily', 'model/AssignIpResponse', 'model/AvailablePlanListResponse', 'model/AvailablePlanListResponsePlans', 'model/BackupRule', 'model/ConfigurationListResponse', 'model/ConfigurationListResponseServerSizes', 'model/CreateNewTagResponse', 'model/CreateStorageResponse', 'model/Error', 'model/ErrorCode', 'model/ErrorError', 'model/ErrorStatus', 'model/FirewallRule', 'model/FirewallRuleDetailsResponse', 'model/FirewallRuleListResponse', 'model/FirewallRuleListResponseFirewallRules', 'model/IpAddress', 'model/IpAddress1', 'model/IpAddressListResponse', 'model/IpAddressListResponseIpAddresses', 'model/Plan', 'model/Price', 'model/PriceListResponse', 'model/PriceListResponsePrice', 'model/PriceZone', 'model/RestartServer', 'model/Server', 'model/ServerListResponse', 'model/ServerListResponseServers', 'model/ServerSize', 'model/ServerState', 'model/ServerStorageDevices', 'model/ServerTags', 'model/StopServer', 'model/Storage', 'model/Storage1', 'model/Storage2', 'model/Storage3', 'model/Storage4', 'model/StorageAccessType', 'model/StorageBackups', 'model/StorageDevice', 'model/StorageDevice1', 'model/StorageServers', 'model/StorageState', 'model/StorageTier', 'model/StorageType', 'model/SuccessStoragesResponse', 'model/SuccessStoragesResponseStorages', 'model/Tag', 'model/Tag1', 'model/TagListResponse', 'model/TagListResponseTags', 'model/TagServers', 'model/Timezone', 'model/TimezoneListResponse', 'model/TimezoneListResponseTimezones', 'model/Zone', 'model/ZoneListResponse', 'model/ZoneListResponseZones', 'api/AccountApi', 'api/FirewallApi', 'api/IPAddressApi', 'api/PlanApi', 'api/PricesApi', 'api/ServerApi', 'api/StorageApi', 'api/TagApi', 'api/TimezoneApi', 'api/ZoneApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AddressFamily'), require('./model/AssignIpResponse'), require('./model/AvailablePlanListResponse'), require('./model/AvailablePlanListResponsePlans'), require('./model/BackupRule'), require('./model/ConfigurationListResponse'), require('./model/ConfigurationListResponseServerSizes'), require('./model/CreateNewTagResponse'), require('./model/CreateStorageResponse'), require('./model/Error'), require('./model/ErrorCode'), require('./model/ErrorError'), require('./model/ErrorStatus'), require('./model/FirewallRule'), require('./model/FirewallRuleDetailsResponse'), require('./model/FirewallRuleListResponse'), require('./model/FirewallRuleListResponseFirewallRules'), require('./model/IpAddress'), require('./model/IpAddress1'), require('./model/IpAddressListResponse'), require('./model/IpAddressListResponseIpAddresses'), require('./model/Plan'), require('./model/Price'), require('./model/PriceListResponse'), require('./model/PriceListResponsePrice'), require('./model/PriceZone'), require('./model/RestartServer'), require('./model/Server'), require('./model/ServerListResponse'), require('./model/ServerListResponseServers'), require('./model/ServerSize'), require('./model/ServerState'), require('./model/ServerStorageDevices'), require('./model/ServerTags'), require('./model/StopServer'), require('./model/Storage'), require('./model/Storage1'), require('./model/Storage2'), require('./model/Storage3'), require('./model/Storage4'), require('./model/StorageAccessType'), require('./model/StorageBackups'), require('./model/StorageDevice'), require('./model/StorageDevice1'), require('./model/StorageServers'), require('./model/StorageState'), require('./model/StorageTier'), require('./model/StorageType'), require('./model/SuccessStoragesResponse'), require('./model/SuccessStoragesResponseStorages'), require('./model/Tag'), require('./model/Tag1'), require('./model/TagListResponse'), require('./model/TagListResponseTags'), require('./model/TagServers'), require('./model/Timezone'), require('./model/TimezoneListResponse'), require('./model/TimezoneListResponseTimezones'), require('./model/Zone'), require('./model/ZoneListResponse'), require('./model/ZoneListResponseZones'), require('./api/AccountApi'), require('./api/FirewallApi'), require('./api/IPAddressApi'), require('./api/PlanApi'), require('./api/PricesApi'), require('./api/ServerApi'), require('./api/StorageApi'), require('./api/TagApi'), require('./api/TimezoneApi'), require('./api/ZoneApi'));
  }
}(function(ApiClient, Account, AddressFamily, AssignIpResponse, AvailablePlanListResponse, AvailablePlanListResponsePlans, BackupRule, ConfigurationListResponse, ConfigurationListResponseServerSizes, CreateNewTagResponse, CreateStorageResponse, Error, ErrorCode, ErrorError, ErrorStatus, FirewallRule, FirewallRuleDetailsResponse, FirewallRuleListResponse, FirewallRuleListResponseFirewallRules, IpAddress, IpAddress1, IpAddressListResponse, IpAddressListResponseIpAddresses, Plan, Price, PriceListResponse, PriceListResponsePrice, PriceZone, RestartServer, Server, ServerListResponse, ServerListResponseServers, ServerSize, ServerState, ServerStorageDevices, ServerTags, StopServer, Storage, Storage1, Storage2, Storage3, Storage4, StorageAccessType, StorageBackups, StorageDevice, StorageDevice1, StorageServers, StorageState, StorageTier, StorageType, SuccessStoragesResponse, SuccessStoragesResponseStorages, Tag, Tag1, TagListResponse, TagListResponseTags, TagServers, Timezone, TimezoneListResponse, TimezoneListResponseTimezones, Zone, ZoneListResponse, ZoneListResponseZones, AccountApi, FirewallApi, IPAddressApi, PlanApi, PricesApi, ServerApi, StorageApi, TagApi, TimezoneApi, ZoneApi) {
  'use strict';

  /**
   * The_UpCloud_API_consists_of_operations_used_to_control_resources_on_UpCloud__The_API_is_a_web_service_interface__HTTPS_is_used_to_connect_to_the_API__The_API_follows_the_principles_of_a_RESTful_web_service_wherever_possible__The_base_URL_for_all_API_operations_is__httpsapi_upcloud_com__All_API_operations_require_authentication_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var UpcloudApi = require('index'); // See note below*.
   * var xxxSvc = new UpcloudApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new UpcloudApi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new UpcloudApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new UpcloudApi.Yyy(); // Construct a model instance.
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
     * The CreateNewTagResponse model constructor.
     * @property {module:model/CreateNewTagResponse}
     */
    CreateNewTagResponse: CreateNewTagResponse,
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
     * The FirewallRuleDetailsResponse model constructor.
     * @property {module:model/FirewallRuleDetailsResponse}
     */
    FirewallRuleDetailsResponse: FirewallRuleDetailsResponse,
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
     * The IpAddress model constructor.
     * @property {module:model/IpAddress}
     */
    IpAddress: IpAddress,
    /**
     * The IpAddress1 model constructor.
     * @property {module:model/IpAddress1}
     */
    IpAddress1: IpAddress1,
    /**
     * The IpAddressListResponse model constructor.
     * @property {module:model/IpAddressListResponse}
     */
    IpAddressListResponse: IpAddressListResponse,
    /**
     * The IpAddressListResponseIpAddresses model constructor.
     * @property {module:model/IpAddressListResponseIpAddresses}
     */
    IpAddressListResponseIpAddresses: IpAddressListResponseIpAddresses,
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
     * The PriceListResponsePrice model constructor.
     * @property {module:model/PriceListResponsePrice}
     */
    PriceListResponsePrice: PriceListResponsePrice,
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
     * The Storage model constructor.
     * @property {module:model/Storage}
     */
    Storage: Storage,
    /**
     * The Storage1 model constructor.
     * @property {module:model/Storage1}
     */
    Storage1: Storage1,
    /**
     * The Storage2 model constructor.
     * @property {module:model/Storage2}
     */
    Storage2: Storage2,
    /**
     * The Storage3 model constructor.
     * @property {module:model/Storage3}
     */
    Storage3: Storage3,
    /**
     * The Storage4 model constructor.
     * @property {module:model/Storage4}
     */
    Storage4: Storage4,
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
     * The StorageDevice1 model constructor.
     * @property {module:model/StorageDevice1}
     */
    StorageDevice1: StorageDevice1,
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
