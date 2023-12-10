import { Box, Button, Hidden } from "@mui/material";
import * as React from 'react';
import HamburgerMenu from './HamburgerMenu';

const pages = ['Products', 'Pricing', 'Blog'];

export default function NavbarMenu() {
  

  return (
    <Box>
      <Hidden smUp>
        <HamburgerMenu/>
      </Hidden>
      <Hidden smDown>
        <Box sx={{ flexGrow: 1, display: 'flex'}} color='secondary'>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {}}
              sx={{ my: 2, color: 'primary', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Hidden>
    </Box>
  );
};