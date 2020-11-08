import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignInPage} from './sign-in-page';

configure({adapter: new Adapter()});

const noop = () => {};

it(`SignInPage form submit`, () => {
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <SignInPage
        onSubmit={onSubmit}
        selectedCity={`Amsterdam`}
        onInputChange={noop}
        onFocusClearError={noop}
        onSendAuthData={noop}
        onClearError={noop}
        authDataHasError={false}
        isDataChecked={false} />
  );

  const form = wrapper.find(`.login__form`);

  form.simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

it(`SignInPage input focus`, () => {
  const onFocusClearError = jest.fn();

  const wrapper = shallow(
      <SignInPage
        onSubmit={noop}
        selectedCity={`Amsterdam`}
        onInputChange={noop}
        onFocusClearError={onFocusClearError}
        onSendAuthData={noop}
        onClearError={noop}
        authDataHasError={false}
        isDataChecked={false} />
  );

  const inputs = wrapper.find(`input`);
  const inputsCount = inputs.length;

  inputs.forEach((input) => input.simulate(`focus`));

  expect(onFocusClearError).toHaveBeenCalledTimes(inputsCount);
});

it(`SignInPage input change`, () => {
  const onInputChange = jest.fn();

  const wrapper = shallow(
      <SignInPage
        onSubmit={noop}
        selectedCity={`Amsterdam`}
        onInputChange={onInputChange}
        onFocusClearError={noop}
        onSendAuthData={noop}
        onClearError={noop}
        authDataHasError={false}
        isDataChecked={false} />
  );

  const inputs = wrapper.find(`input`);
  const inputsCount = inputs.length;

  inputs.forEach((input) => input.simulate(`change`));

  expect(onInputChange).toHaveBeenCalledTimes(inputsCount);
});
