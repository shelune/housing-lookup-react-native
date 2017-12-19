import { combineReducers } from "redux";
import CriteriaReducer from './CriteriaReducer';
import FetchApartmentReducer from './FetchApartmentReducer';
import ApartmentReducer from './ApartmentReducer';

export default combineReducers({
  criteria: CriteriaReducer,
  fetchApartments: FetchApartmentReducer,
  apartmentInfo: ApartmentReducer
});