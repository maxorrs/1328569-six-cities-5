import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CitiesNavigationList} from './cities-navigation-list';

configure({adapter: new Adapter()});

it(`Click on city`, () => {
  const onChangeSelectedCity = jest.fn();

  const wrapper = shallow(
      <CitiesNavigationList
        onChangeSelectedCity={onChangeSelectedCity}
        selectedCity={`Amsterdam`} />
  );

  const buttons = wrapper.find(`.locations__item`);
  const buttonsCount = buttons.length;

  buttons.forEach((button) => button.simulate(`click`));
  expect(onChangeSelectedCity).toHaveBeenCalledTimes(buttonsCount);
});
