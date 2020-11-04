import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import NearPlaces from './near-places';

import {offers} from '../../test-data/test-data';

describe(`NearPlaces is rendered correctly`, () => {
  it(`Render NearPlaces with data`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <NearPlaces
              offersNearby={offers} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render NearPlaces without data`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <NearPlaces
              offersNearby={[]} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
