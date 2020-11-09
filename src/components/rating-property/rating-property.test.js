import React from 'react';
import renderer from 'react-test-renderer';

import RatingProperty from './rating-property';

const noop = () => {};

describe(`RatingProperty is rendered correctly`, () => {
  it(`RatingProperty is rendered with disabled input`, () => {
    const tree = renderer
      .create(
          <RatingProperty
            onInputChange={noop}
            onResetReviewError={noop}
            rating={`4`}
            disabledInput={true} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`RatingProperty is rendered without disabled input`, () => {
    const tree = renderer
      .create(
          <RatingProperty
            onInputChange={noop}
            onResetReviewError={noop}
            rating={`4`}
            disabledInput={false} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
