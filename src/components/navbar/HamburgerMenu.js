import MenuIcon from '@mui/icons-material/Menu';
import { Box, Divider, IconButton, MenuItem, SwipeableDrawer } from "@mui/material";
import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { pages, pagesMNE } from '../../constants/pages';
import BookNowButton from '../BookNowButton';
import LanguageMenu from './LanguageMenu';

const linkStyle = {
  fontSize: '14pt',
  fontWeight: 650,
  textDecoration: 'none',
  flex: 1,
  color: 'black'
};

export default function HamburgerMenu({backgroundColor}) {
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  const [searchParams,] = useSearchParams();
  const [pageLabels, setPageLabels] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ?
    pagesMNE
    :
    pages
  );

  useLayoutEffect(() => {
    setPageLabels(
      searchParams && searchParams.get('lang') === 'MNE' ?
        pagesMNE
        :
        pages
    )
  },[searchParams]);

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
        <Box width='100%' height={95} bgcolor='primary.dark' display='flex' justifyContent='center' alignItems='center' position='relative'>
          <BookNowButton/>
          <Box position='absolute' right={12}>
            <LanguageMenu/>
          </Box>
        </Box>
        <Divider/>
        {pages.map((page, index) => (
          <Box key={page} height={48} width='100%' display='flex' alignItems='center' justifyContent='start' p={0} borderBottom='1px solid rgba(0, 0, 0, 0.12)' bgcolor='secondary.extraLight'>
            <Link to={page === pages[0] ? "/" : page.toLocaleLowerCase()} onClick={changeDrawerOpened(false)} style={linkStyle}>
              <MenuItem key={page} style={linkStyle}>{pageLabels[index]}</MenuItem>
            </Link>
          </Box>
        ))}
      </SwipeableDrawer>
    </React.Fragment>
  );
};