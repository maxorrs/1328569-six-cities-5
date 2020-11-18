import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';

import SortingList from '../sorting-list/sorting-list';

import {SortType as SortTypeForPropTypes} from '../../consts';
import {getSortMenuStatusSelector, getSortTypesSelector} from '../../store/reducers/app-state/selectors';
import {getSelectedSortTypeSelector} from '../../store/reducers/data/selectors';

const Sorting = ({selectedSortType, isSortMenuOpen, onChangeSelectedSortType, onToggledSortMenu, sortTypes}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => onToggledSortMenu()}
        className="places__sorting-type"
        tabIndex="0">
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortingList
        isSortMenuOpen={isSortMenuOpen}
        onChangeSelectedSortType={onChangeSelectedSortType}
        sortTypes={sortTypes}/>
    </form>
  );
};

Sorting.propTypes = {
  selectedSortType: PropTypes.oneOf([...Object.values(SortTypeForPropTypes)]).isRequired,
  isSortMenuOpen: PropTypes.bool.isRequired,
  onChangeSelectedSortType: PropTypes.func.isRequired,
  onToggledSortMenu: PropTypes.func.isRequired,
  sortTypes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  selectedSortType: getSelectedSortTypeSelector(state),
  isSortMenuOpen: getSortMenuStatusSelector(state),
  sortTypes: getSortTypesSelector()
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSelectedSortType: (payload) => {
    dispatch(AppStateActionCreator.changeSelectedSortType(payload));
    dispatch(AppStateActionCreator.toggledSortMenu());
  },
  onToggledSortMenu: () => dispatch(AppStateActionCreator.toggledSortMenu())
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
