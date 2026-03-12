import africa from './data/africa.json';
import asia from './data/asia.json';
import europe from './data/europe.json';
import northAmerica from './data/north_america.json';
import southAmerica from './data/south_america.json';
import oceania from './data/oceania.json';
import antarctic from './data/antarctic.json';

const countriesData = [
  ...africa,
  ...asia,
  ...europe,
  ...northAmerica,
  ...southAmerica,
  ...oceania,
  ...antarctic
];

export interface Country {
  country: string;
  countryCode: string;
  alpha3: string;
  numeric: string;
  phoneCode: string;
  currency: string;
  capital: string;
  continent: string;
  flag: string;
}

export interface LookupResult extends Partial<Country> {
  isValid: boolean;
}

const countries: Country[] = countriesData as Country[];
const phoneCodeMap = new Map<string, Country>();
const countryCodeMap = new Map<string, Country>();
const nameMap = new Map<string, Country>();
const alpha3Map = new Map<string, Country>();

countries.forEach(c => {
  phoneCodeMap.set(c.phoneCode, c);
  countryCodeMap.set(c.countryCode.toLowerCase(), c);
  nameMap.set(c.country.toLowerCase(), c);
  alpha3Map.set(c.alpha3.toLowerCase(), c);
});

/**
 * Finds a country by its phone code.
 */
export function getByPhoneCode(phoneCode: string): LookupResult {
  const country = phoneCodeMap.get(phoneCode);
  return country ? { isValid: true, ...country } : { isValid: false };
}

/**
 * Finds a country by its ISO 3166-1 alpha-2 country code.
 */
export function getByCountryCode(countryCode: string): LookupResult {
  const country = countryCodeMap.get(countryCode.toLowerCase());
  return country ? { isValid: true, ...country } : { isValid: false };
}

/**
 * Finds a country by its name.
 */
export function getByCountry(country: string): LookupResult {
  const countryData = nameMap.get(country.toLowerCase());
  return countryData ? { isValid: true, ...countryData } : { isValid: false };
}

/**
 * Finds a country by its ISO 3166-1 alpha-3 code.
 */
export function getByAlpha3(alpha3: string): LookupResult {
  const country = alpha3Map.get(alpha3.toLowerCase());
  return country ? { isValid: true, ...country } : { isValid: false };
}

/**
 * Returns the list of all countries.
 */
export function getAllCountries(): Country[] {
  return countries;
}

/**
 * Returns countries filtered by continent.
 */
export function getByContinent(continent: string): Country[] {
  return countries.filter(c => c.continent.toLowerCase() === continent.toLowerCase());
}

/**
 * Returns the total number of countries.
 */
export function getCountryCount(): number {
  return countries.length;
}

/**
 * Returns a unique list of all continents.
 */
export function getContinents(): string[] {
  return [...new Set(countries.map(c => c.continent))].sort();
}

/**
 * Returns the number of countries in a specific continent.
 */
export function getCountryCountByContinent(continent: string): number {
  return getByContinent(continent).length;
}

// Maintaining backward compatibility via a class-wrapped object if needed, 
// but preferring direct exports.
export const CountryUtil = {
  getByPhoneCode,
  getByCountryCode,
  getByCountry,
  getByAlpha3,
  getAllCountries,
  getByContinent,
  getCountryCount,
  getContinents,
  getCountryCountByContinent
};