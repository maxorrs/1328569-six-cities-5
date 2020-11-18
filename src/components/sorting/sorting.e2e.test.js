import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Sorting} from './sorting';

configure({adapter: new Adapter()});

const noop = () => {};

const sortTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

it(`Should open sort menu after click`, () => {
  const onToggledSortMenu = jest.fn();

  const wrapper = shallow(
      <Sorting
        selectedSortType={`Popular`}
        isSortMenuOpen={false}
        onChangeSelectedSortType={noop}
        onToggledSortMenu={onToggledSortMenu}
        sortTypes={sortTypes}
      />
  );

  const openSortButton = wrapper.find(`.places__sorting-type`);

  openSortButton.simulate(`click`);

  expect(onToggledSortMenu).toHaveBeenCalledTimes(1);
});
