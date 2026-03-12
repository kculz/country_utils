# @greycode/country_utils

[![npm version](https://img.shields.io/npm/v/@greycode/country_utils.svg?style=flat-square)](https://www.npmjs.com/package/@greycode/country_utils)
[![install size](https://img.shields.io/badge/install%20size-24kB-brightgreen?style=flat-square)](https://packagephobia.com/result?p=@greycode/country_utils)
[![license](https://img.shields.io/npm/l/@greycode/country_utils.svg?style=flat-square)](https://github.com/kculz/country_utils/blob/main/LICENSE)

A high-performance, lightweight utility for working with country-related data. Optimized for both **Node.js** and **Browser** environments with full **TypeScript** support.

## 🚀 Features

- **Blazing Fast**: O(1) lookups using optimized Maps.
- **Comprehensive Data**: Includes ~250 countries with ISO codes (Alpha-2, Alpha-3), numeric codes, phone codes, currencies, capitals, continents, and flag emojis.
- **Maintainable Architecture**: Data is modularized by continent for easy updates and smaller bundles.
- **Modern**: Built with ESM and CommonJS support (dual-build).
- **Type-Safe**: Comprehensive TypeScript definitions included.
- **Zero Dependencies**: Pure, lightweight logic.

## 📦 Installation

```bash
npm install @greycode/country_utils
```

## 🛠 Usage

### Modern ESM / TypeScript

```typescript
import { getByCountryCode, getAllCountries, getByPhoneCode } from '@greycode/country_utils';

// Get a country by ISO Alpha-2 code
const code = getByCountryCode('ZW');

if (code.isValid) {
  console.log(code.country);   // Zimbabwe
  console.log(code.phoneCode); // +263
  console.log(code.flag);      // 🇿🇼
}
```

### CommonJS

```javascript
const { CountryUtil } = require('@greycode/country_utils');

const uk = CountryUtil.getByCountryCode('GB');
console.log(uk.capital); // London
```

## 📖 API Reference

### `getByCountryCode(code: string): LookupResult`
Lookup a country by its ISO 3166-1 alpha-2 code. Returns a `LookupResult`.

### `getByAlpha3(code: string): LookupResult`
Lookup a country by its ISO 3166-1 alpha-3 code. Returns a `LookupResult`.

### `getByPhoneCode(code: string): LookupResult`
Lookup a country by its phone dialing code (e.g., `+1` or `+263`).

### `getCountryCount(): number`
Returns the total number of countries in the database.

### `getContinents(): string[]`
Returns a unique, sorted list of all continents.

### `getCountryCountByContinent(continent: string): number`
Returns the count of countries for a given continent.

### `getAllCountries(): Country[]`
Returns the full array of all 250+ country objects.

### `getByContinent(continent: string): Country[]`
Returns all countries belonging to a specific continent (e.g., "Africa", "Europe").

## 💡 Use Cases & Examples

### 🌐 Vanilla HTML/JS (via CDN/Bundler)

If you're using a bundler (Vite, Webpack) or a modern browser with ESM support:

```html
<script type="module">
  import { getAllCountries } from 'https://cdn.jsdelivr.net/npm/@greycode/country_utils/+esm';
  
  const list = getAllCountries();
  console.log(`Loaded ${list.length} countries!`);
</script>
```

### ⚛️ React

A simple country selector component:

```tsx
import React, { useState } from 'react';
import { getAllCountries, Country } from '@greycode/country_utils';

export const CountrySelector = () => {
  const [selected, setSelected] = useState<string>('');
  const countries = getAllCountries();

  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      <option value="">Select a country</option>
      {countries.map((c: Country) => (
        <option key={c.countryCode} value={c.countryCode}>
          {c.flag} {c.country}
        </option>
      ))}
    </select>
  );
};
```

### 🖖 Vue 3

Filtering countries by continent in a composition API component:

```vue
<script setup>
import { getByContinent } from '@greycode/country_utils';
import { computed } from 'vue';

const africanCountries = computed(() => getByContinent('Africa'));
</script>

<template>
  <ul>
    <li v-for="c in africanCountries" :key="c.countryCode">
      {{ c.flag }} {{ c.country }} ({{ c.phoneCode }})
    </li>
  </ul>
</template>
```

### ⏭️ Next.js (App Router)

Using analytic functions in a Server Component:

```tsx
import { getCountryCount, getContinents } from '@greycode/country_utils';

export default function Dashboard() {
  const total = getCountryCount();
  const continents = getContinents();

  return (
    <div>
      <h1>Global Stats</h1>
      <p>Tracking {total} countries across {continents.length} continents.</p>
    </div>
  );
}
```

## 📂 Data Structure

The package now uses a modular data structure located in `src/data/`. Each continent has its own JSON file:
- `africa.json`
- `asia.json`
- `europe.json`
- `north_america.json`
- `south_america.json`
- `oceania.json`
- `antarctic.json`

This makes it easier to keep the data updated and allows for better maintenance.

```typescript
interface Country {
  country: string;
  countryCode: string; // ISO Alpha-2
  alpha3: string;      // ISO Alpha-3
  numeric: string;
  phoneCode: string;
  currency: string;
  capital: string;
  continent: string;
  flag: string;        // Emoji flag
}
```

## 🧪 Testing

This package is fully tested with Vitest.

```bash
npm test
```

## 📄 License

MIT © [Kudzai Munyama](https://github.com/kculz)