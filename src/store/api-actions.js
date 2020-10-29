import {DataActionCreator} from './reducers/data/data';
import {UserActionCreator} from './reducers/user/user';
import {AuthorizationStatus} from '../consts';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(DataActionCreator.loadOffers(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const fetchOffersNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      dispatch(DataActionCreator.loadOffersNearby(data));
    })
);
