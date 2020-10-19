export const ratingInformation = [
  {
    title: `perfect`,
    value: `5`
  },
  {
    title: `good`,
    value: `4`
  },
  {
    title: `not bad`,
    value: `3`
  },
  {
    title: `badly`,
    value: `2`
  },
  {
    title: `terribly`,
    value: `1`
  }
];

export const citiesProps = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const cities = [
  {city: `Paris`, coords: [48.8588, 2.347]},
  {city: `Cologne`, coords: [30, 2]},
  {city: `Brussels`, coords: [60, 1]},
  {city: `Amsterdam`, coords: [52.38333, 4.9]},
  {city: `Hamburg`, coords: [20, 22]},
  {city: `Dusseldorf`, coords: [33, 44]}
];

export const housingTypes = [`Apartment`, `Room`, `House`, `Hotel`];

export const fieldsType = [`entire`, `bedrooms`, `adults`];

export const SortingType = {
  POPULAR: `Popular`,
  LOW: `Price: low to high`,
  HIGH: `Price: high to low`,
  TOP: `Top rated first`
};

export const DEFAULT_SORT_TYPE = `POPULAR`;

export const DEFAULT_LOCATION = `Amsterdam`;

export const CardPlaceClassName = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`
};
