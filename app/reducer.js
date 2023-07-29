// reducer.js
const initialState = {
    isSticky: true, // Set the initial value of isSticky to false or true based on your requirements
    // other initial state properties...
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "STICKY_CHANGED":
        return {
          ...state,
          isSticky: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  