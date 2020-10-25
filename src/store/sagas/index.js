import { takeEvery, all } from 'redux-saga/effects';
import { pictureSetProfilePictureSuccess } from '../actions';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, authCheckTimeoutSaga, authUserLoginSaga, authCheckStateSaga, authUserCreateSaga, authUserFetchSaga, authUserUpdateSaga, authUserChangePasswordSaga } from './auth'
import { pictureUploadSaga, pictureCreateSaga, pictureSetProfilePictureSaga } from './picture'
import { userFetchSaga, userPicturesFetchSaga } from './user'

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER_CHECK_TIMEOUT, authCheckTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN, authUserLoginSaga),
    takeEvery(actionTypes.AUTH_USER_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_USER_CREATE, authUserCreateSaga),
    takeEvery(actionTypes.AUTH_USER_FETCH, authUserFetchSaga),
    takeEvery(actionTypes.AUTH_USER_UPDATE, authUserUpdateSaga),
    takeEvery(actionTypes.AUTH_USER_CHANGE_PASSWORD, authUserChangePasswordSaga)
  ])
}

export function* watchPicture() {
  yield all([
    takeEvery(actionTypes.PICTURE_UPLOAD, pictureUploadSaga),
    takeEvery(actionTypes.PICTURE_CREATE, pictureCreateSaga),
    takeEvery(actionTypes.PICTURE_SET_PROFILE_PICTURE, pictureSetProfilePictureSaga)
  ])
}

export function* watchUser() {
  yield all([
    takeEvery(actionTypes.USER_FETCH, userFetchSaga),
    takeEvery(actionTypes.USER_PICTURES_FETCH, userPicturesFetchSaga)
  ])
}
