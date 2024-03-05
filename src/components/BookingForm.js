import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers';
import { apartments } from '../constants/apartments';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import * as React from 'react';
import { useCallback, useState, useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../style/components/BookingForm.css';
import { anyLabel, apartmentHelperText, apartment, checkInDate, checkOutDate, emailAddress, fullName, messageText, sendRequestLabel } from '../assets/languages/english/components/BookingForm';
import { anyLabelMNE, apartmentHelperTextMNE, apartmentMNE, checkInDateMNE, checkOutDateMNE, emailAddressMNE, fullNameMNE, messageTextMNE, sendRequestLabelMNE } from '../assets/languages/montenegrian/components/BookingForm';

export default function BookingForm({spacing, width}) {
  const [searchParams,] = useSearchParams();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      fullName: fullNameMNE,
      emailAddress: emailAddressMNE,
      checkInDate: checkInDateMNE,
      checkOutDate: checkOutDateMNE,
      apartment: apartmentMNE,
      anyLabel: anyLabelMNE,
      apartmentHelperText: apartmentHelperTextMNE,
      messageText: messageTextMNE,
      sendRequestLabel: sendRequestLabelMNE,
    } : {
      fullName,
      emailAddress,
      checkInDate,
      checkOutDate,
      apartment,
      anyLabel,
      apartmentHelperText,
      messageText,
      sendRequestLabel,
    }
  );

  useLayoutEffect(() => {
    setPageText(searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      fullName: fullNameMNE,
      emailAddress: emailAddressMNE,
      checkInDate: checkInDateMNE,
      checkOutDate: checkOutDateMNE,
      apartment: apartmentMNE,
      anyLabel: anyLabelMNE,
      apartmentHelperText: apartmentHelperTextMNE,
      messageText: messageTextMNE,
      sendRequestLabel: sendRequestLabelMNE,
    } : {
      fullName,
      emailAddress,
      checkInDate,
      checkOutDate,
      apartment,
      anyLabel,
      apartmentHelperText,
      messageText,
      sendRequestLabel,
    });
  }, [searchParams]);

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
            label={pageText.fullName}
            placeholder={pageText.fullName}
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
            placeholder={pageText.emailAddress}
            onChange={handleSetEmail}
            value={email}
          />
        </Grid>
        <Grid item display='flex' alignItems='flex-start' flexDirection={{xs: 'column', sm: 'row'}} gap={{xs: '12px 0', sm: '0 12px'}}>
          <DatePicker label={pageText.checkInDate} name='CIDate' value={startDate} disablePast={true} format='DD.MM.YYYY.' onChange={handleStartDateChange} sx={{width: '100%'}}/>
          <DatePicker label={pageText.checkOutDate} name='CODate' value={endDate} minDate={startDate.add(1, 'day')} disablePast={true}  format='DD.MM.YYYY.' sx={{width: '100%'}}/>
          <FormControl sx={{width: '100%'}}>
            <InputLabel id="select-label">{pageText.apartment}</InputLabel>
            <Select
              id="demo-simple-select"
              labelId='select-label'
              name='apt'
              value={selectedApartment}
              label={pageText.apartment}
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
              <MenuItem key='any' value='Any'>{pageText.anyLabel}</MenuItem>
              {apartments.map(apartment => 
                <MenuItem key={apartment.name} value={apartment.name}>{apartment.name}</MenuItem>
              )}
            </Select>
            <FormHelperText>{pageText.apartmentHelperText}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item display='flex' alignItems='center'>
          <TextField
            fullWidth
            id="messageText"
            name='message'
            label={pageText.messageText}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item display='flex' justifyContent='flex-end'>
          <Button type='submit' variant='contained' color='secondary' disableElevation endIcon={<SendIcon/>} disabled={isButtonDisabled}>{pageText.sendRequestLabel}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};