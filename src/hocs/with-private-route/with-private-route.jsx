import React from 'react';
import {Redirect} from 'react-router-dom';
import {AppRoute} from '../../consts';

export const withPrivateRoute = (Component, isAuth, URL = AppRoute.ROOT) => {
  const WithPrivateRoute = (props) => {
    if (isAuth) {
      return <Component {...props} />;
    }

    return <Redirect to={URL} />;
  };

  return WithPrivateRoute;
};
