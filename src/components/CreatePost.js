import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../redux/action';

function CreatePost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  const selector = useSelector((state) => state);
  const dispatch=useDispatch();

  const handleSubmit= (e) => {
    dispatch(getPost(title));

    axios
    .post(`/posts`, {post: {title: title, description: description}})
    .then((res) => {
      alert("Post successfully created!");
      navigate('/');
      console.log(res.data)
      })
      .catch((error) => console.log(error));
      e.preventDefault();
  }
    
  return (
    <>
      <div className='container my-3'>
        <h1>Add a post</h1>

        <form onSubmit={e => { handleSubmit(e) }}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput" name='description' value={title} onChange={e => setTitle(e.target.value) }/>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlInput1" name='description' value={description} onChange={e => setDescription(e.target.value) }/>
          </div>

          <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
