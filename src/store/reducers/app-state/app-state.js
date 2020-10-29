import {extend} from '../../../utils/common';
import {SortType} from '../../../consts';

const DefaultValue = {
  CITY: `Amsterdam`,
  SORT_TYPE: SortType.POPULAR,
  ACTIVE_CARD: -1,
  IS_SORT_MENU_OPEN: false
};

const initialState = {
  selectedCity: DefaultValue.CITY,
  activeCard: DefaultValue.ACTIVE_CARD,
  isSortMenuOpen: DefaultValue.IS_SORT_MENU_OPEN,
  selectedSortType: DefaultValue.SORT_TYPE
};

export const AppStateActionType = {
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  RESET_ACTIVE_CARD: `RESET_ACTIVE_CARD`,
  TOGGLE_SORT_MENU: `TOGGLE_SORT_MENU`,
  CLOSE_SORT_MENU: `CLOSE_SORT_MENU`,
  CHANGE_SELECTED_SORT_TYPE: `CHANGE_SELECTED_SORT_TYPE`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`
};

export const AppStateActionCreator = {
  changeSelectedCity: (payload) => ({
    type: AppStateActionType.CHANGE_SELECTED_CITY,
    payload
  }),
  changeActiveCard: (payload) => ({
    type: AppStateActionType.CHANGE_ACTIVE_CARD,
    payload
  }),
  resetActiveCard: () => ({
    type: AppStateActionType.RESET_ACTIVE_CARD
  }),
  toggledSortMenu: () => ({
    type: AppStateActionType.TOGGLE_SORT_MENU
  }),
  changeSelectedSortType: (payload) => ({
    type: AppStateActionType.CHANGE_SELECTED_SORT_TYPE,
    payload
  }),
  resetSortType: () => ({
    type: AppStateActionType.RESET_SORT_TYPE
  }),
  closeSortMenu: () => ({
    type: AppStateActionType.CLOSE_SORT_MENU
  })
};

export const appState = (state = initialState, action) => {
  switch (action.type) {
    case AppStateActionType.CHANGE_SELECTED_CITY:
      return extend(state, {
        selectedCity: action.payload
      });

    case AppStateActionType.CHANGE_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload
      });

    case AppStateActionType.RESET_ACTIVE_CARD:
      return extend(state, {
        activeCard: DefaultValue.ACTIVE_CARD
      });

    case AppStateActionType.TOGGLE_SORT_MENU:
      return extend(state, {
        isSortMenuOpen: !state.isSortMenuOpen
      });

    case AppStateActionType.CHANGE_SELECTED_SORT_TYPE:
      return extend(state, {
        selectedSortType: action.payload
      });

    case AppStateActionType.RESET_SORT_TYPE:
      return extend(state, {
        selectedSortType: DefaultValue.SORT_TYPE
      });

    case AppStateActionType.CLOSE_SORT_MENU:
      return extend(state, {
        isSortMenuOpen: false
      });
  }

  return state;
};
