import React from 'react';
import renderer from 'react-test-renderer';
import CitiesEmpty from './cities-empty';

it(`CitiesEmpty is rendered correctly`, () => {
  const tree = renderer
    .create(
        <CitiesEmpty
          selectedCity={`Amsterdam`} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
