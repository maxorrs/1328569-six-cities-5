import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../pages/main-page';
import SignInPage from '../pages/sign-in-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage offersCount={offersCount} />
        </Route>
        <Route exact path='/login'>
          <SignInPage />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route exact path='/offer/:id'>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
