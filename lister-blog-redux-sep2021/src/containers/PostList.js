import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostList extends Component {
  render() {
    return (
      <div>
        <h2>Post List</h2>

        <div className="card text-start mb-3">
          <div className="card-body">
            <h5 className="card-title">#1 Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link to="/blog/1" className="btn btn-light">Read more...</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default PostList;