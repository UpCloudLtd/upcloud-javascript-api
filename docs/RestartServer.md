# upcloud.RestartServer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stopType** | **String** | Restart type | [optional] [default to &#39;soft&#39;]
**timeout** | **Number** | Stop timeout in seconds | [optional] 
**timeoutAction** | **String** | Action to take if timeout limit is exceeded. | [optional] 


<a name="StopTypeEnum"></a>
## Enum: StopTypeEnum


* `soft` (value: `"soft"`)

* `hard` (value: `"hard"`)




<a name="TimeoutActionEnum"></a>
## Enum: TimeoutActionEnum


* `destroy` (value: `"destroy"`)

* `ignore` (value: `"ignore"`)




