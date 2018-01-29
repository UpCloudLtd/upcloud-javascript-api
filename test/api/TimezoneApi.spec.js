/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

import expect from 'expect.js';
import helpers from '../helpers';
import upcloud from '../../src/index';

var instance;

describe('TimezoneApi', function() {
  beforeEach(function() {
    instance = new upcloud.TimezoneApi();
  });

  describe('listTimezones', function() {
    it('should call listTimezones successfully', async () => {
      // TimezoneListResponse response = api.listTimezones();
      //   List<String> continentals = Arrays.asList(new String[] { "Africa", "America", "Antarctica", "Arctic", "Asia",
      //           "Atlantic", "Australia", "Europe", "Indian", "Pacific" });

      //   List<String> timezones = response.getTimezones().getTimezone();
      //   assertTrue(timezones.stream()
      //           .allMatch(timezone -> continentals.contains(timezone.split("/")[0]) || timezone.equals("UTC")));
      const continentals = [
        'Africa',
        'America',
        'Antarctica',
        'Arctic',
        'Asia',
        'Atlantic',
        'Australia',
        'Europe',
        'Indian',
        'Pacific',
      ];
      const {
        timezones: { timezone: timezones },
      } = await instance.listTimezones();
      expect(
        timezones.every(
          timezone =>
            continentals.includes(timezone.split('/')[0]) || timezone === 'UTC',
        ),
      ).to.be(true);
    });
  });
});
