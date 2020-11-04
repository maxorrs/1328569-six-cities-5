import React from 'react';
import renderer from 'react-test-renderer';
import {FavoritesCitiesList} from './favorites-cities-list';
import {offers} from '../../test-data/test-data';

it(`FavoritesCitiesList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <FavoritesCitiesList
          uniqueCities={[`Amsterdam`, `Paris`]}
          favorites={offers}
          selectedCity={`Amsterdam`} />
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
