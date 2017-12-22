import {
  FETCH_SUGGESTIONS,
  FETCH_SUGGESTIONS_OK,
  FETCH_SUGGESTIONS_FAILED,
  HIDE_SUGGESTIONS
} from './../actions/types';

const initialState = {keyword: '', items: [], status: ''};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUGGESTIONS: 
      return Object.assign({}, state, {
        status: action.payload.status
      });
    case FETCH_SUGGESTIONS_OK:
      return Object.assign({}, state, {
        items: action.payload.items,
        status: action.payload.status
      });
    case FETCH_SUGGESTIONS_FAILED:
      return Object.assign({}, state, {
        status: action.payload.status
      });
    case HIDE_SUGGESTIONS:
      return Object.assign({}, state, {
        status: 'hidden'
      });
    default:
      return state;
  }
}