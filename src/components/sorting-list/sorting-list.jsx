import React from 'react';
import PropTypes from 'prop-types';

import {SortingType} from '../../consts';

const SortingList = ({isOpen, currentSortingType, onChangeOption}) => {
  const activeClassSort = isOpen ? `places__options--opened` : ``;

  return (
    <ul className={`places__options places__options--custom places__options ${activeClassSort}`}>
      {
        Object
          .keys(SortingType)
          .map((type, i) => {
            const activeClassOption = currentSortingType === type ? `places__option--active` : ``;
            const label = SortingType[type];

            return (
              <li
                key={`${type}-${i}`}
                className={`places__option ${activeClassOption}`}
                tabIndex="0"
                onClick={() => onChangeOption(type)}>
                {label}
              </li>
            );
          })
      }
    </ul>
  );
};

SortingList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  currentSortingType: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired
};

export default SortingList;
