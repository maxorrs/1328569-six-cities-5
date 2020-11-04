import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty';

describe(`FavoritesEmpty is rendered correctly`, () => {
  it(`FavoritesEmpty is rendered correctly`, () => {
    const tree = renderer
      .create(
          <FavoritesEmpty />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
