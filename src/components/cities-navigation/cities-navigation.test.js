import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';

import CitiesNavigation from './cities-navigation';

import {initialStateMock} from '../../test-data/test-data';

describe(`CitiesNavigation is rendered correctly`, () => {
  it(`CitiesNavigation is rendered correctly`, () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock);

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <CitiesNavigation />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
