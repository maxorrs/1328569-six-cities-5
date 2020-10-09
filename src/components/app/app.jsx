import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../pages/main-page';
import SignInPage from '../pages/sign-in-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path='/'
          render={({history}) => {
            return <MainPage
              offers={offers}
              onCardClick={(id) => history.push(`/offer/${id}`)}
            />;
          }}>
        </Route>
        <Route exact path='/login'>
          <SignInPage />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage offers={offers}/>
        </Route>
        <Route exact
          path='/offer/:id'
          render={({history, match}) => {
            const {id: idMatch} = match.params;
            const currentOffer = offers
              .slice()
              .filter((offer) => offer.id === idMatch)[0];

            return <RoomPage
              currentOffer={currentOffer}
              offers={offers}
              onCardClick={(id) => history.push(`/offer/${id}`)} />;
          }}>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
