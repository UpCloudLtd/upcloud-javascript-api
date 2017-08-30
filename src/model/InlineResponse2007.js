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
import InlineResponse2007FirewallRules from './InlineResponse2007FirewallRules';





/**
* The InlineResponse2007 model module.
* @module model/InlineResponse2007
* @version 1.2.0
*/
export default class InlineResponse2007 {
    /**
    * Constructs a new <code>InlineResponse2007</code>.
    * @alias module:model/InlineResponse2007
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2007} obj Optional instance to populate.
    * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007();

            
            
            

            if (data.hasOwnProperty('firewall_rules')) {
                obj['firewall_rules'] = InlineResponse2007FirewallRules.constructFromObject(data['firewall_rules']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/InlineResponse2007FirewallRules} firewall_rules
    */
    firewall_rules = undefined;








}


