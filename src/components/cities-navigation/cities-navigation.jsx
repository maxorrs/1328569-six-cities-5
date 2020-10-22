import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/reducer';
import {connect} from 'react-redux';

import CitiesNavigationList from '../cities-navigation-list/cities-navigation-list';

import {areEqualByCitiesListAndSelectedCity} from '../../utils/memo';

const CitiesNavigation = ({onChangeSelectedCity, selectedCity, citiesList}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <CitiesNavigationList
          citiesList={citiesList}
          onChangeSelectedCity={onChangeSelectedCity}
          selectedCity={selectedCity} />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSelectedCity: (payload) => {
    dispatch(ActionCreator.changeSelectedCity(payload));
    dispatch(ActionCreator.resetSortType());
    dispatch(ActionCreator.closeSortMenu());
  }
});

CitiesNavigation.propTypes = {
  citiesList: PropTypes.array.isRequired,
  onChangeSelectedCity: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired
};

const CitiesNavigationMemo = memo(CitiesNavigation, areEqualByCitiesListAndSelectedCity);

export {CitiesNavigationMemo};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNavigationMemo);
