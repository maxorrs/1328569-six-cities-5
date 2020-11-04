import React from 'react';
import renderer from 'react-test-renderer';

import TextareaReview from './textarea-review';

import {noop} from '../../test-data/test-data';

describe(`TextareaReview is rendered correctly`, () => {
  it(`TextareaReview is rendered correctly with disabled input`, () => {
    const tree = renderer
      .create(
          <TextareaReview
            review={`123`}
            onInputChange={noop}
            disabledInput={true}
            onResetReviewError={noop} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`TextareaReview is rendered correctly without disabled input`, () => {
    const tree = renderer
      .create(
          <TextareaReview
            review={`123`}
            onInputChange={noop}
            disabledInput={false}
            onResetReviewError={noop} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
