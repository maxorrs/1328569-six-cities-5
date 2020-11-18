import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {CitiesNavigationList} from './cities-navigation-list';

const noop = () => {};

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

it(`CitiesNavigationList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <CitiesNavigationList
            onChangeSelectedCity={noop}
            selectedCity={`Amsterdam`}
            cities={cities} />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
