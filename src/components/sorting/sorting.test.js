import React from 'react';
import renderer from 'react-test-renderer';

import {Sorting} from './sorting';

const noop = () => {};

const sortTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

describe(`Sorting is rendered correctly`, () => {
  it(`Render Sorting with open menu`, () => {
    const props = {
      selectedSortType: sortTypes.POPULAR,
      isSortMenuOpen: true,
      onChangeSelectedSortType: noop,
      onToggledSortMenu: noop,
      sortTypes
    };

    const tree = renderer
      .create(
          <Sorting {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Sorting with closed menu`, () => {
    const props = {
      selectedSortType: sortTypes.POPULAR,
      isSortMenuOpen: false,
      onChangeSelectedSortType: noop,
      onToggledSortMenu: noop,
      sortTypes
    };

    const tree = renderer
      .create(
          <Sorting {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  Object
    .values(sortTypes)
    .map((type) => {
      it(`Render Sorting with sort type "${type}"`, () => {
        const props = {
          selectedSortType: type,
          isSortMenuOpen: false,
          onChangeSelectedSortType: noop,
          onToggledSortMenu: noop,
          sortTypes
        };

        const tree = renderer
          .create(
              <Sorting {...props} />
          )
          .toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
});
