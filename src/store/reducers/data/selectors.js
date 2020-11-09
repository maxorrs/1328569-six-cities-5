import {createSelector} from 'reselect';

import {NameSpace} from '../root-reducer';
import {filterOffers, getUniqueCities} from '../../../utils/common';
import {getOfferCoords, getOffersCoords} from '../../../utils/map';
import {adaptOfferToClient} from '../../../utils/adapter';
import {MAX_COUNT_OFFERS_NEARBY} from '../../../consts';

export const getSelectedCitySelector = (state) => state[NameSpace.APP_STATE].selectedCity;

export const getSelectedSortTypeSelector = (state) => state[NameSpace.APP_STATE].selectedSortType;

export const getOffersSelector = (state) => state[NameSpace.DATA].offers;

export const getOffersAdaptSelector = createSelector(
    getOffersSelector,
    (offers) => offers.map(adaptOfferToClient)
);

export const getFilteredOffersSelector = createSelector(
    [getOffersAdaptSelector, getSelectedCitySelector, getSelectedSortTypeSelector],
    filterOffers
);

export const getOffersNearbySelector = (state) => state[NameSpace.DATA].offersNearby;

export const getOffersNearbyAdaptSelector = createSelector(
    getOffersNearbySelector,
    (offers) => offers.map(adaptOfferToClient)
);

export const getOfferSelector = (state) => state[NameSpace.DATA].offer;

export const getFavoritesSelector = (state) => state[NameSpace.DATA].favorites;

export const getFavoritesAdaptSelector = createSelector(
    getFavoritesSelector,
    (offers) => offers.map(adaptOfferToClient)
);

export const getUniqueCitiesSelector = createSelector(
    getFavoritesSelector,
    getUniqueCities
);

export const getStatusOfferSelector = (state) => state[NameSpace.DATA].statusOffer;

export const getStatusOffersSelector = (state) => state[NameSpace.DATA].statusOffers;

export const getStatusFavoritesSelector = (state) => state[NameSpace.DATA].statusFavorites;

export const getStatusOffersNearbySelector = (state) => state[NameSpace.DATA].statusOffersNearby;

export const getStatusReviewsSelector = (state) => state[NameSpace.DATA].statusReviews;

export const getReviewsSelector = (state) => state[NameSpace.DATA].reviews;

export const getSentReviewStatusSelector = (state) => state[NameSpace.DATA].sentReviewHasError;

export const getStatusSendReviewSelector = (state) => state[NameSpace.DATA].statusSendReview;

export const getOfferAdaptSelector = createSelector(
    [getOfferSelector, getStatusOfferSelector],
    (offer, status) => {
      if (status) {
        return {};
      }

      return adaptOfferToClient(offer);
    }
);

export const getOffersCoordsSelector = createSelector(
    [getOffersNearbySelector, getStatusOffersNearbySelector, getOfferSelector, getStatusOfferSelector],
    (offersNearby, offersNearbyStatus, offer, offerStatus) => {
      if (offersNearbyStatus || offerStatus) {
        return [];
      }

      const offersNearbyCoords = getOffersCoords(offersNearby)
        .slice(0, MAX_COUNT_OFFERS_NEARBY);
      const offerCoords = getOfferCoords(offer);

      return [...offersNearbyCoords, offerCoords];
    }
);

export const getCityCoordsSelector = createSelector(
    [getOfferSelector, getStatusOfferSelector],
    (offer, offerStatus) => {
      if (offerStatus) {
        return {};
      }

      return {
        city: offer.city.name,
        location: [offer.location.latitude, offer.location.longitude],
        zoom: offer.location.zoom
      };
    }
);
