import {createSelector} from 'reselect';

import {NameSpace} from '../root-reducer';
import {filterOffers, getUniqueCities} from '../../../utils/common';
import {adaptOfferToClient} from '../../../utils/adapter';

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
