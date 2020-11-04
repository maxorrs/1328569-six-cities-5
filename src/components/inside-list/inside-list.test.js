import React from 'react';
import renderer from 'react-test-renderer';

import InsideList from './inside-list';

describe(`InsideList is rendered correctly`, () => {
  it(`InsideList is rendered correctly`, () => {
    const tree = renderer
      .create(
          <InsideList
            goods={[`A`, `B`, `C`]}/>
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
