# UpcloudApi.Storage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **String** |  | [optional] 
**backupRule** | [**BackupRule**](BackupRule.md) |  | [optional] 
**backups** | [**StorageBackups**](StorageBackups.md) |  | [optional] 
**license** | **Number** |  | [optional] 
**servers** | [**StorageServers**](StorageServers.md) |  | [optional] 
**size** | **Number** |  | [optional] 
**state** | **String** |  | [optional] 
**tier** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**uuid** | **String** |  | [optional] 
**zone** | **String** |  | [optional] 


<a name="AccessEnum"></a>
## Enum: AccessEnum


* `public` (value: `"public"`)

* `private` (value: `"private"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `online` (value: `"online"`)

* `maintenance` (value: `"maintenance"`)

* `cloning` (value: `"cloning"`)

* `backuping` (value: `"backuping"`)

* `error` (value: `"error"`)




<a name="TierEnum"></a>
## Enum: TierEnum


* `hdd` (value: `"hdd"`)

* `maxiops` (value: `"maxiops"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `normal` (value: `"normal"`)

* `disk` (value: `"disk"`)

* `cdrom` (value: `"cdrom"`)

* `template` (value: `"template"`)

* `backup` (value: `"backup"`)




