import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

import {offersCoordsMock, cityCoordsMock} from '../../test-data/test-data';

describe(`Map is rendered correctly`, () => {
  it(`Map is rendered correctly`, () => {
    const tree = renderer
      .create(
          <Map
            offersCoords={offersCoordsMock}
            activeCard={2}
            selectedCity={`Amsterdam`}
            cityCoords={cityCoordsMock} />, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
