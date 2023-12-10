import * as React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/Home';
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
            <Route path="/" element={<div/>}>
              <Route index element={<HomePage/>} />
              <Route path="*" element={<div/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
      <HomePage/>  
    </div>
  );
}

export default App;
