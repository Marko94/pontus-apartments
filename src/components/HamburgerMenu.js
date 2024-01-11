import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, MenuItem, SwipeableDrawer } from "@mui/material";
import * as React from 'react';
import { Link } from 'react-router-dom';
import pages from '../constants/pages';

const linkStyle = {
  fontWeight: 650,
  textDecoration: "none",
  flex: 1,
  color: 'black'
};

export default function HamburgerMenu() {
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);

  const changeDrawerOpened = (isOpened) => (_) => {
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
        open={isDrawerOpened}
        onClose={changeDrawerOpened(false)}
        onOpen={changeDrawerOpened(true)}
        variant='temporary'
        anchor='right'
        PaperProps={{sx: {width: {xs: '75%', md: 480}}}}
        disableSwipeToOpen
      >
        {pages.map((page) => (
          <MenuItem key={page}>
            <Link to={page === pages[0] ? "/" : page.toLocaleLowerCase()} onClick={changeDrawerOpened(false)} style={linkStyle}>{page}</Link>
          </MenuItem>
        ))}
      </SwipeableDrawer>
    </React.Fragment>
  );
};