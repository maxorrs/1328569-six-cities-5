import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withInputLogin} from './with-input-login';

configure({adapter: new Adapter()});

const noop = () => {};

const MockComponent = () => <div />;

const WrappedMockComponent = withInputLogin(MockComponent);

it(`Should correctly input login`, () => {
  const onSendAuthData = jest.fn((data) => data);

  const data = {email: `asd@mail.ru`, password: `123`};

  const wrapper = shallow(
      <WrappedMockComponent
        onSendAuthData={onSendAuthData}
        onClearError={noop}
        authDataHasError={false} />
  );

  const instance = wrapper.instance();

  instance._handleInputChange({target: {name: `email`, value: data.email}});
  instance._handleInputChange({target: {name: `password`, value: data.password}});

  instance._handleFormSubmit({preventDefault: noop});

  expect(onSendAuthData).toHaveBeenCalledTimes(1);
  expect(onSendAuthData).toHaveBeenCalledWith(data);
});
