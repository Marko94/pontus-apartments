import { Box } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/Home';
import ApartmentsPage from './pages/Apartments';
import ContactPage from './pages/Contact';
import PoliciesPage from './pages/Policies';
import NotFoundPage from './pages/NotFound';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { customTheme } from './style/theme';
import './style/App.css';
import Footer from './components/footer/Footer';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  

const theme = createTheme(customTheme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <HashRouter>
            <ScrollToTop/>
            <Navbar/>
            <Box className="content-wrapper">
              <Routes>
                  <Route index path="/pontus-apartments" element={<HomePage/>} />
                  <Route path="pontus-apartments/apartments" element={<ApartmentsPage/>} />
                  <Route path="pontus-apartments/policies" element={<PoliciesPage/>} />
                  <Route path="pontus-apartments/contact" element={<ContactPage/>} />
                  <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
              <Footer/>
            </Box>
          </HashRouter>
        </LocalizationProvider>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
