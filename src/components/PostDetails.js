import React from 'react';
import { Link } from 'react-router-dom';
function PostDetails() {
  return (
    <div>
      <h1>This is the PostDetails page</h1>
      <Link to="/" className='btn btn-primary'>Back</Link>
    </div>
  );
}

export default PostDetails;