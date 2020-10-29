import {extend} from '../../../utils/common';

const initialState = {
  offers: [],
  offersNearby: []
};

export const DataActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`
};

export const DataActionCreator = {
  loadOffers: (payload) => ({
    type: DataActionType.LOAD_OFFERS,
    payload
  }),
  loadOffersNearby: (payload) => ({
    type: DataActionType.LOAD_OFFERS_NEARBY,
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
  }

  return state;
};
