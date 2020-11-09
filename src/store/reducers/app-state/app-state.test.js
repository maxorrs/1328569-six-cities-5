import {appState, AppStateActionType, AppStateActionCreator} from './app-state';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual({
    selectedCity: `Amsterdam`,
    activeCard: -1,
    isSortMenuOpen: false,
    selectedSortType: `Popular`
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require selected city returns correct action`, () => {
    expect(AppStateActionCreator.changeSelectedCity(`Amsterdam`)).toEqual({
      type: AppStateActionType.CHANGE_SELECTED_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for require reset active card returns correct action`, () => {
    expect(AppStateActionCreator.resetActiveCard()).toEqual({
      type: AppStateActionType.RESET_ACTIVE_CARD
    });
  });

  it(`Action creator for require toggled sort menu returns correct action`, () => {
    expect(AppStateActionCreator.toggledSortMenu()).toEqual({
      type: AppStateActionType.TOGGLE_SORT_MENU
    });
  });

  it(`Action creator for require change selected sort type returns correct action`, () => {
    expect(AppStateActionCreator.changeSelectedSortType(`Top rated first`)).toEqual({
      type: AppStateActionType.CHANGE_SELECTED_SORT_TYPE,
      payload: `Top rated first`
    });
  });

  it(`Action creator for require reset selected sort type returns correct action`, () => {
    expect(AppStateActionCreator.resetSortType()).toEqual({
      type: AppStateActionType.RESET_SORT_TYPE
    });
  });

  it(`Action creator for require close sort menu returns correct action`, () => {
    expect(AppStateActionCreator.closeSortMenu()).toEqual({
      type: AppStateActionType.CLOSE_SORT_MENU
    });
  });

  it(`Action creator for require redirect to route returns correct action`, () => {
    expect(AppStateActionCreator.redirectToRoute(`/`)).toEqual({
      type: AppStateActionType.REDIRECT_TO_ROUTE,
      payload: `/`
    });
  });

});

describe(`Reducer should update is correctly`, () => {
  it(`Reducer should update selected city`, () => {
    expect(appState({
      selectedCity: `Amsterdam`,
    }, {
      type: AppStateActionType.CHANGE_SELECTED_CITY,
      payload: `Paris`
    })).toEqual({
      selectedCity: `Paris`
    });
  });

  it(`Reducer should update active card`, () => {
    expect(appState({
      activeCard: 1
    }, {
      type: AppStateActionType.CHANGE_ACTIVE_CARD,
      payload: 2
    })).toEqual({
      activeCard: 2
    });
  });

  it(`Reducer should reset active card`, () => {
    expect(appState({
      activeCard: 1
    }, {
      type: AppStateActionType.RESET_ACTIVE_CARD
    })).toEqual({
      activeCard: -1
    });
  });

  it(`Reducer should update sort menu`, () => {
    expect(appState({
      isSortMenuOpen: false
    }, {
      type: AppStateActionType.TOGGLE_SORT_MENU
    })).toEqual({
      isSortMenuOpen: true
    });
  });

  it(`Reducer should close sort menu`, () => {
    expect(appState({
      isSortMenuOpen: true
    }, {
      type: AppStateActionType.CLOSE_SORT_MENU
    })).toEqual({
      isSortMenuOpen: false
    });
  });

  it(`Reducer should change selected sort type`, () => {
    expect(appState({
      selectedSortType: `Popular`
    }, {
      type: AppStateActionType.CHANGE_SELECTED_SORT_TYPE,
      payload: `Top rated first`
    })).toEqual({
      selectedSortType: `Top rated first`
    });
  });

  it(`Reducer should reset sort type`, () => {
    expect(appState({
      selectedSortType: `Top rated first`
    }, {
      type: AppStateActionType.RESET_SORT_TYPE
    })).toEqual({
      selectedSortType: `Popular`
    });
  });
});
