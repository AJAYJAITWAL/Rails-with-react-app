import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdatePost() {
  const [data, setData] = useState({});
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const getData =  () => {
    axios
    .get(`/posts/${id}`)
    .then((res) => {
        console.log(res.data)
        setData(res.data)
    })
    .catch((error) => console.log(error));
  }

  const handleUpdateSubmit= (e) => {
    axios
    .put(`/posts/${data.id}`, {post: {title: title, description: description}})
    .then((res) => {
      alert("Post successfully updated!");
      navigate('/');
      console.log(res.data)
      })
      .catch((error) => console.log(error));
      e.preventDefault();
  }
  
  useEffect(()=>{
    getData();  
  }, [])

  return (
    <>
      <div className='container my-3'>
        <h1>Edit a post</h1>

        <form onSubmit={e => { handleUpdateSubmit(e) }}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput" name='description' defaultValue={data.title} onChange={e => setTitle(e.target.value) }/>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlInput1" name='description' defaultValue={data.description} onChange={e => setDescription(e.target.value) }/>
          </div>

          <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdatePost;
