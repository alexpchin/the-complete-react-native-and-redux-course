// reducers can't return undefined
// should provide a default argument
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default: 
      return state;
  }
};
