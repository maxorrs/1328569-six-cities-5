import {AuthorizationStatus} from '../../../consts';
import {extend} from '../../../utils/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  hasError: false,
  isDataChecked: false,
  userData: {}
};

export const UserActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  AUTH_DATA_HAS_ERROR: `AUTH_DATA_HAS_ERROR`,
  CHECKED_DATA: `CHECKED_DATA`,
  SET_USER_DATA: `SET_USER_DATA`
};

export const UserActionCreator = {
  requireAuthorization: (payload) => ({
    type: UserActionType.REQUIRE_AUTHORIZATION,
    payload
  }),
  authDataHasError: (payload) => ({
    type: UserActionType.AUTH_DATA_HAS_ERROR,
    payload
  }),
  checkedData: (payload) => ({
    type: UserActionType.CHECKED_DATA,
    payload
  }),
  setUserData: (payload) => ({
    type: UserActionType.SET_USER_DATA,
    payload
  })
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });

    case UserActionType.AUTH_DATA_HAS_ERROR:
      return extend(state, {
        hasError: action.payload
      });

    case UserActionType.CHECKED_DATA:
      return extend(state, {
        isDataChecked: action.payload
      });

    case UserActionType.SET_USER_DATA:
      return extend(state, {
        userData: action.payload
      });
  }

  return state;
};
