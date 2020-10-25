import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  snapShot: null,
  profilePicture: false,
  pictureUrl: null,
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PICTURE_UPLOAD_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.PICTURE_UPLOAD_SUCCESS: return updateObject(state, { snapShot: action.snapShot, loading: false })
    case actionTypes.PICTURE_UPLOAD_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.PICTURE_CREATE_START: return state
    case actionTypes.PICTURE_CREATE_SUCCESS: return updateObject(state, { snapShot: null })
    case actionTypes.PICTURE_CREATE_FAIL: return updateObject(state, { snapShot: null, error: action.error })
    case actionTypes.PICTURE_CREATE_PROFILE_PICTURE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.PICTURE_CREATE_PROFILE_PICTURE_SUCCESS: return updateObject(state, { snapShot: null, profilePicture: true, loading: false })
    case actionTypes.PICTURE_CREATE_PROFILE_PICTURE_FAIL: return updateObject(state, { snapShot: null, error: action.error })
    case actionTypes.PICTURE_FETCH_URL_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.PICTURE_FETCH_URL_SUCCESS: return updateObject(state, { pictureUrl: action.pictureUrl, loading: false })
    case actionTypes.PICTURE_FETCH_URL_FAIL: return updateObject(state, { error: action.error, loading: false })
    default: return state;
  }
}

export default reducer;
