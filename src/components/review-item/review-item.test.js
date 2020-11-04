import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item';

import {reviewMock} from '../../test-data/test-data';

describe(`ReviewItem is rendered correctly`, () => {
  it(`ReviewItem is rendered correctly`, () => {
    const tree = renderer
      .create(
          <ReviewItem
            review={reviewMock} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
