// Step 12: Have the service with AJAX call. 

import axios from "axios";
import { ADD_POST } from "../actions/types";
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const createPost = ( postData ) => { // postData -- is the form data
  console.log(postData);
  return (dispatch) => {

    return axios.post(POSTS_API_URL, postData)
      .then( (response) => {
        console.log(response);
        //alert('Post Created Successully!');
        // upon successful resp dispatch action with type and response
        dispatch( {
          type: ADD_POST,
          payload: response.data
        })
      })
      .catch( (err) => {
        alert('Some error occured');
        console.log(err);
        // upon error resp dispatch action with type and error
      })
      .finally( () => {
        console.log('It is over!');
      })
  }
}