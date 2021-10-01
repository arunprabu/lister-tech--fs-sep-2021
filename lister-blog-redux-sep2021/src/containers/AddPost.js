import React, { Component } from 'react';
// Step 10. //last line of the compoent should use connect()
  // after connecting props will be available in this component. 
  // props are read-only. 
  // props will have dispatch method
import {connect} from 'react-redux';
import { ADD_POST } from '../actions/types';
import { createPost } from '../services/postService';

class AddPost extends Component {

  // Step 9: Handling form submission
  handleAddPost = (event) => {

    event.preventDefault();
    console.log(this.postTitle.value);
    console.log(this.postContent.value);

    // Step 9.2 constructing object -- (payload)
    const postData = {
      title: this.postTitle.value,
      content: this.postContent.value
    }

    console.log(postData); // payload

    console.log(this.props);

    // Step 13: Dispatching with function
    this.props.dispatch( createPost(postData) );
  }

  render() {
    

    return (
      <div>
        <h2>Add Blog Post</h2>
        {/* 9.1 handling onSubmit event */}
        <form className="text-start" onSubmit={this.handleAddPost}>
          <input type="text" className="form-control" 
          placeholder="Enter Blog Post Title" 
          ref={(input) => this.postTitle = input}/>
          <br />
          <textarea className="form-control" placeholder="Enter Blog Post Content" rows="6"
          ref={(input) => this.postContent = input} />
          <br />
          <button type="submit" className="btn btn-info">Create Blog Post</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddPost);
