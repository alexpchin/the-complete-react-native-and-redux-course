import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
  email: '', 
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  
  switch (action.type) {
    case EMAIL_CHANGED:
      // Create a new object
      // Copy the contents of the current state object
      // Add a new key of email with value of action.payload
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      // Second spread resets the state back to the initial
      return { ...state, ...INITIAL_STATE, user: action.payload,
      };
    case LOGIN_USER_FAIL: 
      return { ...state, 
        error: 'Authentication failed.',
        loading: false
        // password: '' // COULD DO THIS FOR EXTRA SECURITY
      };
    default: 
      return state;
  }
};
