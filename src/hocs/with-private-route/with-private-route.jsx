import React from 'react';
import {Redirect} from 'react-router-dom';
import {getAppRoute} from '../../consts';

export const withPrivateRoute = (Component, isAuth, URL = getAppRoute.root()) => {
  const WithPrivateRoute = (props) => {
    if (isAuth) {
      return <Component {...props} />;
    }

    return <Redirect to={URL} />;
  };

  return WithPrivateRoute;
};
