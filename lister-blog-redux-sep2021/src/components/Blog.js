import React from 'react'
import AddPost from '../containers/AddPost';
import PostList from '../containers/PostList';

const Blog = () => {
  return (
    <div className="row">
      <h1>Blog Page!</h1>

      <div className="col-md-6">
        <AddPost />
      </div>
      <div className="col-md-6">
        <PostList />
      </div>

    </div>
  )
}

export default Blog;
