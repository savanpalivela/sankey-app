import { takeLatest, call, put } from 'redux-saga/effects';

import { setSankeyData, setSankeyDataError } from './actions';
import { GET_SANKEY_DATA } from './constants';
import { fetchSankeyData } from './api';
// Individual exports for testing
export function* handleSankeyDataLoad() {
  // See example in containers/HomePage/saga.js
  try {
    console.log('reach 2');
    const data = yield call(fetchSankeyData);
    yield put(setSankeyData(data));
  } catch (error) {
    yield put(setSankeyDataError(error.toString()));
  }
}

export default function* watchSankeyDataLoad() {
  console.log('reach 1');
  yield takeLatest(GET_SANKEY_DATA, handleSankeyDataLoad);
}
