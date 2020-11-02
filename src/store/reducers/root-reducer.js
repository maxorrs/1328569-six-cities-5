import {combineReducers} from 'redux';
import {appState} from './app-state/app-state';
import {data} from './data/data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  APP_STATE: `APP_STATE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user
});
