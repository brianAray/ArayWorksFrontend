import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArtpageComponent from './components/Artpage/ArtpageComponent';
import BlogpageComponent from './components/Blogpage/BlogpageComponent';
import HomepageComponent from './components/Homepage/HomepageComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import StorepageComponent from './components/Storepage/StorepageComponent';

function App() {
  return (
      <div className="App">
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<HomepageComponent/>}></Route>
          <Route path="/blog" element={<BlogpageComponent/>}></Route>
          <Route path="/art" element={<ArtpageComponent/>}></Route>
          <Route path="/store" element={<StorepageComponent/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
