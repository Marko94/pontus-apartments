import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers';
import { apartments } from '../constants/apartments';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import * as React from 'react';
import { useCallback, useState, useLayoutEffect } from 'react';
import '../style/components/BookingForm.css';

export default function BookingForm({spacing, width}) {
  const [ startDate, setStartDate ] = useState(dayjs());
  const [ endDate, setEndDate ] = useState(dayjs(startDate.add(1, 'day')));
  const [ selectedApartment, setSelectedApartment ] = useState('Any');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSetName = (event) => {
    setName(event.target.value);
  };
  const handleSetEmail = (event) => {
    setEmail(event.target.value.trim());
  };

  const handleStartDateChange = useCallback((newStartDate) => {
    setStartDate(newStartDate);
    if (endDate.isBefore(newStartDate)) {
      setEndDate(newStartDate.add(1, 'day'));
    }
  }, [endDate]);

  const handleApartmentChange = (event) => {
    setSelectedApartment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAIL_PUBLIC_KEY).then().catch();
  }

  useLayoutEffect(() => {
    const isValidName = !!name.match(/^\s*([A-Za-z]{1,}([.,] |[-']| ))+[A-Za-z]+\.?\s*$/);
    const isValidEmail = !!email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setIsInvalidName(!isValidName);
    setIsInvalidEmail(!isValidEmail);
  }, [name, email]);

  useLayoutEffect(() => {
    const isButtonDisabled = name === '' || email === '' || isInvalidName || isInvalidEmail
    setIsButtonDisabled(isButtonDisabled);
  }, [isInvalidName, isInvalidEmail, email, name]);

  return (
    <Box component='form' className='Booking-form' onSubmit={handleSubmit}>
      <Grid container direction='column' spacing={spacing} width={width}> 
        <Grid item display='flex' alignItems='center'>
          <TextField
            required
            fullWidth
            error={isInvalidName}
            id="name"
            name='name'
            label="Full name"
            placeholder="Full name"
            onChange={handleSetName}
            value={name}
          />
        </Grid>
        <Grid item display='flex' alignItems='center'>
          <TextField
            required
            error={isInvalidEmail}
            fullWidth
            id="email"
            name='mail'
            label="Email"
            placeholder="Email address"
            onChange={handleSetEmail}
            value={email}
          />
        </Grid>
        <Grid item display='flex' alignItems='flex-start' gap={'0 12px'}>
          <DatePicker label='Check in date' name='CIDate' value={startDate} disablePast={true} format='DD.MM.YYYY.' onChange={handleStartDateChange} sx={{flexGrow: 1}}/>
          <DatePicker label='Check out date' name='CODate' value={endDate} minDate={startDate.add(1, 'day')} disablePast={true}  format='DD.MM.YYYY.' sx={{flexGrow: 1}}/>
          <FormControl sx={{flexGrow: 1}}>
            <InputLabel id="select-label">Apartment</InputLabel>
            <Select
              id="demo-simple-select"
              labelId='select-label'
              name='apt'
              value={selectedApartment}
              label='Apartment'
              onChange={handleApartmentChange}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              MenuProps={{
                PaperProps: { 
                  style: { 
                    height: '280px'
                  }
                }
              }}
            > 
              <MenuItem key='any' value='Any'>Any</MenuItem>
              {apartments.map(apartment => 
                <MenuItem key={apartment.name} value={apartment.name}>{apartment.name}</MenuItem>
              )}
            </Select>
            <FormHelperText>Select an apartment you wish to book</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item display='flex' alignItems='center'>
          <TextField
            fullWidth
            id="messageText"
            name='message'
            label="Message Text"
            multiline
            rows={4}
            placeholder="Default Value"
          />
        </Grid>
        <Grid item display='flex' justifyContent='flex-end'>
          <Button type='submit' variant='contained' color='secondary' disableElevation endIcon={<SendIcon/>} disabled={isButtonDisabled}>Send Request</Button>
        </Grid>
      </Grid>
    </Box>
  );
};