import React from 'react';
import renderer from 'react-test-renderer';

import SortingList from './sorting-list';

import {noop} from '../../test-data/test-data';

describe(`SortingList is rendered correctly`, () => {
  it(`Render SortingList with open menu`, () => {
    const props = {
      isSortMenuOpen: true,
      onChangeSelectedSortType: noop
    };

    const tree = renderer
      .create(
          <SortingList {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render SortingList with close menu`, () => {
    const props = {
      isSortMenuOpen: false,
      onChangeSelectedSortType: noop
    };

    const tree = renderer
      .create(
          <SortingList {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
