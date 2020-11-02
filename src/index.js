import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/root-reducer';
import {createAPI} from './services/api';
import {UserActionCreator} from './store/reducers/user/user';
import {AuthorizationStatus} from './consts';
import {redirect} from './store/middlewares/redirect';
import {checkAuth} from './store/api-actions';

import App from './components/app/app';

const api = createAPI(
    () => store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
