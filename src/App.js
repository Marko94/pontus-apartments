import * as React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/Home';
import ApartmentsPage from './pages/Apartments';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import './style/App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Box className="content-wrapper">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage/>} />
            <Route path="apartments" element={<ApartmentsPage/>} />
            <Route path="gallery" element={<GalleryPage/>} />
            <Route path="contact" element={<ContactPage/>} />
            <Route path="*" element={<div/>}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
