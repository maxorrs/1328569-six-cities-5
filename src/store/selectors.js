import {createSelector} from 'reselect';

import {NameSpace} from './reducers/root-reducer';
import {filterOffers, getFavoriteOffers} from '../utils/common';
import {getCityCoords, getOffersCoords} from '../utils/map';
import {adaptToClient} from '../utils/adapter';

export const getOffersSelector = (state) => state[NameSpace.DATA].offers;

export const getOffersAdaptSelector = createSelector(
    getOffersSelector,
    (offers) => offers.map(adaptToClient)
);

export const getActiveCardSelector = (state) => state[NameSpace.APP_STATE].activeCard;

export const getSelectedCitySelector = (state) => state[NameSpace.APP_STATE].selectedCity;

export const getSelectedSortTypeSelector = (state) => state[NameSpace.APP_STATE].selectedSortType;

export const getFilteredOffersSelector = createSelector(
    [getOffersAdaptSelector, getSelectedCitySelector, getSelectedSortTypeSelector],
    filterOffers
);

export const getOffersCoordsSelector = createSelector(
    getFilteredOffersSelector,
    getOffersCoords
);

export const getCityCoordsSelector = createSelector(
    [getOffersSelector, getSelectedCitySelector],
    getCityCoords
);

export const getFavoriteOffersSelector = createSelector(
    getOffersAdaptSelector,
    getFavoriteOffers
);

export const getSortMenuStatusSelector = (state) => state[NameSpace.APP_STATE].isSortMenuOpen;

export const getOffersNearbySelector = (state) => state[NameSpace.DATA].offersNearby;

export const getOffersNearbyAdaptSelector = createSelector(
    getOffersNearbySelector,
    (offers) => offers.map(adaptToClient)
);
