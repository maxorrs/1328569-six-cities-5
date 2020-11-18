import {SortType, MAX_COUNT_STARS} from '../consts';

export const getRatingAsPercentage = (rating) => {
  return `${Math.round(rating * 100 / MAX_COUNT_STARS)}%`;
};

export const getFavoriteOffers = (offers) => {
  return offers.filter(({isFavorite}) => isFavorite);
};

export const getUniqueCities = (offers) => {
  const cities = offers
    .map(({city}) => city.name)
    .sort();
  const uniqueCities = [...new Set(cities)];

  return uniqueCities;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterOffers = (offers, selectedCity, selectedSortType) => {
  const filteredOfferBySelectedCity = offers
    .filter((offer) => offer.city.name === selectedCity);

  switch (selectedSortType) {
    case SortType.POPULAR:
      return filteredOfferBySelectedCity;

    case SortType.PRICE_HIGH_TO_LOW:
      return filteredOfferBySelectedCity
        .slice()
        .sort((a, b) => {
          if (+a.price < +b.price) {
            return 1;
          } else if (+a.price > +b.price) {
            return -1;
          } else {
            return 0;
          }
        });

    case SortType.PRICE_LOW_TO_HIGH:
      return filteredOfferBySelectedCity
        .slice()
        .sort((a, b) => {
          if (+a.price > +b.price) {
            return 1;
          } else if (+a.price < +b.price) {
            return -1;
          } else {
            return 0;
          }
        });

    case SortType.TOP_RATED:
      return filteredOfferBySelectedCity
        .slice()
        .sort((a, b) => {
          if (+a.rating < +b.rating) {
            return 1;
          } else if (+a.rating > +b.rating) {
            return -1;
          } else {
            return 0;
          }
        });
  }

  return filteredOfferBySelectedCity;
};

export const capitalizeFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getFavoritesByCity = (favorites, city) => {
  return favorites.filter((offer) => offer.city.name === city);
};
