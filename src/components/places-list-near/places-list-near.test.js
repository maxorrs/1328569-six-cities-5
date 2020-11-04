import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import PlacesListNear from './places-list-near';

import {offers} from '../../test-data/test-data';

describe(`PlacesListNear is rendered correctly`, () => {
  it(`PlacesListNear is rendered correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlacesListNear offersNearby={offers} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
