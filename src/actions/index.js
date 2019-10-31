import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
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