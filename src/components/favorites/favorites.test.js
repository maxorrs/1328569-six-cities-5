import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Favorites from './favorites';

import {initialStateMock} from '../../test-data/test-data';

describe(`Favorites is rendered correctly`, () => {
  it(`Favorites is rendered correctly`, () => {
    const mockStore = configureStore();
    const store = mockStore(initialStateMock);
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Favorites />
            </BrowserRouter>
          </Provider>
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
