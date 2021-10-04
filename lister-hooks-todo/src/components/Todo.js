import React, { useRef, useReducer, useEffect } from 'react';
import todoReducer from '../reducers/todoReducer';

const Todo = () => {

  // to capture input from form fields in fn comp
  const todoInput = useRef();

  // using useReducer() -- will get connected with todoReducer
  const [todoState, todoDispatch] = useReducer(todoReducer, []);

  console.log(todoState); // will have todoArray

  useEffect( () => {
    todoDispatch({
      type: 'GET_TODOS'
    })
  }, []);

  const handleAddTodo = () => {
    // read form field data
    console.log(todoInput.current.value); 

    // dispatching action to hit the reducer
    todoDispatch( {
                  type: 'ADD_TODO', 
                  data: todoInput.current.value
                });
  }

    

  let todoList = null;
  todoList = todoState.map( (todo, index) => {
    return(
      <li className="list-group-item" key={index}>
        {todo.text}
        <button type="button" className="btn btn-sm btn-primary">Edit</button>
        <button type="button" className="btn btn-sm btn-danger">Delete</button>
      </li>
    )
  })

  return (
    <div className="row">
      <h2>Todo | with useRef() and useReducer() - Demo </h2>
      <div className="col-md-6 offset-md-3">
        <input type="text" className="form-control"
        style={{width: '200px'}} ref={todoInput}/>
        <button type="button" className="btn btn-success" 
          onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div className="col-md-6 offset-md-3">
        <ul className="list-group">
          
          { todoState && todoState.length > 0? 
            todoList:
            <div>No Todo's Added. You Add One</div>
          }
          
        </ul>
      </div>
    </div>
  )
}

export default Todo;
