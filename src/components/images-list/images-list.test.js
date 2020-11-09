import React from 'react';
import renderer from 'react-test-renderer';

import ImagesList from './images-list';

it(`ImagesList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <ImagesList
          images={[`1`, `2`]}/>
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
