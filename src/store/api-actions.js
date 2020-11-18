import {DataActionCreator} from './reducers/data/data';
import {UserActionCreator} from './reducers/user/user';
import {AuthorizationStatus, getApiRoute, getAppRoute} from '../consts';
import browserHistory from '../browser-history';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(getApiRoute.offers())
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffers(true));
      dispatch(DataActionCreator.loadOffers(data));
      dispatch(DataActionCreator.toggleStatusOffers(false));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(getApiRoute.offer(id))
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffer(true));
      dispatch(DataActionCreator.loadOffer(data));
      dispatch(DataActionCreator.toggleStatusOffer(false));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => {
  dispatch(UserActionCreator.loadAuthStatus(true));
  return api.get(getApiRoute.login())
    .then(({data}) => {
      dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(UserActionCreator.setUserData(data));
      dispatch(UserActionCreator.loadAuthStatus(false));
    })
    .catch(() => {
      dispatch(UserActionCreator.loadAuthStatus(false));
    });
};

export const fetchOffersNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(getApiRoute.nearby(id))
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffersNearby(true));
      dispatch(DataActionCreator.loadOffersNearby(data));
      dispatch(DataActionCreator.toggleStatusOffersNearby(false));
    })
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(getApiRoute.favorites())
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusFavorites(true));
      dispatch(DataActionCreator.loadFavorites(data));
      dispatch(DataActionCreator.toggleStatusFavorites(false));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(getApiRoute.reviews(id))
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusReviews(true));
      dispatch(DataActionCreator.loadReviews(data));
      dispatch(DataActionCreator.toggleStatusReviews(false));
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(UserActionCreator.checkedData(true));

  return api.post(getApiRoute.login(), {email, password})
    .then(({data}) => {
      dispatch(UserActionCreator.authDataHasError(false));
      dispatch(UserActionCreator.checkedData(false));
      dispatch(UserActionCreator.setUserData(data));
      dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(UserActionCreator.authDataHasError(true));
      dispatch(UserActionCreator.checkedData(false));
    });
};

export const changeBookmarkStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(getApiRoute.bookmark(id, status))
    .then(() => dispatch(fetchFavoritesList()))
    .catch(() => browserHistory.push(getAppRoute.login()))
);

export const sendReview = (id, {review: comment, rating}) => (dispatch, _getState, api) => {
  dispatch(DataActionCreator.toggleStatusSendReview(true));
  return api.post(getApiRoute.reviews(id), {comment, rating})
    .then(({data}) => {
      dispatch(DataActionCreator.sentReviewHasError(false));
      dispatch(DataActionCreator.loadReviews(data));
      dispatch(DataActionCreator.toggleStatusSendReview(false));
    })
    .catch(() => {
      dispatch(DataActionCreator.sentReviewHasError(true));
      dispatch(DataActionCreator.toggleStatusSendReview(false));
    });
};
