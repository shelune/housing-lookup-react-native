import resources from './../utilities/resources';
import {
  FETCH_APARTMENTPAGE_OK,
  FETCH_APARTMENTPAGE_FAILED,
  FETCH_APARTMENTPAGE_LOADING
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENTPAGE_LOADING:
      return {...state, loading: true};
    case FETCH_APARTMENTPAGE_FAILED:
      return {...state, statusText: action.payload, loading: false};
    case FETCH_APARTMENTPAGE_OK:
      console.log('got data from apartment fetch action: ', action.payload);
      return {...state, apartment: {...action.payload}, loading: false};
    default:
      return state;
  }
}
