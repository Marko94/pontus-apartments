import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container className='App-container'>
        <img src={logo} className="App-logo" alt="logo" />
          <Button variant="contained">Hello world</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </Container>    
    </div>
  );
}

export default App;
