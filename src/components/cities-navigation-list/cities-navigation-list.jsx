import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';

import {areEqualBySelectedCity} from '../../utils/memo';
import {AppRoute, cities} from '../../consts';
import {getSelectedCitySelector} from '../../store/reducers/data/selectors';

const CitiesNavigationList = ({onChangeSelectedCity, selectedCity}) => {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, index) => {
          const activeClass = city === selectedCity ? `tabs__item--active` : ``;
          return (
            <li
              key={`${city}-${index}`}
              onClick={() => onChangeSelectedCity(city)}
              className="locations__item">
              <Link
                to={AppRoute.ROOT}
                className={`locations__item-link tabs__item ${activeClass}`}>
                <span>{city}</span>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

CitiesNavigationList.propTypes = {
  onChangeSelectedCity: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCitySelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSelectedCity: (payload) => {
    dispatch(AppStateActionCreator.changeSelectedCity(payload));
    dispatch(AppStateActionCreator.resetSortType());
    dispatch(AppStateActionCreator.closeSortMenu());
  }
});

const CitiesNavigationListMemo = memo(CitiesNavigationList, areEqualBySelectedCity);

export {CitiesNavigationList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNavigationListMemo);
