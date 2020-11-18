import React from 'react';
import renderer from 'react-test-renderer';

import SortingList from './sorting-list';

const noop = () => {};

const sortTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

describe(`SortingList is rendered correctly`, () => {
  it(`Render SortingList with open menu`, () => {
    const props = {
      isSortMenuOpen: true,
      onChangeSelectedSortType: noop,
      sortTypes
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
      onChangeSelectedSortType: noop,
      sortTypes
    };

    const tree = renderer
      .create(
          <SortingList {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
