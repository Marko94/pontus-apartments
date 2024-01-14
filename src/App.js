import { Box } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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

  

const theme = createTheme({
  palette: {
    primary: {
      main: '#326273',
      light: '#5C9ead',
      dark: '#1c2a3e',
      contrastText: '#000000',
    },
    secondary: {
      main: '#b3965a',
      light: '#c2ab7a',
      dark: '#8f7848',
      contrastText: '#FFFFFF',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: '--primary',
              color: '#FFF',
            }),
        }),
      },
    },
  },
});

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
      
    </div>
  );
}

export default App;
