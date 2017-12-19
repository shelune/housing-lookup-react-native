import resources from './../utilities/resources';
import { 
  ADD_AREA, 
  REMOVE_AREA, 
  UPDATE_RENT, 
  ADD_HOUSING, 
  REMOVE_HOUSING,
  ADD_FEATURE,
  REMOVE_FEATURE
 } from './../actions/types';

const initialState = {
  extraFeatures: [
    "LAUNDRY_HOUSE",
    "PETS_ALLOWED",
    "ELEVATOR",
    "DRYING_ROOM"
  ],
  maxRent: 900,
  roomCounts: [],
  selectedPlaces: [],
  araFeatures: 'ALL_APARTMENTS'
};

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case ADD_AREA:
      return state.selectedPlaces.some(place => place.municipality === action.payload) ? state : Object.assign({}, state, {
        selectedPlaces: [...state.selectedPlaces, { municipality: action.payload }]
      });
    case REMOVE_AREA:
      return Object.assign({}, state, {
        selectedPlaces: state.selectedPlaces.filter((place, index) => index !== action.payload)
      });
    case UPDATE_RENT:
      return Object.assign({}, state, {
        maxRent: action.payload
      });
    case ADD_HOUSING:
      return (state.roomCounts.some(room => room === action.payload.value)) ? state : Object.assign({}, state, {
        roomCounts: [...state.roomCounts, action.payload.value]
      });
    case REMOVE_HOUSING:
      return Object.assign({}, state, {
        roomCounts: state.roomCounts.filter((room, index) => room !== action.payload.value)
      })
    case ADD_FEATURE:
      return (state.extraFeatures.some(feature => feature === action.payload.value)) ? state : Object.assign({}, state, {
        extraFeatures: [...state.extraFeatures, action.payload.value]
      })
    case REMOVE_FEATURE:
      return Object.assign({}, state, {
        extraFeatures: state.extraFeatures.filter(feature => feature !== action.payload.value)
      })
    default:
      return state;
  }

  return state;
};