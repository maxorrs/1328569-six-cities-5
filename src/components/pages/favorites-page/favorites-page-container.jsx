import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FavoritesPage from './favorites-page';

import {fetchFavoritesList} from '../../../store/api-actions';
import {getFavoritesAdaptSelector, getStatusFavoritesSelector} from '../../../store/reducers/data/selectors';
import {offerPropTypes} from '../../../utils/prop-types';

const FavoritesPageContainer = (props) => {
  const {onFavoritesLoad} = props;

  useEffect(() => {
    onFavoritesLoad();
  }, []);

  return <FavoritesPage {...props} />;
};

FavoritesPageContainer.propTypes = {
  favorites: PropTypes.arrayOf(offerPropTypes),
  onFavoritesLoad: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  favorites: getFavoritesAdaptSelector(state),
  isLoading: getStatusFavoritesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoritesLoad: () => {
    dispatch(fetchFavoritesList());
  }
});

export {FavoritesPageContainer};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPageContainer);
