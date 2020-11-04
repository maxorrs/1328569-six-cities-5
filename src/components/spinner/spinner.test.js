import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './spinner';

describe(`Spinner is rendered correctly`, () => {
  it(`Spinner is rendered correctly`, () => {
    const tree = renderer
      .create(
          <Spinner />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
