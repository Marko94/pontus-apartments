import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ApartmentsPage from './pages/Apartments';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import PoliciesPage from './pages/Policies';
import './style/App.css';
import { customTheme } from './style/theme';

function App() {
  const theme = createTheme(customTheme);
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <ScrollToTop/>
            <Navbar/>
            <Box className="content-wrapper">
              <Routes>
                  <Route index path="/" element={<HomePage/>} />
                  <Route path="apartments" element={<ApartmentsPage/>} />
                  <Route path="policies" element={<PoliciesPage/>} />
                  <Route path="contact" element={<ContactPage/>} />
                  <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
              <Footer/>
            </Box>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
