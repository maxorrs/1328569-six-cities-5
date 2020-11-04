import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import PlacesListFavorite from './places-list-favorite';

import {offersWithoutAdapt} from '../../test-data/test-data';

it(`PlacesListFavorite is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesListFavorite
            favorites={offersWithoutAdapt} />
        </BrowserRouter>
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
