import React from 'react';
import renderer from 'react-test-renderer';

import ReviewItem from './review-item';

const reviewMock = {
  user: {
    name: `A`,
    avatarUrl: `1`
  },
  comment: `123`,
  rating: 2,
  date: `2020-10-28T11:53:40.137Z`
};

it(`ReviewItem is rendered correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem
          review={reviewMock} />
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
