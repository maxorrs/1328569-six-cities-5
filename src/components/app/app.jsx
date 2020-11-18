import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';
import {compose} from 'redux';

import MainPage from '../pages/main-page/main-page-container';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page-container';
import RoomPage from '../pages/room-page/room-page-container';
import NotFoundPage from '../pages/not-found-page/not-found-page';

import {withSpinner} from '../../hocs/with-spinner/with-spinner';
import {withPrivateRoute} from '../../hocs/with-private-route/with-private-route';
import {getAuthorizationStatusSelector, getLoadAuthStatusSelector} from '../../store/reducers/user/selectors';
import {getAppRoute, AuthorizationStatus} from '../../consts';

const App = ({isAuth}) => {
  const SignInPagePrivate = withPrivateRoute(SignInPage, !isAuth);
  const FavoritesPagePrivate = withPrivateRoute(FavoritesPage, isAuth, getAppRoute.login());

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={getAppRoute.root()}>
          <MainPage />
        </Route>

        <Route
          exact
          path={getAppRoute.login()}>
          <SignInPagePrivate />
        </Route>

        <Route
          exact
          path={getAppRoute.favorites()}>
          <FavoritesPagePrivate />
        </Route>

        <Route exact
          path={getAppRoute.roomPage()}
          render={({match}) => {
            const {id: idMatch} = match.params;
            return <RoomPage idMatch={idMatch} />;
          }} />

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProp = (state) => ({
  isLoading: getLoadAuthStatusSelector(state),
  isAuth: getAuthorizationStatusSelector(state) === AuthorizationStatus.AUTH
});

export {App};
export default compose(
    connect(mapStateToProp),
    withSpinner
)(App);
