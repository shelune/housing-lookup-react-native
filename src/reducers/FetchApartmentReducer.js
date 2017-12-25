import resources from './../utilities/resources';
import { 
  FETCH_APARTMENTS, 
  FETCH_APARTMENTS_OK, 
  FETCH_APARTMENTS_FAILED, 
  FETCH_APARTMENTS_LOADING, 
  INCREASE_PAGE_NUMBER,
  FETCH_MORE_OK} from './../actions/types';

const initialState = {pageNumber: 0, items: [], page: {}, status: '', loading: false, hasMore: true};

export default (state = initialState, action) => {
  // console.log('response from sato to reducer: ', action.payload);
  
  switch (action.type) {
    case FETCH_APARTMENTS_OK:
      return Object.assign({}, state, {
        items: action.payload.items,
        page: action.payload.page,
        pageNumber: 0,
        status: 'OK',
        loading: false,
        hasMore: action.payload.page.totalResultCount > (action.payload.page.pageNumber + 1) * resources.pageSize
      });
    case FETCH_MORE_OK:
      return Object.assign({}, state, {
        items: state.items.concat(action.payload.items),
        page: action.payload.page,
        pageNumber: state.pageNumber + 1,
        status: 'OK',
        loading: false,
        hasMore: action.payload.page.totalResultCount > (action.payload.page.pageNumber + 1) * resources.pageSize
      });
    case FETCH_APARTMENTS_FAILED:
      // console.log('fetching failed...');
      return { ...state, status: `Error: ${action.payload}`, loading: false};
    case FETCH_APARTMENTS_LOADING:
      // console.log('fetching...');
      return {...state, loading: true};
    default:
      return state;
  }
}