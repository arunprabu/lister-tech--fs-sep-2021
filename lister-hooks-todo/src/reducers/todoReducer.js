// reducer -- fn -- that takes in two params, --- 
// initial state and action 

const todoReducer = ( state = [], action) => {
  // working with action type
  debugger;
  switch(action.type){
    case 'ADD_TODO':
      return [ 
        ...state, 
        {
          id: new Date(),
          text: action.data,
          completed: false
        }
      ]; 
    
    case 'GET_TODOS':
      return state;
    
    case 'EDIT_TODOS':
      return state;
    
    case 'DELETE_TODOS':
      return state;

    default:
      return state;
  }
}

export default todoReducer;
