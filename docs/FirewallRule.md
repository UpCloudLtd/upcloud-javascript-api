# upcloud.FirewallRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **String** | The direction of network traffic this rule will be applied to. | 
**action** | **String** | Action to take if the rule conditions are met. | 
**position** | **Number** | Add the firewall rule to this position in the server&#39;s firewall list. | [optional] 
**family** | [**AddressFamily**](AddressFamily.md) | if protocol is set The address family of new firewall rule | 
**protocol** | **String** | The protocol this rule will be applied to. | [optional] 
**icmpType** | **String** | The ICMP type. | [optional] 
**destinationAddressStart** | **String** | The destination address range starts from this address. | [optional] 
**destinationAddressEnd** | **String** | The destination address range ends to this address. | [optional] 
**destinationPortStart** | **Number** | The destination port range starts from this port number. | [optional] 
**destinationPortEnd** | **Number** | The destination port range ends to this port number. | [optional] 
**sourceAddressStart** | **String** | The source address range starts from this address. | [optional] 
**sourceAddressEnd** | **String** | The source address range ends to this address. | [optional] 
**sourcePortStart** | **Number** | The source port range starts from this port number. | [optional] 
**sourcePortEnd** | **Number** | The source port range ends to this port number. | [optional] 
**comment** | **String** | Freeform comment string for the rule. | [optional] 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `in` (value: `"in"`)

* `out` (value: `"out"`)




<a name="ActionEnum"></a>
## Enum: ActionEnum


* `accept` (value: `"accept"`)

* `reject` (value: `"reject"`)

* `drop` (value: `"drop"`)




<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)

* `icmp` (value: `"icmp"`)




