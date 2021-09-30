import React, { Component } from 'react'

class AddPost extends Component {
  render() {
    return (
      <div>
        <h2>Add Blog Post</h2>
        <form className="text-start">
          <input type="text" className="form-control" placeholder="Enter Blog Post Title"/>
          <br />
          <textarea className="form-control" placeholder="Enter Blog Post Content" />
          <br />
          <button type="submit" className="btn btn-info">Create Blog Post</button>
        </form>
      </div>
    )
  }
}

export default AddPost;
