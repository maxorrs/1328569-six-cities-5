import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const Setting = {
  OFFERS_COUNT: 123
};

ReactDOM.render(
    <App
      offersCount={Setting.OFFERS_COUNT}
    />,
    document.getElementById(`root`)
);
