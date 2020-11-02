import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {withSpinner} from '../../hocs/with-spinner';
import {checkAuth} from '../../store/api-actions';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/login'>
          <SignInPage />
        </Route>
        <PrivateRoute
          exact
          path='/favorites'
          render={() => {
            return (
              <FavoritesPage />
            );
          }} />
        <Route exact
          path='/offer/:id'
          render={({match}) => {
            const {id: idMatch} = match.params;
            return <RoomPage idMatch={idMatch} />;
          }}>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  requestData: () => dispatch(checkAuth())
});

export {App};
export default connect(null, mapDispatchToProps)(withSpinner(App));
