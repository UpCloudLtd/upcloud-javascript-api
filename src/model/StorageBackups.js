/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The StorageBackups model module.
* @module model/StorageBackups
* @version 1.2.0
*/
export default class StorageBackups {
    /**
    * Constructs a new <code>StorageBackups</code>.
    * @alias module:model/StorageBackups
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>StorageBackups</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StorageBackups} obj Optional instance to populate.
    * @return {module:model/StorageBackups} The populated <code>StorageBackups</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageBackups();

            
            
            

            if (data.hasOwnProperty('backup')) {
                obj['backup'] = ApiClient.convertToType(data['backup'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} backup
    */
    backup = undefined;








}


