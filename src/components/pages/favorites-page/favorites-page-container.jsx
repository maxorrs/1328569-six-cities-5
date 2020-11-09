import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FavoritesPage from './favorites-page';

import {fetchFavoritesList} from '../../../store/api-actions';
import {getFavoritesSelector, getStatusFavoritesSelector} from '../../../store/reducers/data/selectors';

const FavoritesPageContainer = (props) => {
  const {loadFavorites} = props;

  useEffect(() => {
    loadFavorites();
  }, []);

  return <FavoritesPage {...props} />;
};

FavoritesPageContainer.propTypes = {
  favorites: PropTypes.array,
  loadFavorites: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  favorites: getFavoritesSelector(state),
  isLoading: getStatusFavoritesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => {
    dispatch(fetchFavoritesList());
  }
});

export {FavoritesPageContainer};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPageContainer);
