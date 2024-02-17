import { ReactComponent as MontenegroIcon } from '../../assets/decorations/Montenegro.svg'
import { ReactComponent as UKIcon } from '../../assets/decorations/UK icon.svg'
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import * as React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function LanguageMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get('lang') || 'ENG');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSetLanguage = (lang) => {
    setSearchParams(params => {
      if (lang === 'ENG') {
        params.delete('lang');
      } else {
        params.set('lang', lang);
      }
      return params;
    });
    setSelectedLanguage(lang);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      {selectedLanguage === 'ENG' ? 
        <IconButton
          size="medium"
          onClick={(e) => handleOpenMenu(e)}
          sx={{borderRadius: 1}}
        >
          <Typography color='#FFF' mr={1}>
            ENG
          </Typography>
          <UKIcon height={32}/>
        </IconButton>
        :
        <IconButton
          size="medium"
          onClick={(e) => handleOpenMenu(e)}
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          sx={{borderRadius: 1, color: '#FFF'}}
        >
          <Typography color='#FFF' mr={1}>
            MNE
          </Typography>
          <MontenegroIcon height={32}/>
        </IconButton>
      }
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        elevation={3}
      >
        {selectedLanguage === 'ENG' && 
          <MenuItem onClick={() => handleSetLanguage('MNE')} sx={{justifyContent: 'space-between'}}>
            <Typography mr={1}>
              MNE
            </Typography>
            <MontenegroIcon height={32}/>
          </MenuItem>
        }
        {selectedLanguage === 'MNE' && 
          <MenuItem onClick={() => handleSetLanguage('ENG')} sx={{justifyContent: 'space-between'}}>
            <Typography mr={1}>
              ENG
            </Typography>
            <UKIcon height={32}/>
          </MenuItem>
        }
      </Menu>
    </React.Fragment>
  );
};