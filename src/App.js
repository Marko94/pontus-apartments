import { Box } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/navbar/Navbar';
import ApartmentsPage from './pages/Apartments';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import HomePage from './pages/Home';
import './style/App.css';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Box className="content-wrapper">
          <Routes>
              <Route index path="/" element={<HomePage/>} />
              <Route path="apartments" element={<ApartmentsPage/>} />
              <Route path="gallery" element={<GalleryPage/>} />
              <Route path="contact" element={<ContactPage/>} />
              <Route path="*" element={<div/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
