import { put, takeEvery } from 'redux-saga/effects';

const mainSagaFuck = function* mainSagaFuck () {
  console.log('ODPOVEDALA SAGA :) :) :)')
  yield put({ type: 'FUCK_SAGA_RESPONSE' });

  return null;
}

const rootSaga = function* rootSaga () {
  yield takeEvery('FUCK_SAGA_REQUEST', mainSagaFuck);
}

export default rootSaga;
