import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';

import MainPage from '../pages/main-page/main-page-container';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page-container';
import RoomPage from '../pages/room-page/room-page-container';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {withSpinner} from '../../hocs/with-spinner';
import {getLoadAuthStatusSelector} from '../../store/reducers/user/selectors';
import {AppRoute} from '../../consts';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}>
          <MainPage />
        </Route>

        <Route
          exact
          path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesPage />
            );
          }} />

        <Route exact
          path={AppRoute.roomPage()}
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

const mapStateToProp = (state) => ({
  isLoading: getLoadAuthStatusSelector(state)
});

export {App};
export default connect(mapStateToProp)(withSpinner(App));
