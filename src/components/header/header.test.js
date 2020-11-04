import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import {Header} from './header';

import {AuthorizationStatus} from '../../consts';

describe(`Header is rendered correctly`, () => {
  it(`Header with auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={AuthorizationStatus.AUTH}
              userData={{email: `123@mail.ru`}} />
          </BrowserRouter>
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Header with auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={AuthorizationStatus.AUTH}
              userData={{}} />
          </BrowserRouter>
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
