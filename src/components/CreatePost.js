import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState,setState } from 'react';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    const handleSubmit= (e) => {
      axios
      .post(`/posts`, {post: {title: title, description: description}})
      .then((res) => {
        navigate('/');
        alert("Post successfully created!");
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