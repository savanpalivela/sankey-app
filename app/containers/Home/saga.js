import { takeLatest, call, put } from 'redux-saga/effects';

import { setSankeyData, setSankeyDataError } from './actions';
import { GET_SANKEY_DATA } from './constants';
import { fetchSankeyData } from './api';
// Individual exports for testing
export function* handleSankeyDataLoad() {
  try {
    const data = yield call(fetchSankeyData);
    yield put(setSankeyData(data));
  } catch (error) {
    yield put(setSankeyDataError(error.toString()));
  }
}

export default function* watchSankeyDataLoad() {
  yield takeLatest(GET_SANKEY_DATA, handleSankeyDataLoad);
}
