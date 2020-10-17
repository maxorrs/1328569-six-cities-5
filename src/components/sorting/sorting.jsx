import React from 'react';

import SortingList from '../sorting-list/sorting-list';

import {SortingType} from '../../consts';


const Sorting = () => {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0">
        {SortingType.POPULAR}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortingList />
    </form>
  );
};

export default Sorting;
