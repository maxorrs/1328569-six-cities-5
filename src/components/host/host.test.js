import React from 'react';
import renderer from 'react-test-renderer';
import Host from './host';

describe(`Host is rendered correctly`, () => {
  it(`Host is rendered correctly with pro status`, () => {
    const props = {
      host: {
        isPro: true,
        avatarUrl: `1`,
        name: `A`
      },
      description: `123`
    };

    const tree = renderer
      .create(
          <Host {...props} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Host is rendered correctly without pro status`, () => {
    const props = {
      host: {
        isPro: false,
        avatarUrl: `1`,
        name: `A`
      },
      description: `123`
    };

    const tree = renderer
      .create(
          <Host {...props} />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
