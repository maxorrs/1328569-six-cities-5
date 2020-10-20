import {extend} from '../utils/common';

import offers from '../mocks/offers';

import {SortType} from '../consts';

const DefaultValue = {
  CITY: `Amsterdam`,
  SORT_TYPE: SortType.POPULAR,
  ACTIVE_CARD: `-1`,
  IS_SORT_MENU_OPEN: false
};

const initialState = {
  selectedCity: DefaultValue.CITY,
  activeCard: DefaultValue.ACTIVE_CARD,
  isSortMenuOpen: DefaultValue.IS_SORT_MENU_OPEN,
  selectedSortType: DefaultValue.SORT_TYPE,
  offers
};

export const ActionType = {
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  RESET_ACTIVE_CARD: `RESET_ACTIVE_CARD`,
  TOGGLE_SORT_MENU: `TOGGLE_SORT_MENU`,
  CLOSE_SORT_MENU: `CLOSE_SORT_MENU`,
  CHANGE_SELECTED_SORT_TYPE: `CHANGE_SELECTED_SORT_TYPE`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`
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
    type: ActionType.RESET_ACTIVE_CARD
  }),
  toggledSortMenu: () => ({
    type: ActionType.TOGGLE_SORT_MENU
  }),
  changeSelectedSortType: (payload) => ({
    type: ActionType.CHANGE_SELECTED_SORT_TYPE,
    payload
  }),
  resetSortType: () => ({
    type: ActionType.RESET_SORT_TYPE
  }),
  closeSortMenu: () => ({
    type: ActionType.CLOSE_SORT_MENU
  })
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
        activeCard: DefaultValue.ACTIVE_CARD
      });

    case ActionType.TOGGLE_SORT_MENU:
      return extend(state, {
        isSortMenuOpen: !state.isSortMenuOpen
      });

    case ActionType.CHANGE_SELECTED_SORT_TYPE:
      return extend(state, {
        selectedSortType: action.payload
      });

    case ActionType.RESET_SORT_TYPE:
      return extend(state, {
        selectedSortType: DefaultValue.SORT_TYPE
      });

    case ActionType.CLOSE_SORT_MENU:
      return extend(state, {
        isSortMenuOpen: false
      });
  }

  return state;
};
