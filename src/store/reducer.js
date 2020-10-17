import {extend} from '../utils/common';
import {ActionType} from './actions';

import offers from '../mocks/offers';

const DEFAULT_CITY = `Amsterdam`;

const initialState = {
  selectedCity: DEFAULT_CITY,
  activeCard: `-1`,
  offers
};

const reducer = (state = initialState, action) => {
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

export {reducer};
