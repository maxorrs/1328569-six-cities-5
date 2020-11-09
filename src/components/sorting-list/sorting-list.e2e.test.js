import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SortingList from './sorting-list';

configure({adapter: new Adapter()});

it(`Should change sort type after click`, () => {
  const onChangeSelectedSortType = jest.fn();

  const wrapper = shallow(
      <SortingList
        isSortMenuOpen={false}
        onChangeSelectedSortType={onChangeSelectedSortType}
      />
  );

  const sortButtons = wrapper.find(`li`);
  const sortButtonsCount = sortButtons.length;

  sortButtons.forEach((button) => button.simulate(`click`));
  expect(onChangeSelectedSortType).toHaveBeenCalledTimes(sortButtonsCount);
});
