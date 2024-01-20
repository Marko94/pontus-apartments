import { Box, Button } from "@mui/material";
import * as React from 'react';
import pages from "../../constants/pages";
import '../../style/components/NavbarMenu.css';

export default function NavbarMenu() {
  return (
    <Box className='Navbar-menu-wrapper'>
      {pages.map((page) => (
        <Button
          key={page}
          href={page === pages[0] ? "/pontus-apartments/" : '/pontus-apartments/' + page.toLocaleLowerCase()}
          className="Navbar-menu-item"
          variant="text"
          sx={{ my: 2 }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};