import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: null,
  error: '',
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: '',
        password: ''
      };
    case LOGIN_USER_FAILED:
      return { ...state,  error: 'Authentication failed.', loading: false }
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  };
};