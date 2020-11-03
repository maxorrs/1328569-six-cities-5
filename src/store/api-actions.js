import {DataActionCreator} from './reducers/data/data';
import {UserActionCreator} from './reducers/user/user';
import {AppStateActionCreator} from './reducers/app-state/app-state';
import {AuthorizationStatus, APIRoute, AppRoute} from '../consts';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffers(true));
      dispatch(DataActionCreator.loadOffers(data));
      dispatch(DataActionCreator.toggleStatusOffers(false));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.offer(id))
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffer(true));
      dispatch(DataActionCreator.loadOffer(data));
      dispatch(DataActionCreator.toggleStatusOffer(false));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => {
  dispatch(UserActionCreator.loadAuthStatus(true));
  return api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(UserActionCreator.setUserData(data));
      dispatch(UserActionCreator.loadAuthStatus(false));
    })
    .catch((err) => {
      dispatch(UserActionCreator.loadAuthStatus(false));

      throw err;
    });
};

export const fetchOffersNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.nearby(id))
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusOffersNearby(true));
      dispatch(DataActionCreator.loadOffersNearby(data));
      dispatch(DataActionCreator.toggleStatusOffersNearby(false));
    })
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusFavorites(true));
      dispatch(DataActionCreator.loadFavorites(data));
      dispatch(DataActionCreator.toggleStatusFavorites(false));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.reviews(id))
    .then(({data}) => {
      dispatch(DataActionCreator.toggleStatusReviews(true));
      dispatch(DataActionCreator.loadReviews(data));
      dispatch(DataActionCreator.toggleStatusReviews(false));
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(UserActionCreator.checkedData(true));

  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(UserActionCreator.authDataHasError(false));
      dispatch(UserActionCreator.checkedData(false));
      dispatch(UserActionCreator.setUserData(data));
      dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(AppStateActionCreator.redirectToRoute(AppRoute.ROOT));
    })
    .catch(() => {
      dispatch(UserActionCreator.authDataHasError(true));
      dispatch(UserActionCreator.checkedData(false));
    });
};

export const changeBookmarkStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.bookmark(id, status))
    .catch(() => dispatch(AppStateActionCreator.redirectToRoute(AppRoute.LOGIN)))
);

export const sendReview = (id, {review: comment, rating}) => (dispatch, _getState, api) => {
  dispatch(DataActionCreator.toggleStatusSendReview(true));
  return api.post(APIRoute.reviews(id), {comment, rating})
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
