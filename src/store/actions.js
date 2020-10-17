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
