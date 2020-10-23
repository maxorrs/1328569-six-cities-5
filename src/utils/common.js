import {SortType} from '../consts';

export const getRatingAsPercentage = (rating) => {
  return `${Math.round(+rating * 100 / 5)}%`;
};

export const getTransformDataOffer = (offer) => {
  const transformOffer = Object.assign(
      {},
      offer,
      {
        features: [
          {
            field: `entire`,
            label: offer.type
          }, {
            field: `bedrooms`,
            label: `${offer.bedrooms} Bedrooms`
          }, {
            field: `adults`,
            label: `Max ${offer.maxGuests} adults`
          }
        ]
      }
  );

  return transformOffer;
};

export const getFavoriteOffers = (offers) => {
  return offers
    .filter(({isBookmarked}) => isBookmarked === `true`);
};

export const getUniqueCities = (offers) => {
  const cities = offers
    .map(({city}) => city)
    .sort();

  const uniqueCities = [...new Set(cities)];

  return uniqueCities;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilteredOffers = (offers, selectedCity, selectedSortType) => {
  const filteredOfferBySelectedCity = offers.filter((offer) => offer.city === selectedCity);

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

