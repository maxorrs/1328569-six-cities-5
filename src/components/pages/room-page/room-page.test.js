import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import * as APIAction from '../../../store/api-actions';

import {RoomPageContainer} from './room-page-container';

import {getOffer, noop, offers, initialStateMock, offersCoordsMock, cityCoordsMock} from '../../../test-data/test-data';

jest.mock(`../../../store/api-actions`);
APIAction.fetchReviews = () => (dispatch) => dispatch(jest.fn());

describe(`RoomPageContainer is rendered correctly`, () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialStateMock);

  it(`RoomPageContainer is rendered correctly`, () => {
    const props = {
      idMatch: `2`,
      isLoading: false,
      loadOffer: noop,
      loadOffersNearby: noop,
      offer: getOffer(),
      offersNearby: offers,
      offersCoords: offersCoordsMock,
      cityCoords: cityCoordsMock
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <RoomPageContainer {...props} />
            </BrowserRouter>
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
