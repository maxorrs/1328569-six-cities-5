export const ratingInformation = [
  {title: `perfect`, value: `5`},
  {title: `good`, value: `4`},
  {title: `not bad`, value: `3`},
  {title: `badly`, value: `2`},
  {title: `terribly`, value: `1`}
];

export const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const housingTypes = [`Apartment`, `Room`, `House`, `Hotel`];

export const fieldsType = [`entire`, `bedrooms`, `adults`];

export const MAX_COUNT_OFFERS_NEARBY = 3;

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const CardPlaceClassName = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`,
  FAVORITES: `favorites`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  roomPage: (id = `:id`) => `/offer/${id}`,
  ROOT: `/`
};

export const APIRoute = {
  LOGIN: `/login`,
  OFFERS: `/hotels`,
  offer: (id) => `/hotels/${id}`,
  nearby: (id) => `/hotels/${id}/nearby`,
  FAVORITES: `/favorite`,
  reviews: (id) => `/comments/${id}`,
  bookmark: (id, status) => `/favorite/${id}/${status}`
};

export const MapSetting = {
  ICON_SIZE: [30, 30],
  ZOOM_CONTROL: false,
  MARKER: true,
  TITLE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};
