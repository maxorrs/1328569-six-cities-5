import {createSelector} from 'reselect';
import {adaptUserDataToClient} from '../../../utils/adapter';
import {NameSpace} from '../root-reducer';

export const getAuthorizationStatusSelector = (state) => state[NameSpace.USER].authorizationStatus;

export const getAuthDataHasErrorSelector = (state) => state[NameSpace.USER].hasError;

export const getDataCheckedStatusSelector = (state) => state[NameSpace.USER].isDataChecked;

export const getUserDataSelector = (state) => state[NameSpace.USER].userData;

export const getAdaptUserDataSelector = createSelector(
    getUserDataSelector,
    adaptUserDataToClient
);

export const getLoadAuthStatusSelector = (state) => state[NameSpace.USER].isLoadAuthStatus;
