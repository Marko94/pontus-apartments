import { Box, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import * as React from 'react';
import { useCallback, useState } from 'react';
import '../style/components/BookingForm.css';

export default function BookingForm({spacing, width}) {
  const [ startDate, setStartDate ] = useState(dayjs());
  const [ endDate, setEndDate ] = useState(dayjs(startDate.add(1, 'day')));

  const handleStartDateChange = useCallback((newStartDate) => {
    setStartDate(newStartDate);
    if (endDate.isBefore(newStartDate)) {
      setEndDate(newStartDate.add(1, 'day'));
    }
  }, [endDate])

  return (
    <Box component='form' className='Booking-form'>
      <Grid container direction='column' spacing={spacing} width={width}> 
        <Grid item display='flex' alignItems='center'>
          <TextField
            required
            fullWidth
            id="name"
            label="Name"
            placeholder="Full name"
          />
        </Grid>
        <Grid item display='flex' alignItems='center'>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            placeholder="Email address"
          />
        </Grid>
        <Grid item display='flex' alignItems='center'>
          <DatePicker label='Check in date' value={startDate} disablePast={true} format='DD/MM/YYYY' onChange={handleStartDateChange}/>
          <DatePicker label='Check out date' value={endDate} minDate={startDate.add(1, 'day')} disablePast={true}  format='DD/MM/YYYY' sx={{ml: 2}}/>
        </Grid>
        <Grid item display='flex' flexDirection='column'>
          <FormControl fullWidth>
            <InputLabel id="select-label">Apartment</InputLabel>
            <Select
              id="demo-simple-select"
              labelId='select-label'
              value={1}
              label='Apartment'
              onChange={()=>{}}
              autoWidth
            >
              <MenuItem value={1}>Apartment 1</MenuItem>
              <MenuItem value={2}>Apartment 2</MenuItem>
              <MenuItem value={3}>Apartment 3</MenuItem>
            </Select>
            <FormHelperText>Select an apartment you wish to book</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item display='flex' alignItems='center'>
          <TextField
            required
            fullWidth
            id="messageText"
            label="Message Text"
            multiline
            rows={4}
            placeholder="Default Value"
          />
        </Grid>
      </Grid>
    </Box>
  );
};