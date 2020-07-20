import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../utilis/constant'
import { call, put, takeEvery } from 'redux-saga/effects';
import {getTransactionListAPI} from '../api';


function* fetchData() {
  try {
    const data = yield call(getTransactionListAPI);
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga



