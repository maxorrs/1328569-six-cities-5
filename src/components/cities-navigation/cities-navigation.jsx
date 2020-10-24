import React, {memo} from 'react';

import CitiesNavigationList from '../cities-navigation-list/cities-navigation-list';

const CitiesNavigation = () => {
  return (
    <div className="tabs">
      <section className="locations container">
        <CitiesNavigationList />
      </section>
    </div>
  );
};

export default memo(CitiesNavigation);
