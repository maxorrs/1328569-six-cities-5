import React from 'react';
import renderer from 'react-test-renderer';

import FeaturesList from './features-list';

const featuresMock = [
  {field: `entire`, label: `a`},
  {field: `bedrooms`, label: `b`},
  {field: `adults`, label: `c`}
];

it(`FeaturesList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <FeaturesList
          features={featuresMock} />
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
