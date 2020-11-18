import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {user, UserActionType, UserActionCreator} from './user';
import {login, checkAuth} from '../../api-actions';
import {getApiRoute, AuthorizationStatus} from '../../../consts';

const noop = () => {};

const api = createAPI(noop);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    hasError: false,
    isDataChecked: false,
    userData: {},
    isLoadAuthStatus: false
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: UserActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });

  it(`Action creator for auth data has error returns correct action`, () => {
    expect(UserActionCreator.authDataHasError(true)).toEqual({
      type: UserActionType.AUTH_DATA_HAS_ERROR,
      payload: true
    });
  });

  it(`Action creator for checked data returns correct action`, () => {
    expect(UserActionCreator.checkedData(true)).toEqual({
      type: UserActionType.CHECKED_DATA,
      payload: true
    });
  });

  it(`Action creator for set user data returns correct action`, () => {
    expect(UserActionCreator.setUserData({name: `A`})).toEqual({
      type: UserActionType.SET_USER_DATA,
      payload: {name: `A`}
    });
  });

  it(`Action creator for load auth status returns correct action`, () => {
    expect(UserActionCreator.loadAuthStatus(true)).toEqual({
      type: UserActionType.LOAD_AUTH_STATUS,
      payload: true
    });
  });
});

describe(`Reducer should update is correctly`, () => {
  it(`Reducer should update authorizationStatus to auth`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: UserActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`Reducer should update hasError to true`, () => {
    expect(user({
      hasError: false,
    }, {
      type: UserActionType.AUTH_DATA_HAS_ERROR,
      payload: true
    })).toEqual({
      hasError: true
    });
  });

  it(`Reducer should update isDataChecked to true`, () => {
    expect(user({
      isDataChecked: false,
    }, {
      type: UserActionType.CHECKED_DATA,
      payload: true
    })).toEqual({
      isDataChecked: true
    });
  });

  it(`Reducer should update userData`, () => {
    expect(user({
      userData: {},
    }, {
      type: UserActionType.SET_USER_DATA,
      payload: {name: `A`}
    })).toEqual({
      userData: {name: `A`}
    });
  });

  it(`Reducer should update isLoadAuthStatus to true`, () => {
    expect(user({
      isLoadAuthStatus: false,
    }, {
      type: UserActionType.LOAD_AUTH_STATUS,
      payload: true
    })).toEqual({
      isLoadAuthStatus: true
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = checkAuth();

    apiMock
      .onGet(getApiRoute.login())
      .reply(200, {fake: true});

    return checkAuthorization(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.LOAD_AUTH_STATUS,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: UserActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: UserActionType.SET_USER_DATA,
          payload: {fake: true}
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: UserActionType.LOAD_AUTH_STATUS,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /login GET 401`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = checkAuth();

    apiMock
      .onGet(getApiRoute.login())
      .reply(401);

    return checkAuthorization(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.LOAD_AUTH_STATUS,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: UserActionType.LOAD_AUTH_STATUS,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /login POST 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginProcess = login(fakeUser);

    apiMock
      .onPost(getApiRoute.login())
      .reply(200, {fake: true});

    return loginProcess(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.CHECKED_DATA,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: UserActionType.AUTH_DATA_HAS_ERROR,
          payload: false
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: UserActionType.CHECKED_DATA,
          payload: false
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: UserActionType.SET_USER_DATA,
          payload: {fake: true}
        });

        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: UserActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct API call to /login POST 400`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {a: `123456`, b: `test@test.ru`};
    const loginProcess = login(fakeUser);

    apiMock
      .onPost(getApiRoute.login())
      .reply(400);

    return loginProcess(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.CHECKED_DATA,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: UserActionType.AUTH_DATA_HAS_ERROR,
          payload: false
        });

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.CHECKED_DATA,
          payload: false
        });

      });
  });
});
