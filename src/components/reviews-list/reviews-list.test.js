import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsList from './reviews-list';

import {reviewsMockWithoutAdapt} from '../../test-data/test-data';

describe(`ReviewsList is rendered correctly`, () => {
  it(`ReviewsList is rendered correctly`, () => {

    const tree = renderer
      .create(
          <ReviewsList reviews={reviewsMockWithoutAdapt} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
