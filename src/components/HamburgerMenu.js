import * as React from 'react';
import { IconButton, MenuItem, SwipeableDrawer, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Products', 'Pricing', 'Blog'];

export default function HamburgerMenu() {
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);

  const changeDrawerOpened = (isOpened) => (event) => {
    setIsDrawerOpened(isOpened);
  };

  return (
    <React.Fragment>
      <IconButton
        size="large"
        aria-label="hamburger-menu"
        aria-controls="menu-appbar"
        onClick={changeDrawerOpened(!isDrawerOpened)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        // anchorEl={anchorElNav}
        open={isDrawerOpened}
        onClose={changeDrawerOpened(false)}
        onOpen={changeDrawerOpened(true)}
        variant='temporary'
        disableSwipeToOpen
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={changeDrawerOpened(false)}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </SwipeableDrawer>
    </React.Fragment>
  );
};