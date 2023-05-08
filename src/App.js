import './App.css';
import { Routes, Route } from "react-router-dom"
import Index from "./components/Index";
import CreatePost from "./components/CreatePost";
import PostDetails from "./components/PostDetails";
import UpdatePost from "./components/UpdatePost";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/about" element={ <About/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/" element={ <Index/> } />
        <Route path="create_post" element={ <CreatePost/> } />
        <Route path="post_details" element={ <PostDetails/> } />
        <Route path="update_post/:id" element={ <UpdatePost/> } />
      </Routes>
    </div>
  );
}

export default App;
