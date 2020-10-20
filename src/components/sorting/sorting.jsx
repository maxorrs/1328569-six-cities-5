import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/reducer';

import SortingList from '../sorting-list/sorting-list';

import {SortType} from '../../consts';

const Sorting = ({selectedSortType, isSortMenuOpen, onChangeSelectedSortType, handleToggledSortMenu}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => handleToggledSortMenu()}
        className="places__sorting-type"
        tabIndex="0">
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortingList
        isSortMenuOpen={isSortMenuOpen}
        onChangeSelectedSortType={onChangeSelectedSortType}/>
    </form>
  );
};

const mapStateToProps = (state) => ({
  selectedSortType: state.selectedSortType,
  isSortMenuOpen: state.isSortMenuOpen
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSelectedSortType: (payload) => {
    dispatch(ActionCreator.changeSelectedSortType(payload));
    dispatch(ActionCreator.toggledSortMenu());
  },
  handleToggledSortMenu: () => dispatch(ActionCreator.toggledSortMenu())
});

Sorting.propTypes = {
  selectedSortType: PropTypes.oneOf([...Object.values(SortType)]).isRequired,
  isSortMenuOpen: PropTypes.bool.isRequired,
  onChangeSelectedSortType: PropTypes.func.isRequired,
  handleToggledSortMenu: PropTypes.func.isRequired
};

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
