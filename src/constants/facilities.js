import BalconyIcon from '@mui/icons-material/Balcony';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiIcon from '@mui/icons-material/Wifi';
import {wifiENG, beachAccessENG, balconiesWithSeaViewENG, equippedKitchensENG, privatePoolAreaENG } from '../assets/languages/english/Facilities';
import {wifiMNE, beachAccessMNE, balconiesWithSeaViewMNE, equippedKitchensMNE, privatePoolAreaMNE } from '../assets/languages/montenegrian/Facilities';

export const wifi = {
  icon: <WifiIcon/>,
  title: wifiENG.title,
  titleMNE: wifiMNE.title,
  description: wifiENG.description,
  descriptionMNE: wifiMNE.description
}
export const beachAccess = {
  icon: <BeachAccessIcon/>,
  title: beachAccessENG.title,
  titleMNE: beachAccessMNE.title,
  description: beachAccessENG.description,
  descriptionMNE: beachAccessMNE.description
}
export const balconiesWithSeaView = {
  icon: <BalconyIcon/>,
  title: balconiesWithSeaViewENG.title,
  titleMNE: balconiesWithSeaViewMNE.title,
  description: balconiesWithSeaViewENG.description,
  descriptionMNE: balconiesWithSeaViewMNE.description
}
export const equippedKitchens = {
  icon: <MicrowaveIcon/>,
  title: equippedKitchensENG.title,
  titleMNE: equippedKitchensMNE.title,
  description: equippedKitchensENG.description,
  descriptionMNE: equippedKitchensMNE.description
}
export const privatePoolArea = {
  icon: <PoolOutlinedIcon/>,
  title: privatePoolAreaENG.title,
  titleMNE: privatePoolAreaMNE.title,
  description: privatePoolAreaENG.description,
  descriptionMNE: privatePoolAreaMNE.description
}