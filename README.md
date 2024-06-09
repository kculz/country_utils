# CountryUtil

A utility class for working with country data, including country codes, phone country codes, and more. This package provides a convenient way to access and work with country-related information in your JavaScript projects.

## Features

- Get a country's name, alpha-2 code, and numeric code
- Look up a country by phone country code or ISO code
- Retrieve a list of all countries with their respective data
- Easily integrate country data into your applications

## Installation

To install the `CountryUtil` package, run the following command in your project's directory:
```
$ npm install @greycode/country_utils
```
## Usage

Here's an example of how to use the `CountryUtil` class in your project:

```javascript
const CountryUtil = require('@greycode/country_utils');

const countryUtil = new CountryUtil();

// Get a country's information using phone code (eg. +1)
const country = countryUtil.usePhoneCode('+1');
console.log(country); // Output: { isValid: true, country: 'United States', countryCode: 'US', phoneCode: '+1' }

// Get a country's information using country alpha-2 code (eg. US)
const country = countryUtil.useCountryCode('US');
console.log(country); // Output: { isValid: true, country: 'United States', countryCode: 'US', phoneCode: '+1' }

// Get a country's information using country alpha2 code (eg. US)
const country = countryUtil.useCountry('United States');
console.log(country); // Output: { isValid: true, country: 'United States', countryCode: 'US', phoneCode: '+1' }

// Get a list of all countries
const allCountries = countryUtil.getAllCountries();
console.log(allCountries);
```

## API
The CountryUtil class provides the following methods:

`usePhoneCode(phoneCode: string)`: Returns the country information for the given phone country code (eg +263).

`useCountryCode(isoCode: string)`: Returns the country information for the given ISO code (alpha-2 eg ZW).

`useCountry(phoneCode: string)`: Looks up a country information by  country name (eg Zimbabwe). 

`getAllCountries()`: Returns an array of all countries with their respective data.



## Contributing
If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/kculz/country_utils.git).

### License
This project is licensed under the `MIT` License.