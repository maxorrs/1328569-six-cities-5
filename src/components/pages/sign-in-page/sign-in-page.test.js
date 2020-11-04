import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {SignInPage} from './sign-in-page';

import {initialStateMock, noop} from '../../../test-data/test-data';

describe(`SignInPage is rendered correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(initialStateMock);

  it(`SignInPage is rendered correctly`, () => {
    const props = {
      authDataHasError: false,
      clearError: noop,
      isDataChecked: false,
      onFocusClearError: noop,
      onInputChange: noop,
      onSubmit: noop,
      selectedCity: `Amsterdam`,
      sendAuthData: noop
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <SignInPage {...props} />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
