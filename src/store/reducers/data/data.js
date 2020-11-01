import {extend} from '../../../utils/common';

const initialState = {
  offers: [],
  offersNearby: [],
  offer: {},
  favorites: [],
  reviews: [],
  statusOffers: true,
  statusOffer: true,
  statusOffersNearby: true,
  statusFavorites: true,
  statusReviews: true
};

export const DataActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  STATUS_OFFERS: `STATUS_OFFERS`,
  STATUS_OFFER: `STATUS_OFFER`,
  STATUS_OFFERS_NEARBY: `STATUS_OFFERS_NEARBY`,
  STATUS_FAVORITES: `STATUS_FAVORITES`,
  STATUS_REVIEWS: `STATUS_REVIEWS`
};

export const DataActionCreator = {
  loadOffers: (payload) => ({
    type: DataActionType.LOAD_OFFERS,
    payload
  }),
  loadOffersNearby: (payload) => ({
    type: DataActionType.LOAD_OFFERS_NEARBY,
    payload
  }),
  loadOffer: (payload) => ({
    type: DataActionType.LOAD_OFFER,
    payload
  }),
  loadFavorites: (payload) => ({
    type: DataActionType.LOAD_FAVORITES,
    payload
  }),
  loadReviews: (payload) => ({
    type: DataActionType.LOAD_REVIEWS,
    payload
  }),
  toggleStatusOffers: (payload) => ({
    type: DataActionType.STATUS_OFFERS,
    payload
  }),
  toggleStatusOffer: (payload) => ({
    type: DataActionType.STATUS_OFFER,
    payload
  }),
  toggleStatusOffersNearby: (payload) => ({
    type: DataActionType.STATUS_OFFERS_NEARBY,
    payload
  }),
  toggleStatusFavorites: (payload) => ({
    type: DataActionType.STATUS_FAVORITES,
    payload
  }),
  toggleStatusReviews: (payload) => ({
    type: DataActionType.STATUS_REVIEWS,
    payload
  })
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case DataActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case DataActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload
      });

    case DataActionType.LOAD_OFFER:
      return extend(state, {
        offer: action.payload
      });

    case DataActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });

    case DataActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });

    case DataActionType.STATUS_OFFERS:
      return extend(state, {
        statusOffers: action.payload
      });

    case DataActionType.STATUS_OFFER:
      return extend(state, {
        statusOffer: action.payload
      });

    case DataActionType.STATUS_OFFERS_NEARBY:
      return extend(state, {
        statusOffersNearby: action.payload
      });

    case DataActionType.STATUS_FAVORITES:
      return extend(state, {
        statusFavorites: action.payload
      });

    case DataActionType.STATUS_REVIEWS:
      return extend(state, {
        statusReviews: action.payload
      });
  }

  return state;
};
