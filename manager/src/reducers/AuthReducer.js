import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '' }

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  
  switch (action.type) {
    case EMAIL_CHANGED:
      // Create a new object
      // Copy the contents of the current state object
      // Add a new key of email with value of action.payload
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    default: 
      return state;
  }
}