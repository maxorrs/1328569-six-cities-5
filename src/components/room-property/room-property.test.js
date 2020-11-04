import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as APIAction from '../../store/api-actions';

import {RoomProperty} from './room-property';
import {AuthorizationStatus} from '../../consts';

import {getOffer, initialStateMock, noop} from '../../test-data/test-data';

const childMock = <div />;

jest.mock(`../../store/api-actions`);
APIAction.fetchReviews = () => (dispatch) => dispatch(jest.fn());

describe(`RoomProperty is rendered correctly`, () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialStateMock);

  it(`RoomProperty is rendered correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <RoomProperty
              offer={getOffer()}
              onToggleBookmark={noop}
              isBookmark={true}
              authorizationStatus={AuthorizationStatus.AUTH}
              toggleBookmarkStatus={noop}>
              {childMock}
            </RoomProperty>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
