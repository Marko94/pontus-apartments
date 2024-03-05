import { floors, notes } from "../assets/languages/english/Apartments.js";
import { floorsMNE, notesMNE } from "../assets/languages/montenegrian/Apartments.js";
import { grigio as grigioPhotos, oro as oroPhotos, rustica as rusticaPhotos, verde as verdePhotos, bordo as bordoPhotos, blu as bluPhotos, marrone as marronePhotos, bianco as biancoPhotos, rio as rioPhotos, cachi as cachiPhotos, madera as maderaPhotos } from "../constants/photos.js";

const commonAppartmentItems = {
  seaView: true,
  wifi: true,
  privateBathroom: true,
  airCondition: true,
  fullyEquippedKitchen: true,
  fridge: true,
  flatScreenTv: true,
  washingMachine: true,
  towels: true,
  iron: true
}

const madera = {
  name: 'Madera',
  floor: floors.ground,
  floorMNE: floorsMNE.ground,
  balcony: false,
  privateTerrace: true,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: notes.privateTerrace,
  notesMNE: notesMNE.privateTerrace,
  photos: maderaPhotos,
  disabledAccess: true,
  ...commonAppartmentItems
}

const rustica = {
  name: 'Rustica',
  floor: floors.ground,
  floorMNE: floorsMNE.ground,
  balcony: false,
  privateTerrace: false,
  sharedTerrace: true,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: notes.sharedTerrace,
  notesMNE: notesMNE.sharedTerrace,
  photos: rusticaPhotos,
  disabledAccess: true,
  ...commonAppartmentItems
}

const rio = {
  name: 'Rio',
  floor: floors.ground,
  floorMNE: floorsMNE.ground,
  balcony: false,
  privateTerrace: false,
  sharedTerrace: true,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: notes.sharedTerrace,
  notesMNE: notesMNE.sharedTerrace,
  photos: rioPhotos,
  disabledAccess: true,
  ...commonAppartmentItems
}

const blu = {
  name: 'Blu',
  floor: floors.second,
  floorMNE: floorsMNE.second,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: bluPhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const cachi = {
  name: 'Cachi',
  floor: floors.second,
  floorMNE: floorsMNE.second,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: cachiPhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const verde = {
  name: 'Verde',
  floor: floors.second,
  floorMNE: floorsMNE.second,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: verdePhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const grigio = {
  name: 'Grigio',
  floor: floors.second,
  floorMNE: floorsMNE.second,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: grigioPhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const bianco = {
  name: 'Bianco',
  floor: floors.third,
  floorMNE: floorsMNE.third,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: biancoPhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const marrone = {
  name: 'Marrone',
  floor: floors.third,
  floorMNE: floorsMNE.third,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: marronePhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const bordo = {
  name: 'Bordo',
  floor: floors.third,
  floorMNE: floorsMNE.third,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: bordoPhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const oro = {
  name: 'Oro',
  floor: floors.third,
  floorMNE: floorsMNE.third,
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: oroPhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

export const apartments = [blu, madera, cachi, verde, rustica, bianco, marrone, grigio, bordo, rio, oro];