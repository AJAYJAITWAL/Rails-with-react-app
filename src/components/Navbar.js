import react from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-info bg-info">
          <div className="container-fluid">
          <Link to="/" className='navbar-brand text-decoration-none text-white bold'>!MyPost</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className='text-decoration-none text-white'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="about" className='text-decoration-none text-white  mx-2'>About</Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className='text-decoration-none text-white'>Contact</Link>
              </li>
              </ul>
              <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
          </div>
          </div>
      </nav>
      </>
    );
  }
  
  export default Navbar;