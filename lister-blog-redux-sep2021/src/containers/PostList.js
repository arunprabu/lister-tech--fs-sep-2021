import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostList extends Component {

  render() {
    console.log(this.state);
    console.log(this.props);
    var postItems = null;

    if(this.props.posts && this.props.posts.length > 0 ){
      postItems = this.props.posts.map( (post, index) => {
        return(
          <div className="card text-start mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">#{post.id} {post.title}</h5>
              <p className="card-text">{post.content}</p>
              <Link to={`/blog/${post.id}`} className="btn btn-light">Read more...</Link>
            </div>
          </div>
        )
      })
    }

    return (
      <div>
        <h2>Post List</h2>

        { this.props.posts && this.props.posts.length > 0? 
          postItems: 
          <div className="alert alert-danger">No Posts Found </div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state); // entire store data.
  return {
    posts: state.posts
  }
} 

/* The above function will convert state to props for the PostList component.
By doing the above, this comp will no longer have state.  */

export default connect(mapStateToProps)(PostList);