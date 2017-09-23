
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const PostIndexItem = ({ post, router, deletePost, history }) => {
  return (
    <li>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>&nbsp;
      <Link to={`/posts/${post.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </li>);
};

export default withRouter(PostIndexItem);
