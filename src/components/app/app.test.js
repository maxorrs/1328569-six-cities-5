import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as APIAction from '../../store/api-actions';

import {App} from './app';
import {initialStateMock} from '../../test-data/test-data';

jest.mock(`../../store/api-actions`);
APIAction.fetchOffersList = () => (dispatch) => dispatch(jest.fn());

describe(`App is rendered correctly`, () => {
  it(`App is rendered correctly`, () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialStateMock);

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              isLoading={false} />
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
