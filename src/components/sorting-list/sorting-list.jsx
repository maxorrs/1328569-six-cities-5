import React from 'react';
import PropTypes from 'prop-types';

import {SortType} from '../../consts';

const SortingList = ({isSortMenuOpen, onChangeSelectedSortType}) => {
  const openSortMenuClassName = isSortMenuOpen ? `places__options--opened` : ``;

  return (
    <ul className={`places__options places__options--custom places__options ${openSortMenuClassName}`}>
      {
        Object
          .values(SortType)
          .map((type) => {
            return (
              <li
                key={type}
                onClick={() => onChangeSelectedSortType(type)}
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

SortingList.propTypes = {
  isSortMenuOpen: PropTypes.bool.isRequired,
  onChangeSelectedSortType: PropTypes.func.isRequired
};

export default SortingList;
