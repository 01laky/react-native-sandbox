import { combineReducers } from 'redux-immutable';

import appReducer from './appReducer';
import moduleReducer from '../../services/ModuleManager/reducer';

export default combineReducers({
  app: appReducer,
  modules: moduleReducer,
});
