# upcloud.Server

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bootOrder** | **String** | The storage device boot order. | [optional] 
**coreNumber** | **Number** | The number of CPU cores dedicated to the server. See List server configurations. | [optional] 
**firewall** | **String** | The state of the server firewall rules. | [optional] [default to &#39;on&#39;]
**host** | **Number** |  | [optional] 
**hostname** | **String** | A valid hostname, e.g. host.example.com. The maximum length is 128 characters. | [optional] 
**ipAddresses** | [**IpAddresses**](IpAddresses.md) |  | [optional] 
**license** | **Number** |  | [optional] 
**memoryAmount** | **Number** | The amount of main memory in megabytes. See List server configurations. | [optional] 
**nicModel** | **String** | The model of the server&#39;s network interfaces. | [optional] [default to &#39;e1000&#39;]
**plan** | **String** | The pricing plan used. If a plan is selected, the core_number and  memory_amount must match the plan if they are present. | [optional] [default to &#39;custom&#39;]
**planIpv4Bytes** | **Number** |  | [optional] 
**planIpv6Bytes** | **Number** |  | [optional] 
**state** | [**ServerState**](ServerState.md) |  | [optional] 
**storageDevices** | [**ServerStorageDevices**](ServerStorageDevices.md) |  | [optional] 
**tags** | [**ServerTags**](ServerTags.md) |  | [optional] 
**timezone** | **String** | A timezone identifier, e.g. Europe/Helsinki. See Timezones. | [optional] 
**title** | **String** | A short description. | [optional] 
**uuid** | **String** |  | [optional] 
**videoModel** | **String** | The model of the server&#39;s video interface. | [optional] [default to &#39;vga&#39;]
**vnc** | **String** | The state of the VNC remote access service. | [optional] [default to &#39;off&#39;]
**vncHost** | **String** |  | [optional] 
**vncPassword** | **String** | The VNC remote access password. | [optional] 
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




<a name="VideoModelEnum"></a>
## Enum: VideoModelEnum


* `vga` (value: `"vga"`)

* `cirrus` (value: `"cirrus"`)




<a name="VncEnum"></a>
## Enum: VncEnum


* `on` (value: `"on"`)

* `off` (value: `"off"`)




