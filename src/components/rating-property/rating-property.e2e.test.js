import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RatingProperty from './rating-property';

configure({adapter: new Adapter()});

const noop = () => {};

it(`RatingPropert change input value`, () => {
  const onInputChange = jest.fn();

  const wrapper = shallow(
      <RatingProperty
        onInputChange={onInputChange}
        onResetReviewError={noop}
        rating={`3`}
        disabledInput={false} />
  );

  const inputs = wrapper.find(`input`);
  const inputsCount = inputs.length;

  inputs.forEach((input) => input.simulate(`change`));

  expect(onInputChange).toHaveBeenCalledTimes(inputsCount);
});

it(`RatingProperty input focus`, () => {
  const onResetReviewError = jest.fn();

  const wrapper = shallow(
      <RatingProperty
        onInputChange={noop}
        onResetReviewError={onResetReviewError}
        rating={`3`}
        disabledInput={false} />
  );

  const inputs = wrapper.find(`input`);
  const inputsCount = inputs.length;

  inputs.forEach((input) => input.simulate(`focus`));

  expect(onResetReviewError).toHaveBeenCalledTimes(inputsCount);
});
