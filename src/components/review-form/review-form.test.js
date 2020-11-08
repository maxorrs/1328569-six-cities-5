import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form';

const noop = () => {};

describe(`ReviewForm is rendered correctly`, () => {
  it(`ReviewForm is rendered correctly`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            review={`Abc`}
            rating={`2`}
            onInputChange={noop}
            onSubmit={noop}
            sentReviewHasError={false}
            statusSendReview={false}
            onResetReviewError={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm is rendered correctly with error`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            review={`Abc`}
            rating={`2`}
            onInputChange={noop}
            onSubmit={noop}
            sentReviewHasError={true}
            statusSendReview={false}
            onResetReviewError={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm is rendered correctly with loading`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            review={`Abc`}
            rating={`2`}
            onInputChange={noop}
            onSubmit={noop}
            sentReviewHasError={false}
            statusSendReview={true}
            onResetReviewError={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
