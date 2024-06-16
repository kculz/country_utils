const countries = require('./data/countries.json');

/**
 * Utility class for working with country-related data.
 */
class CountryUtil {
  constructor() {
    this.countries = countries;
  }

  /**
   * Finds a country by its phone code.
   * @param {string} phoneCode - The phone code to search for (e.g., '+1', '+44').
   * @returns {object} An object with the following properties:
   *   - `isValid`: `true` if a country was found, `false` otherwise.
   *   - `country`: The name of the country.
   *   - `countryCode`: The ISO 3166-1 alpha-2 country code.
   *   - `phoneCode`: The phone code of the country.
   */
  getByPhoneCode(phoneCode) {
    const country = this.countries.find(
      (c) => c.phoneCode === phoneCode
    );
    if (country) {
      return {
        isValid: true,
        country: country.country,
        countryCode: country.countryCode,
        phoneCode: country.phoneCode
      };
    } else {
      return {
        isValid: false
      };
    }
  }

  /**
   * Finds a country by its ISO 3166-1 alpha-2 country code.
   * @param {string} countryCode - The country code to search for (e.g., 'US', 'GB').
   * @returns {object} An object with the following properties:
   *   - `isValid`: `true` if a country was found, `false` otherwise.
   *   - `country`: The name of the country.
   *   - `countryCode`: The ISO 3166-1 alpha-2 country code.
   *   - `phoneCode`: The phone code of the country.
   */
  getByCountryCode(countryCode) {
    const country = this.countries.find(
      (c) => c.countryCode.toLowerCase() === countryCode.toLowerCase()
    );
    if (country) {
      return {
        isValid: true,
        country: country.country,
        countryCode: country.countryCode,
        phoneCode: country.phoneCode
      };
    } else {
      return {
        isValid: false
      };
    }
  }

  /**
   * Finds a country by its name.
   * @param {string} country - The name of the country to search for.
   * @returns {object} An object with the following properties:
   *   - `isValid`: `true` if a country was found, `false` otherwise.
   *   - `country`: The name of the country.
   *   - `countryCode`: The ISO 3166-1 alpha-2 country code.
   *   - `phoneCode`: The phone code of the country.
   */
  getByCountry(country) {
    const countryData = this.countries.find(
      (c) => c.country.toLowerCase() === country.toLowerCase()
    );
    if (countryData) {
      return {
        isValid: true,
        country: countryData.country,
        countryCode: countryData.countryCode,
        phoneCode: countryData.phoneCode
      };
    } else {
      return {
        isValid: false
      };
    }
  }

  /**
   * Returns the list of all countries.
   * @returns {object[]} An array of country objects, each with the following properties:
   *   - `country`: The name of the country.
   *   - `countryCode`: The ISO 3166-1 alpha-2 country code.
   *   - `phoneCode`: The phone code of the country.
   */
  getAllCountries() {
    return this.countries;
  }
}

module.exports = CountryUtil;