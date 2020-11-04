import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {FavoritesPageContainer} from './favorites-page-container';

import {noop, initialStateMock, offersWithoutAdapt} from '../../../test-data/test-data';

describe(`FavoritePageContainer is rendered correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(initialStateMock);

  it(`FavoritePageContainer is rendered correctly`, () => {
    const props = {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/8.jpg`,
      email: `sad@a.ru`,
      id: 1,
      isPro: false,
      name: `sad`,
      loadFavorites: noop,
      favorites: offersWithoutAdapt,
      isLoading: false
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <FavoritesPageContainer {...props} />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
