import {extend} from '../utils/common';

import offers from '../mocks/offers';

const DEFAULT_CITY = `Amsterdam`;

const initialState = {
  selectedCity: DEFAULT_CITY,
  activeCard: `-1`,
  offers
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SELECTED_CITY:
      return extend(state, {
        selectedCity: action.payload
      });

    case ActionType.CHANGE_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload
      });

    case ActionType.RESET_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload
      });
  }

  return state;
};

export const ActionType = {
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  RESET_ACTIVE_CARD: `RESET_ACTIVE_CARD`
};

export const ActionCreator = {
  changeSelectedCity: (payload) => ({
    type: ActionType.CHANGE_SELECTED_CITY,
    payload
  }),
  changeActiveCard: (payload) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload
  }),
  resetActiveCard: () => ({
    type: ActionType.RESET_ACTIVE_CARD,
    payload: `-1`
  })
};
