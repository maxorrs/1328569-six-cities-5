import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

import {getFavoriteOffers} from '../../utils/common';

const App = (props) => {
  const {offers} = props;
  const favoriteOffers = getFavoriteOffers(offers);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage offers={offers} />
        </Route>
        <Route exact path='/login'>
          <SignInPage />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage favoriteOffers={favoriteOffers}/>
        </Route>
        <Route exact
          path='/offer/:id'
          render={({match}) => {
            const {id: idMatch} = match.params;
            const currentOffer = offers.find((offer) => offer.id === idMatch);

            return <RoomPage
              currentOffer={currentOffer}
              offers={offers} />;
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
