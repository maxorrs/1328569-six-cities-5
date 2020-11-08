import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

const offersCoordsMock = [
  {id: 76, location: [52.37554, 4.9019759999999994], zoom: 16},
  {id: 77, location: [52.37554, 4.9019759999999994], zoom: 16},
  {id: 78, location: [52.37554, 4.9019759999999994], zoom: 16}
];

const cityCoordsMock = {
  city: `Amsterdam`,
  location: [52.385540000000006, 4.902976],
  zoom: 16
};

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
