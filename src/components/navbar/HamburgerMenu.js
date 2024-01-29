import MenuIcon from '@mui/icons-material/Menu';
import { Box, Divider, IconButton, MenuItem, SwipeableDrawer } from "@mui/material";
import * as React from 'react';
import { Link } from 'react-router-dom';
import pages from '../../constants/pages';

const linkStyle = {
  fontSize: '14pt',
  fontWeight: 650,
  textDecoration: "none",
  flex: 1,
  color: 'black'
};

export default function HamburgerMenu({backgroundColor}) {
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
        sx={{backgroundColor: backgroundColor, transition: backgroundColor ? 0.5 : 0, borderRadius: '15%'}}
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
        <Box width='100%' height={95} bgcolor='primary.dark'></Box>
        <Divider/>
        {pages.map((page) => (
          <Box height={48} width='100%' display='flex' alignItems='center' justifyContent='start' p={1} borderBottom='1px solid rgba(0, 0, 0, 0.12)' bgcolor='secondary.extraLight'>
            <MenuItem key={page}>
              <Link to={page === pages[0] ? "/" : page.toLocaleLowerCase()} onClick={changeDrawerOpened(false)} style={linkStyle}>{page}</Link>
            </MenuItem>
          </Box>
        ))}
      </SwipeableDrawer>
    </React.Fragment>
  );
};