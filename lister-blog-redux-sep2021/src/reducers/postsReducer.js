// Step 3: Setup Reducer for the store
import { ADD_POST } from "../actions/types";
/* 
What's a Reducer?
  It is a function that takes the current state and 
  an action that was dispatched as its' parameters and returns the new state.

*/

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store. 
// reducer should mandatorily return a state. 

const postsReducer = (state = [], action) => {
  
  switch(action.type){
    case ADD_POST:
      //action.type = Event and action.data = Response Data from Add Post
      state = [ ...state, action.payload ];
      return state;
    default:
      return state;
  }
}
export default postsReducer;