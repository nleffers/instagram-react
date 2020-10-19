import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, authCheckTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth'
import { userCreateSaga } from './user'

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ])
}

export function* watchUser() {
  yield all([
    takeEvery(actionTypes.USER_CREATE, userCreateSaga),
  ])
}