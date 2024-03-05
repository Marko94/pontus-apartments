import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';

export const BedTypeName = {
  double: 'double',
  single: 'single',
  sofa: 'sofa'
}

export const doubleBed = {
  name: BedTypeName.double,
  icon: <BedOutlinedIcon/>,
  title: 'double bed',
  titleMultiple: 'double beds',
  titleMNE: 'bračni krevet',
  titleMultipleMNE: 'bračna kreveta'
}

export const singleBed = {
  name: BedTypeName.single,
  icon: <SingleBedOutlinedIcon/>,
  title: 'single bed',
  titleMultiple: 'single beds',
  titleMNE: 'krevet za jednu osobu',
  titleMultipleMNE: 'kreveta za jednu osobu'
}

export const sofa = {
  name: BedTypeName.sofa,
  icon: <ChairOutlinedIcon/>,
  title: 'sofa',
  titleMultiple: 'sofas',
  titleMNE: 'sofa',
  titleMultipleMNE: 'sofe'
}

export const BedTypes = {
  doubleBed: doubleBed,
  singleBed: singleBed,
  sofa: sofa
};