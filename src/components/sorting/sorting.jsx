import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';

import SortingList from '../sorting-list/sorting-list';

import {SortType} from '../../consts';
import {getSortMenuStatusSelector} from '../../store/reducers/app-state/selectors';
import {getSelectedSortTypeSelector} from '../../store/reducers/data/selectors';

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

Sorting.propTypes = {
  selectedSortType: PropTypes.oneOf([...Object.values(SortType)]).isRequired,
  isSortMenuOpen: PropTypes.bool.isRequired,
  onChangeSelectedSortType: PropTypes.func.isRequired,
  handleToggledSortMenu: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  selectedSortType: getSelectedSortTypeSelector(state),
  isSortMenuOpen: getSortMenuStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSelectedSortType: (payload) => {
    dispatch(AppStateActionCreator.changeSelectedSortType(payload));
    dispatch(AppStateActionCreator.toggledSortMenu());
  },
  handleToggledSortMenu: () => dispatch(AppStateActionCreator.toggledSortMenu())
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
