import { Dimensions } from 'react-native';

export default {
  rentLimit: {
    max: 3000,
    min: 300,
    step: 10
  },
  pageSize: 12,
  housingTypes: [
    {
      name: 'Shared',
      value: 'FLATSHARE'
    },
    {
      name: 'Studio',
      value: '1h'
    },
    {
      name: '1 BR',
      value: '2h'
    },
    {
      name: '2 BR', 
      value: '3h'
    },
    {
      name: '3 BR',
      value: '4h'
    },
    {
      name: '4 BR', 
      value: '5h+'
    }
  ],
  extraFeatures: [
    {name: 'Broadband', value: 'BROADBAND_INCLUDED'},
    {name: 'Pets', value: 'PETS_ALLOWED'},
    {name: 'Elevator', value: 'ELEVATOR'},
    {name: 'Sauna', value: 'SAUNA'},
    {name: 'Senior Apartment', value: 'SENIOR_APARTMENT'},
    {name: 'Laundry house', value: 'LAUNDRY_HOUSE'},
    {name: 'Attic / Storage', value: 'ATTIC_OR_CELLAR_OR_STORAGE_ROOM'},
    {name: 'Outdoor Storage', value: 'OUTDOOR_STORAGE_ROOM'},
    {name: 'Drying Room', value: 'DRYING_ROOM'},
    {name: 'House Sauna', value: 'APARTMENT_SAUNA'}
  ]
}