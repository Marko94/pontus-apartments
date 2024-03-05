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
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../style/components/ApartmentDetails.css';
import IconBox from './IconBox';
import { accessibleText, airConditionText, flatScreenTvText, fullyEquippedKitchenText, ironText, privateBalconyText, privateBathroomText, privateTerraceText, refrigeratorText, seaViewText, sharedTerraceText, towelsText, washingMachineText, wifiText } from '../assets/languages/english/Apartments';
import { accessibleTextMNE, airConditionTextMNE, flatScreenTvTextMNE, fullyEquippedKitchenTextMNE, ironTextMNE, privateBalconyTextMNE, privateBathroomTextMNE, privateTerraceTextMNE, refrigeratorTextMNE, seaViewTextMNE, sharedTerraceTextMNE, towelsTextMNE, washingMachineTextMNE, wifiTextMNE } from '../assets/languages/montenegrian/Apartments';

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
  details,
  spacing=0,
  width
}) {
  const [searchParams,] = useSearchParams();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      doubleBedsLabel: doubleBeds > 1 ? BedTypes.doubleBed.titleMultipleMNE : BedTypes.doubleBed.titleMNE,
      singleBedsLabel: singleBeds > 1 ? BedTypes.singleBed.titleMultipleMNE : BedTypes.singleBed.titleMNE,
      sofasLabel: sofas > 1 ? BedTypes.sofa.titleMultipleMNE : BedTypes.sofa.titleMNE,
      seaViewLabel: seaViewTextMNE,
      wifiLabel: wifiTextMNE,
      privateBathroomLabel: privateBathroomTextMNE,
      airConditionLabel: airConditionTextMNE,
      fullyEquippedKitchenLabel: fullyEquippedKitchenTextMNE,
      refrigeratorLabel: refrigeratorTextMNE,
      flatScreenTvLabel: flatScreenTvTextMNE,
      washingMachineLabel: washingMachineTextMNE,
      privateBalconyLabel: privateBalconyTextMNE,
      privateTerraceLabel: privateTerraceTextMNE,
      sharedTerraceLabel: sharedTerraceTextMNE,
      accessibleLabel: accessibleTextMNE,
      towelsLabel: towelsTextMNE,
      ironLabel: ironTextMNE
    } : {
      doubleBedsLabel: doubleBeds > 1 ? BedTypes.doubleBed.titleMultiple : BedTypes.doubleBed.title,
      singleBedsLabel: singleBeds > 1 ? BedTypes.singleBed.titleMultiple : BedTypes.singleBed.title,
      sofasLabel: sofas > 1 ? BedTypes.sofa.titleMultiple : BedTypes.sofa.title,
      seaViewLabel: seaViewText,
      wifiLabel: wifiText,
      privateBathroomLabel: privateBathroomText,
      airConditionLabel: airConditionText,
      fullyEquippedKitchenLabel: fullyEquippedKitchenText,
      refrigeratorLabel: refrigeratorText,
      flatScreenTvLabel: flatScreenTvText,
      washingMachineLabel: washingMachineText,
      privateBalconyLabel: privateBalconyText,
      privateTerraceLabel: privateTerraceText,
      sharedTerraceLabel: sharedTerraceText,
      accessibleLabel: accessibleText,
      towelsLabel: towelsText,
      ironLabel: ironText
    }
  );

  useLayoutEffect(() => {
    setPageText(searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      doubleBedsLabel: doubleBeds > 1 ? BedTypes.doubleBed.titleMultipleMNE : BedTypes.doubleBed.titleMNE,
      singleBedsLabel: singleBeds > 1 ? BedTypes.singleBed.titleMultipleMNE : BedTypes.singleBed.titleMNE,
      sofasLabel: sofas > 1 ? BedTypes.sofa.titleMultipleMNE : BedTypes.sofa.titleMNE,
      seaViewLabel: seaViewTextMNE,
      wifiLabel: wifiTextMNE,
      privateBathroomLabel: privateBathroomTextMNE,
      airConditionLabel: airConditionTextMNE,
      fullyEquippedKitchenLabel: fullyEquippedKitchenTextMNE,
      refrigeratorLabel: refrigeratorTextMNE,
      flatScreenTvLabel: flatScreenTvTextMNE,
      washingMachineLabel: washingMachineTextMNE,
      privateBalconyLabel: privateBalconyTextMNE,
      privateTerraceLabel: privateTerraceTextMNE,
      sharedTerraceLabel: sharedTerraceTextMNE,
      accessibleLabel: accessibleTextMNE,
      towelsLabel: towelsTextMNE,
      ironLabel: ironTextMNE
    } : {
      doubleBedsLabel: doubleBeds > 1 ? BedTypes.doubleBed.titleMultiple : BedTypes.doubleBed.title,
      singleBedsLabel: singleBeds > 1 ? BedTypes.singleBed.titleMultiple : BedTypes.singleBed.title,
      sofasLabel: sofas > 1 ? BedTypes.sofa.titleMultiple : BedTypes.sofa.title,
      seaViewLabel: seaViewText,
      wifiLabel: wifiText,
      privateBathroomLabel: privateBathroomText,
      airConditionLabel: airConditionText,
      fullyEquippedKitchenLabel: fullyEquippedKitchenText,
      refrigeratorLabel: refrigeratorText,
      flatScreenTvLabel: flatScreenTvText,
      washingMachineLabel: washingMachineText,
      privateBalconyLabel: privateBalconyText,
      privateTerraceLabel: privateTerraceText,
      sharedTerraceLabel: sharedTerraceText,
      accessibleLabel: accessibleText,
      towelsLabel: towelsText,
      ironLabel: ironText
    });
  }, [searchParams, doubleBeds, singleBeds, sofas]);

  return (   
    <Grid container direction='column' alignItems='center' spacing={spacing} width={width} className='Apartment-details-container'>
      <Grid item display='flex' alignItems='center'>
        <Typography variant={titleVariant} color='primary'>{title}</Typography>
      </Grid>
      <Grid item display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center' gap={1} className='Subtitle' pb={1} borderBottom='1px solid lightgrey'>
        <IconBox icon={<StairsOutlinedIcon/>} titleVariant='h7' title={floor} horizontal={true}/>
        {doubleBeds > 0 && <IconBox icon={BedTypes.doubleBed.icon} titleVariant='h7' title={`${doubleBeds} ${pageText.doubleBedsLabel}`} horizontal={true}/>}
        {singleBeds > 0 && <IconBox icon={BedTypes.singleBed.icon} titleVariant='h7' title={`${singleBeds} ${pageText.singleBedsLabel}`} horizontal={true}/>}
        {sofas > 0 && <IconBox icon={BedTypes.sofa.icon} titleVariant='h7' title={`${sofas} ${pageText.sofasLabel}`} horizontal={true}/>}
        {seaView && <IconBox icon={<WavesOutlinedIcon/>} titleVariant='h7' title={pageText.seaViewLabel} horizontal={true}/>}
      </Grid>
      <Grid item display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center' gap='8px 16px' className='Description'>
        {wifi && <IconBox icon={<WifiOutlinedIcon/>} description={pageText.wifiLabel} horizontal={true} descriptionVariant='body2'/>}
        {privateBathroom && <IconBox icon={<BathtubOutlinedIcon/>} description={pageText.privateBathroomLabel} horizontal={true} descriptionVariant='body2'/>}
        {airCondition && <IconBox icon={<AcUnitOutlinedIcon/>} description={pageText.airConditionLabel} horizontal={true} descriptionVariant='body2'/>}
        {fullyEquippedKitchen && <IconBox icon={<MicrowaveOutlinedIcon/>} description={pageText.fullyEquippedKitchenLabel} horizontal={true} descriptionVariant='body2'/>}
        {fridge && <IconBox icon={<KitchenOutlinedIcon/>} description={pageText.refrigeratorLabel} horizontal={true} descriptionVariant='body2'/>}
        {flatScreenTv && <IconBox icon={<TvOutlinedIcon/>} description={pageText.flatScreenTvLabel} horizontal={true} descriptionVariant='body2'/>}
        {washingMachine && <IconBox icon={<LocalLaundryServiceOutlinedIcon/>} description={pageText.washingMachineLabel} horizontal={true} descriptionVariant='body2'/>}
        {balcony && <IconBox icon={<BalconyOutlinedIcon/>} description={pageText.privateBalconyLabel} horizontal={true} descriptionVariant='body2'/>}
        {privateTerrace && <IconBox icon={<BalconyOutlinedIcon/>} description={pageText.privateTerraceLabel} horizontal={true} descriptionVariant='body2'/>}
        {sharedTerrace && <IconBox icon={<BalconyOutlinedIcon/>} description={pageText.sharedTerraceLabel} horizontal={true} descriptionVariant='body2'/>}
        {disabledAccess && <IconBox icon={<AccessibleOutlinedIcon/>} description={pageText.accessibleLabel} horizontal={true} descriptionVariant='body2'/>}
        {towels && <IconBox icon={<DryCleaningOutlinedIcon/>} description={pageText.towelsLabel} horizontal={true} descriptionVariant='body2'/>}
        {iron && <IconBox icon={<IronOutlinedIcon/>} description={pageText.ironLabel} horizontal={true} descriptionVariant='body2'/>}
      </Grid>
      <Grid item display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center' gap='8px 16px' className='Description'>
        {(privateTerrace || sharedTerrace) && <Typography variant='caption'>{details}</Typography>}
      </Grid>
    </Grid>
  );
};