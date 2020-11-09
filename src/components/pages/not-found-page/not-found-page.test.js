import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import NotFoundPage from './not-found-page';

it(`NotFoundPage is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
