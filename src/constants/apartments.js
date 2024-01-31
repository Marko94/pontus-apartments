import { grigio as grigioPhotos, oro as oroPhotos, rustica as rusticaPhotos, verde as verdePhotos, bordo as bordoPhotos, blu as bluPhotos, marrone as marronePhotos, bianco as biancoPhotos, rio as rioPhotos, kakhi as kakhiPhotos, madera as maderaPhotos } from "../constants/photos.js";

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
  floor: 'Ground floor',
  balcony: false,
  privateTerrace: true,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: '* Private terrace is equipped with beach chairs and a table.',
  photos: maderaPhotos,
  disabledAccess: true,
  ...commonAppartmentItems
}

const rustica = {
  name: 'Rustica',
  floor: 'Ground floor',
  balcony: false,
  privateTerrace: false,
  sharedTerrace: true,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: '* Terrace is equipped with beach chairs and a table and it is shared with one more apartment.',
  photos: rusticaPhotos,
  disabledAccess: true,
  ...commonAppartmentItems
}

const rio = {
  name: 'Rio',
  floor: 'Ground floor',
  balcony: false,
  privateTerrace: false,
  sharedTerrace: true,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: '* Terrace is equipped with beach chairs and a table and it is shared with one more apartment.',
  photos: rioPhotos,
  disabledAccess: true,
  ...commonAppartmentItems
}

const blu = {
  name: 'Blu',
  floor: 'Second floor',
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

const kakhi = {
  name: 'Kakhi',
  floor: 'Second floor',
  balcony: true,
  privateTerrace: false,
  sharedTerrace: false,
  doubleBeds: 1,
  singleBeds: 0,
  sofas: 1,
  notes: null,
  photos: kakhiPhotos,
  disabledAccess: false,
  ...commonAppartmentItems
}

const verde = {
  name: 'Verde',
  floor: 'Second floor',
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
  floor: 'Second floor',
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
  floor: 'Third floor',
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
  floor: 'Third floor',
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
  floor: 'Third floor',
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
  floor: 'Third floor',
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

export const apartments = [blu, madera, kakhi, verde, rustica, bianco, marrone, grigio, bordo, rio, oro];