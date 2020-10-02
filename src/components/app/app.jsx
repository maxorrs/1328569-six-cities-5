import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main';
import SignIn from '../sign-in';
import Favorites from '../favorites';
import Room from '../room';
import NotFound from '../not-found';

const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main offersCount={offersCount} />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
        <Route exact path='/offer/:id'>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
