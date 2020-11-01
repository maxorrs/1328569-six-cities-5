import {createSelector} from 'reselect';

import {getSelectedCitySelector, getOffersSelector, getFilteredOffersSelector} from '../data/selectors';

import {NameSpace} from '../../reducers/root-reducer';
import {getCityCoords, getOffersCoords} from '../../../utils/map';

export const getActiveCardSelector = (state) => state[NameSpace.APP_STATE].activeCard;

export const getOffersCoordsSelector = createSelector(
    getFilteredOffersSelector,
    getOffersCoords
);

export const getCityCoordsSelector = createSelector(
    [getOffersSelector, getSelectedCitySelector],
    getCityCoords
);

export const getSortMenuStatusSelector = (state) => state[NameSpace.APP_STATE].isSortMenuOpen;
