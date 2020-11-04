import React from 'react';
import renderer from 'react-test-renderer';

import {Sorting} from './sorting';

import {noop} from '../../test-data/test-data';
import {SortType} from '../../consts';

describe(`Sorting is rendered correctly`, () => {
  it(`Render Sorting with open menu`, () => {
    const props = {
      selectedSortType: SortType.POPULAR,
      isSortMenuOpen: true,
      onChangeSelectedSortType: noop,
      handleToggledSortMenu: noop
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
      selectedSortType: SortType.POPULAR,
      isSortMenuOpen: false,
      onChangeSelectedSortType: noop,
      handleToggledSortMenu: noop
    };

    const tree = renderer
      .create(
          <Sorting {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  Object
    .values(SortType)
    .map((type) => {
      it(`Render Sorting with sort type "${type}"`, () => {
        const props = {
          selectedSortType: type,
          isSortMenuOpen: false,
          onChangeSelectedSortType: noop,
          handleToggledSortMenu: noop
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
