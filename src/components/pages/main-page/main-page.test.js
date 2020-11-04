import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MainPageContainer} from './main-page-container';

import {noop, offers, initialStateMock, cityCoordsMock, offersCoordsMock} from '../../../test-data/test-data';

describe(`MainPageContainer is rendered correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(initialStateMock);

  it(`MainPageContainer is rendered correctly`, () => {
    const props = {
      activeCard: -1,
      cityCoords: cityCoordsMock,
      offersCoords: offersCoordsMock,
      selectedCity: `Amsterdam`,
      onChangeActiveCard: noop,
      onResetActiveCard: noop,
      filteredOffers: offers,
      getOffers: noop,
      isLoading: false
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <MainPageContainer {...props} />
            </BrowserRouter>
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
