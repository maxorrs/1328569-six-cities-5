import {DataActionCreator} from './reducers/data/data';
import {UserActionCreator} from './reducers/user/user';
import {AppStateActionCreator} from './reducers/app-state/app-state';
import {AuthorizationStatus} from '../consts';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffers(true));
      dispatch(DataActionCreator.loadOffers(data));
      dispatch(DataActionCreator.toggleStatusOffers(false));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffer(true));
      dispatch(DataActionCreator.loadOffer(data));
      dispatch(DataActionCreator.toggleStatusOffer(false));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(`/login`)
    .then(({data}) => {
      dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(UserActionCreator.setUserData(data));
    })
    .catch((err) => {
      throw err;
    });
};

export const fetchOffersNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffersNearby(true));
      dispatch(DataActionCreator.loadOffersNearby(data));
      dispatch(DataActionCreator.toggleStatusOffersNearby(false));
    })
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusFavorites(true));
      dispatch(DataActionCreator.loadFavorites(data));
      dispatch(DataActionCreator.toggleStatusFavorites(false));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusReviews(true));
      dispatch(DataActionCreator.loadReviews(data));
      dispatch(DataActionCreator.toggleStatusReviews(false));
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(UserActionCreator.checkedData(true));

  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(UserActionCreator.authDataHasError(false));
      dispatch(UserActionCreator.checkedData(false));
      dispatch(UserActionCreator.setUserData(data));
      dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(AppStateActionCreator.redirectToRoute(`/favorites`));
    })
    .catch(() => {
      dispatch(UserActionCreator.authDataHasError(true));
      dispatch(UserActionCreator.checkedData(false));
    });
};

export const changeBookmarkStatus = (id, status) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/${status}`)
    .catch(() => dispatch(AppStateActionCreator.redirectToRoute(`/login`)));
};
