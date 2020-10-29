import {AuthorizationStatus} from '../../../consts';
import {extend} from '../../../utils/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

export const UserActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
};

export const UserActionCreator = {
  requireAuthorization: (payload) => ({
    type: UserActionType.REQUIRE_AUTHORIZATION,
    payload
  })
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
  }

  return state;
};
