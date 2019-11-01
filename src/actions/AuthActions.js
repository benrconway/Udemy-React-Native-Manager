import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from './types';

export const emailChanged = (payload) => {
  return {
    type: EMAIL_CHANGED,
    payload,
  }
}

export const passwordChanged = (payload) => {
  return {
    type: PASSWORD_CHANGED,
    payload,
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user})
  Actions.main();
}

const loginUserFailed = dispatch => {
  dispatch({ type: LOGIN_USER_FAILED })
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(error => loginUserFailed(dispatch))
    })
  };
};