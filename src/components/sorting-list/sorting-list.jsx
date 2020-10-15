import React from 'react';

import {SortingType} from '../../consts';

const SortingList = () => {
  return (
    <ul className="places__options places__options--custom places__options">
      {
        Object
          .keys(SortingType)
          .map((type) => {
            return (
              <li
                key={type}
                className={`places__option`}
                tabIndex="0">
                {type}
              </li>
            );
          })
      }
    </ul>
  );
};

export default SortingList;
