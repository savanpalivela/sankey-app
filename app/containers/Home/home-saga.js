import { takeLatest, call, put } from 'redux-saga/effects';

import { setRecordData, setRecordDataError } from './home-actions';
import { GET_RECORD_DATA } from './home-constants';
import { fetchRecordData } from '../../services/reacordData.api';
// Individual exports for testing
export function* handleRecordDataLoad() {
  try {
    const data = yield call(fetchRecordData);
    yield put(setRecordData(data));
  } catch (error) {
    yield put(setRecordDataError(error.toString()));
  }
}

export default function* watchRecordDataLoad() {
  yield takeLatest(GET_RECORD_DATA, handleRecordDataLoad);
}
