import React from 'react';
import renderer from 'react-test-renderer';

import {withInputLogin} from './with-input-login';

import {noop} from '../../test-data/test-data';

const MockComponent = (props) => {
  return (
    <div {...props} />
  );
};

const MockComponentWrapped = withInputLogin(MockComponent);

it(`withInputLogin is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          sendAuthData={noop}
          clearError={noop}
          authDataHasError={false} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
