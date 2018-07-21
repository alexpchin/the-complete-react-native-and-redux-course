import { 
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // A little tricky here...
      // e.g. action.payload === { prop: 'name', value: 'alex' }
      // Using key interpolation with the square brackets
      // Good syntax
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
