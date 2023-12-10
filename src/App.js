import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div/>}>
            <Route index element={<HomePage/>} />
            <Route path="*" element={<div/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
      <HomePage/>  
    </div>
  );
}

export default App;
