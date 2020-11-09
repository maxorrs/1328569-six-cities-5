import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Sorting} from './sorting';

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should open sort menu after click`, () => {
  const onToggledSortMenu = jest.fn();

  const wrapper = shallow(
      <Sorting
        selectedSortType={`Popular`}
        isSortMenuOpen={false}
        onChangeSelectedSortType={noop}
        onToggledSortMenu={onToggledSortMenu}
      />
  );

  const openSortButton = wrapper.find(`.places__sorting-type`);

  openSortButton.simulate(`click`);

  expect(onToggledSortMenu).toHaveBeenCalledTimes(1);
});
