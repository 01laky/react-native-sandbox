import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import rootSaga from '../saga';

const initialState = Immutable.Map();

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga);
  return store;
}
