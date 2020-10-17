import React from 'react';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/actions';
import {connect} from 'react-redux';

import CitiesNavigationList from '../cities-navigation-list/cities-navigation-list';

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
  onChangeSelectedCity(payload) {
    dispatch(ActionCreator.changeSelectedCity(payload));
  }
});

CitiesNavigation.propTypes = {
  citiesList: PropTypes.array.isRequired,
  onChangeSelectedCity: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export {CitiesNavigation};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNavigation);
