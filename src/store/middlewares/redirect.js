import browserHistory from '../../browser-history';
import {AppStateActionType} from '../reducers/app-state/app-state';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === AppStateActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
