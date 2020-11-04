import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import PlacesListMain from './places-list-main';

import {offers, noop} from '../../test-data/test-data';

describe(`PlacesListMain is rendered correctly`, () => {
  it(`PlacesListMain is rendered correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlacesListMain
              offers={offers}
              onChangeActiveCard={noop}
              onMouseOutWithCard={noop} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
