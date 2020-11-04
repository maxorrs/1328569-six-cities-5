import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {CitiesNavigationList} from './cities-navigation-list';
import {noop} from '../../test-data/test-data';

describe(`CitiesNavigationList is rendered correctly`, () => {
  it(`CitiesNavigationList is rendered correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <CitiesNavigationList
              onChangeSelectedCity={noop}
              selectedCity={`Amsterdam`} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
