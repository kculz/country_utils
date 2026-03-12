import { describe, it, expect } from 'vitest';
import { getAllCountries, getByPhoneCode, getByCountryCode, getByCountry, getByAlpha3, getByContinent } from '../src/country_utils';


describe('CountryUtil', () => {
  it('should return all countries', () => {
    const countries = getAllCountries();
    expect(countries.length).toBeGreaterThan(200);
    expect(countries.find(c => c.country === 'Zimbabwe')).toBeDefined();
    expect(countries.find(c => c.country === 'Afghanistan')).toBeDefined();
  });

  it('should find country by phone code', () => {
    const result = getByPhoneCode('+263');
    expect(result.isValid).toBe(true);
    expect(result.country).toBe('Zimbabwe');
  });

  it('should find country by country code (case insensitive)', () => {
    const result = getByCountryCode('zw');
    expect(result.isValid).toBe(true);
    expect(result.country).toBe('Zimbabwe');
  });

  it('should find country by name (case insensitive)', () => {
    const result = getByCountry('zimbabwe');
    expect(result.isValid).toBe(true);
    expect(result.countryCode).toBe('ZW');
  });

  it('should find country by alpha3 code', () => {
    const result = getByAlpha3('ZWE');
    expect(result.isValid).toBe(true);
    expect(result.country).toBe('Zimbabwe');
  });

  it('should filter by continent', () => {
    const africa = getByContinent('Africa');
    expect(africa.length).toBeGreaterThan(0);
    expect(africa.every(c => c.continent === 'Africa')).toBe(true);
  });

  it('should return invalid for non-existent code', () => {
    const result = getByCountryCode('XX');
    expect(result.isValid).toBe(false);
  });

  it('should return the correct country count', () => {
    expect(getAllCountries().length).toBe(250);
  });

  it('should return unique continents', () => {
    const continents = [
      'Africa', 'Antarctic', 'Asia', 'Europe', 
      'North America', 'Oceania', 'South America'
    ];
    // We expect 7 continents based on our split files
    const result = [
      ...new Set(getAllCountries().map(c => c.continent))
    ].sort();
    expect(result.length).toBe(7);
    expect(result).toEqual(continents);
  });

  it('should return correct count by continent', () => {
    const africaCount = getAllCountries().filter(c => c.continent === 'Africa').length;
    expect(africaCount).toBe(59);
  });
});
