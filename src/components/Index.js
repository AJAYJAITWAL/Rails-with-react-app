import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css';

const Index = () => {
  const [resData, setResData] = useState([]);
  
  const getData =  () => {
    axios
    .get("/posts")
    .then((res) => {
        console.log(res.data)
        setResData(res.data)
    })
    .catch((error) => console.log(error));
  }

  const deletePost = (e,id) => {
    const filterData = resData.filter(item => item.id !== id)
    setResData(filterData)
    e.preventDefault()
    axios
    .delete(`/posts/${id}`)
    .then((res) => {
      console.log("deleted");
      alert("Post Successfully deleted!");  
    })
  }

  useEffect(()=>{
    getData();  
  },[] );

  return (
    <>
      <div className='container mt-3'>
        <h1>All Post</h1>
        <Link to="create_post" className='btn btn-outline-primary my-3 mx-2'>Add a Post</Link>
      </div>

      { resData.map((post)=> {
        return (
          <div className='container my-3'>
            <div className="card my-3 rounded-3 set-bg-color">
              <div className="card-body ">
                <h5 className="card-title mt-2">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <Link to="post_details" className='btn btn-outline-success my-3 mx-2'>Show</Link>
                <Link to={`update_post/${post.id}`} className='btn btn-outline-warning my-3' >Edit Post</Link>
                <button type = "button"sto="post_details" className='btn btn-outline-danger mx-2' id="deleted" onClick={(e) => deletePost(e,post.id)} >Delete Post</button>
              </div>
            </div>
          </div>
        );
      }
      )};
    </>
  );
}

export default Index;
