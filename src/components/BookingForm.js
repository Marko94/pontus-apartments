import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers';
import { apartments } from '../constants/apartments';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import * as React from 'react';
import { useCallback, useState } from 'react';
import '../style/components/BookingForm.css';

export default function BookingForm({spacing, width}) {
  const [ startDate, setStartDate ] = useState(dayjs());
  const [ endDate, setEndDate ] = useState(dayjs(startDate.add(1, 'day')));
  const [ selectedApartment, setSelectedApartment ] = useState('Bilo Koji');
  const [ name, setName ] = useState('');
  
  const handleSetName = (event) => {
    setName(event.target.value.trim());
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

  return (
    <Box component='form' className='Booking-form' onSubmit={handleSubmit}>
      <Grid container direction='column' spacing={spacing} width={width}> 
        <Grid item display='flex' alignItems='center'>
          <TextField
            required
            fullWidth
            error={name === ''}
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
            fullWidth
            id="email"
            name='mail'
            label="Email"
            placeholder="Email address"
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
            >
              <MenuItem key='any' value='Bilo Koji'>Any</MenuItem>
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
          <Button type='submit' variant='contained' color='secondary' disableElevation endIcon={<SendIcon/>}>Send Request</Button>
        </Grid>
      </Grid>
    </Box>
  );
};