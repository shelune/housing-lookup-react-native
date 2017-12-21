import { combineReducers } from "redux";
import CriteriaReducer from './CriteriaReducer';
import FetchApartmentReducer from './FetchApartmentReducer';
import ApartmentReducer from './ApartmentReducer';
import SuggestionReducer from './SuggestionReducer';

export default combineReducers({
  criteria: CriteriaReducer,
  fetchApartments: FetchApartmentReducer,
  apartmentInfo: ApartmentReducer,
  suggestions: SuggestionReducer
});