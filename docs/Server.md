# UpcloudApi.Server

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bootOrder** | **String** |  | [optional] 
**coreNumber** | **Number** |  | [optional] 
**firewall** | **String** |  | [optional] 
**host** | **Number** |  | [optional] 
**hostname** | **String** |  | [optional] 
**ipAddresses** | [**ServerIpAddresses**](ServerIpAddresses.md) |  | [optional] 
**license** | **Number** |  | [optional] 
**memoryAmount** | **Number** |  | [optional] 
**nicModel** | **String** |  | [optional] 
**plan** | **String** |  | [optional] 
**planIpv4Bytes** | **Number** |  | [optional] 
**planIpv6Bytes** | **Number** |  | [optional] 
**state** | **String** |  | [optional] 
**storageDevices** | [**ServerStorageDevices**](ServerStorageDevices.md) |  | [optional] 
**tags** | [**ServerTags**](ServerTags.md) |  | [optional] 
**timezone** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**uuid** | **String** |  | [optional] 
**videoModel** | **String** |  | [optional] 
**vnc** | **String** |  | [optional] 
**vncHost** | **String** |  | [optional] 
**vncPassword** | **String** |  | [optional] 
**vncPort** | **String** |  | [optional] 
**zone** | **String** |  | [optional] 


<a name="BootOrderEnum"></a>
## Enum: BootOrderEnum


* `disk` (value: `"disk"`)

* `cdrom` (value: `"cdrom"`)

* `disk,cdrom` (value: `"disk,cdrom"`)

* `cdrom,disk` (value: `"cdrom,disk"`)




<a name="FirewallEnum"></a>
## Enum: FirewallEnum


* `on` (value: `"on"`)

* `off` (value: `"off"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `started` (value: `"started"`)

* `stopped` (value: `"stopped"`)

* `maintenance` (value: `"maintenance"`)

* `error` (value: `"error"`)




<a name="VideoModelEnum"></a>
## Enum: VideoModelEnum


* `vga` (value: `"vga"`)

* `cirrus` (value: `"cirrus"`)




<a name="VncEnum"></a>
## Enum: VncEnum


* `on` (value: `"on"`)

* `off` (value: `"off"`)




