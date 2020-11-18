import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SortingList from './sorting-list';

configure({adapter: new Adapter()});

const sortTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

it(`Should change sort type after click`, () => {
  const onChangeSelectedSortType = jest.fn((type) => type);

  const wrapper = shallow(
      <SortingList
        isSortMenuOpen={false}
        onChangeSelectedSortType={onChangeSelectedSortType}
        sortTypes={sortTypes}
      />
  );

  const sortButtons = wrapper.find(`li`);
  const sortButtonsCount = sortButtons.length;

  sortButtons.forEach((button) => button.simulate(`click`));
  expect(onChangeSelectedSortType).toHaveBeenCalledTimes(sortButtonsCount);

  Object
    .values(sortTypes)
    .forEach((type) => {
      expect(onChangeSelectedSortType).toHaveBeenCalledWith(type);
    });
});
