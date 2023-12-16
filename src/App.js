import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import AddBlogs from './components/AddBlogs';
import DetailsBlog from './components/DetailsBlog';
function App() {
  return (
    <React.Fragment>

      <header><Header></Header></header>

    <main>
      <Routes>
      <Route path ="/auth" element={<Auth></Auth>}></Route>
      <Route path ="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path ="/blogs/add" element={<AddBlogs></AddBlogs>}></Route>
      <Route path ="/myBlogs" element={<UserBlogs></UserBlogs>}></Route>
      <Route path ="/myBlogs/:id" element={<DetailsBlog></DetailsBlog>}></Route>
     
      </Routes>
      </main>

      </React.Fragment>
  );
}

export default App;
