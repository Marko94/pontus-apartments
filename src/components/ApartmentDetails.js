import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import { BedTypes } from '../constants/furniture';
import '../style/components/ApartmentDetails.css';
import IconBox from './IconBox';



export default function ApartmentDetails({
  title,
  titleVariant='h3',
  floor,
  doubleBeds=0,
  singleBeds=0,
  sofas=0,
  seaView,
  wifi,
  airCondition,
  fullyEquippedKitchen,
  fridge,
  flatScreenTv,
  washingMachine,
  privateBathroom,
  balcony,
  privateTerrace,
  sharedTerrace,
  disabledAccess,
  towels,
  iron,
  subtitle,
  subtitleVariant='h4',
  decoration,
  detailsVariant='p1',
  spacing=0,
  width
}) {
  return (   
    <Grid container direction='column' alignItems='center' spacing={spacing} width={width} className='Apartment-details-container'>
      <Grid item display='flex' alignItems='center'>
        <Typography variant={titleVariant} color='primary'>{title}</Typography>
      </Grid>
      <Grid item display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center' gap={1} className='Subtitle' pb={1} borderBottom='1px solid lightgrey'>
        <IconBox icon={<StairsOutlinedIcon/>} titleVariant='h7' title={floor} horizontal={true}/>
        {doubleBeds > 0 && <IconBox icon={BedTypes.doubleBed.icon} titleVariant='h7' title={`${doubleBeds} ${BedTypes.doubleBed.title}${doubleBeds > 1 ? 's' : ''}`} horizontal={true}/>}
        {singleBeds > 0 && <IconBox icon={BedTypes.singleBed.icon} titleVariant='h7' title={`${singleBeds} ${BedTypes.singleBed.title}${singleBeds > 1 ? 's' : ''}`} horizontal={true}/>}
        {sofas > 0 && <IconBox icon={BedTypes.sofa.icon} titleVariant='h7' title={`${sofas} ${BedTypes.sofa.title}${sofas > 1 ? 's' : ''}`} horizontal={true}/>}
        {seaView && <IconBox icon={<WavesOutlinedIcon/>} titleVariant='h7' title='Sea view' horizontal={true}/>}
      </Grid>
      <Grid item display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center' gap='8px 16px' className='Description'>
        {wifi && <IconBox icon={<WifiOutlinedIcon/>} description='Wifi access' horizontal={true} descriptionVariant='body2'/>}
        {privateBathroom && <IconBox icon={<BathtubOutlinedIcon/>} description='Private bathrrom with shower' horizontal={true} descriptionVariant='body2'/>}
        {airCondition && <IconBox icon={<AcUnitOutlinedIcon/>} description='Air condition' horizontal={true} descriptionVariant='body2'/>}
        {fullyEquippedKitchen && <IconBox icon={<MicrowaveOutlinedIcon/>} description='Fully equpped kitchen' horizontal={true} descriptionVariant='body2'/>}
        {fridge && <IconBox icon={<KitchenOutlinedIcon/>} description='Refrigerator' horizontal={true} descriptionVariant='body2'/>}
        {flatScreenTv && <IconBox icon={<TvOutlinedIcon/>} description='Flat screen TV' horizontal={true} descriptionVariant='body2'/>}
        {washingMachine && <IconBox icon={<LocalLaundryServiceOutlinedIcon/>} description='Wasching Machine' horizontal={true} descriptionVariant='body2'/>}
        {balcony && <IconBox icon={<BalconyOutlinedIcon/>} description='Private balcony' horizontal={true} descriptionVariant='body2'/>}
        {privateTerrace && <IconBox icon={<BalconyOutlinedIcon/>} description='Private terrace *' horizontal={true} descriptionVariant='body2'/>}
        {sharedTerrace && <IconBox icon={<BalconyOutlinedIcon/>} description='Shared terrace *' horizontal={true} descriptionVariant='body2'/>}
        {disabledAccess && <IconBox icon={<AccessibleOutlinedIcon/>} description='Accessible to people with disabilities' horizontal={true} descriptionVariant='body2'/>}
        {towels && <IconBox icon={<DryCleaningOutlinedIcon/>} description='Towels upon arrival' horizontal={true} descriptionVariant='body2'/>}
        {iron && <IconBox icon={<IronOutlinedIcon/>} description='Ironing equipment' horizontal={true} descriptionVariant='body2'/>}
      </Grid>
      <Grid item display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center' gap='8px 16px' className='Description'>
        {privateTerrace && <Typography variant='caption'>* Private terrace equipped with a table, sun umbrella and beach chairs</Typography>}
        {sharedTerrace && <Typography variant='caption'>* Shared 45m2 terrace equipped with tables, sun umbrellas and beach chairs</Typography>}
      </Grid>
    </Grid>
  );
};