import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../header/header';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Footer from '../../footer/footer';

import {fetchFavoritesList} from '../../../store/api-actions';
import Spinner from '../../spinner/spinner';
import {getFavoritesSelector, getStatusFavoritesSelector} from '../../../store/reducers/data/selectors';

class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavorites();
  }

  render() {
    const {statusFavorites, favorites} = this.props;

    if (statusFavorites) {
      return <Spinner />;
    }

    const favoritesCount = favorites.length;
    const classNameEmptyPage = favoritesCount ? `` : `page--favorites-empty`;

    return (
      <div className={`page ${classNameEmptyPage}`}>
        <Header />
        {
          favoritesCount
            ? <Favorites />
            : <FavoritesEmpty />
        }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavoritesSelector(state),
  statusFavorites: getStatusFavoritesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => {
    dispatch(fetchFavoritesList());
  }
});

FavoritesPage.propTypes = {
  favorites: PropTypes.array,
  loadFavorites: PropTypes.func.isRequired,
  statusFavorites: PropTypes.bool.isRequired
};

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
