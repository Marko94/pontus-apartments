import { Box, Button, Hidden } from "@mui/material";
import * as React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import '../../style/components/NavbarMenu.css'

const pages = ['Home', 'Apartments', 'Gallery', 'Contact'];

export default function NavbarMenu() {
  return (
    <Box>
      <Hidden smUp>
        <HamburgerMenu/>
      </Hidden>
      <Hidden smDown>
        <Box className='Navbar-menu-wrapper' color='secondary'>
          {pages.map((page) => (
            <Button
              key={page}
              href={page === pages[0] ? "/" : page.toLocaleLowerCase()}
              className="Navbar-menu-item"
              variant="text"
              sx={{ my: 2 }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Hidden>
    </Box>
  );
};