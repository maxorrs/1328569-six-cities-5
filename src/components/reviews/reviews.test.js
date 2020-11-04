import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import {ReviewsContainer} from './reviews-container';

import {initialStateMock, noop, reviewsMockWithoutAdapt} from '../../test-data/test-data';
import {AuthorizationStatus} from '../../consts';

describe(`Reviews is rendered correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(initialStateMock);

  it(`Reviews is rendered correctly`, () => {
    const props = {
      authorizationStatus: AuthorizationStatus.AUTH,
      id: 2,
      isLoading: false,
      loadReviews: noop,
      onSendReview: noop,
      reviews: reviewsMockWithoutAdapt
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewsContainer {...props} />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
