import React from 'react';
import renderer from 'react-test-renderer';
import FeaturesList from './features-list';

import {featuresMock} from '../../test-data/test-data';

describe(`FeaturesList is rendered correctly`, () => {
  it(`FeaturesList is rendered correctly`, () => {
    const tree = renderer
      .create(
          <FeaturesList
            features={featuresMock} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
