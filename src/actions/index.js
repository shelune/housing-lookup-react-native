import { 
  ADD_AREA, 
  REMOVE_AREA, 
  UPDATE_RENT, 
  ADD_HOUSING, 
  REMOVE_HOUSING,
  FETCH_APARTMENTS_OK,
  FETCH_APARTMENTS_FAILED,
  FETCH_APARTMENTS_LOADING,
  INCREASE_PAGE_NUMBER,
  FETCH_APARTMENTPAGE_LOADING,
  FETCH_APARTMENTPAGE_OK,
  FETCH_APARTMENTPAGE_FAILED,
  ADD_FEATURE,
  REMOVE_FEATURE,
  FETCH_MORE_OK
} from './types';
import resources from './../utilities/resources';
import {
  Actions
} from 'react-native-router-flux';
import axios from 'axios';

import scraper from '../utilities/scraper';

export const selectArea = (area) => {
  return {
    type: ADD_AREA,
    payload: area
  };
};

export const removeArea = (areaIndex) => {
  return {
    type: REMOVE_AREA,
    payload: areaIndex
  }
}

export const updateRent = (amount) => {
  return {
    type: UPDATE_RENT,
    payload: amount
  }
}

export const addHousingType = (type) => {
  return {
    type: ADD_HOUSING,
    payload: type
  }
}

export const removeHousingType = (type) => {
  return {
    type: REMOVE_HOUSING,
    payload: type
  }
}

export const addExtraFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}

export const removeExtraFeature = (feature) => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  }
}

export const fetchMoreApartments = (fetchParams) => {
  const config = {
    baseURL: 'https://www.sato.fi/api/v1/',
    url: '/apartments/search',
    method: 'post',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    data: {
      "searchParameters": fetchParams.criteria,
      "page": { "pageNumber": fetchParams.pageNumber, "pageSize": resources.pageSize },
      "sort": [{ "price": "asc" }]
    }
  }

  console.log('fetch params: ', config);

  return (dispatch) => {
    dispatch({ type: FETCH_APARTMENTS_LOADING, payload: 'Loading' });

    axios.request(config).then(response => {
      //console.log('response from sato: ', response.data);
      dispatch({ type: FETCH_MORE_OK, payload: response.data });
    }).catch(err => {
      dispatch({ type: FETCH_APARTMENTS_FAILED, payload: err });
    })
  }
}

export const fetchApartments = (fetchParams) => {
  const config = {
    baseURL: 'https://www.sato.fi/api/v1/',
    url: '/apartments/search',
    method: 'post',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    data: {
      "searchParameters": fetchParams.criteria,
      "page": { "pageNumber": fetchParams.pageNumber, "pageSize": resources.pageSize },
      "sort": [{ "price": "asc" }]
    }
  }

  console.log('fetch params: ', config);
  
  return (dispatch) => {
    dispatch({ type: FETCH_APARTMENTS_LOADING, payload: 'Loading' });
    
    axios.request(config).then(response => {
      console.log('response from sato: ', response.data);
      dispatch({ type: FETCH_APARTMENTS_OK, payload: response.data });
      // console.log('going to apartment list screen');
      Actions.apartments();
    }).catch(err => {
      console.log('error when fetching?', err);
      dispatch({ type: FETCH_APARTMENTS_FAILED, payload: err });
      Actions.apartments();
    })
  }
}

export const fetchApartmentPage = (url) => {
  const config = {
    url: url,
    method: 'get',
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  }
  
  return (dispatch) => {
    dispatch({ type: FETCH_APARTMENTPAGE_LOADING, payload: 'Loading' });
    axios.request(config).then(response => {
      return scraper(response.data);
    })
    .then(apartment => {
      dispatch({ type: FETCH_APARTMENTPAGE_OK, payload: apartment });
    })
    .catch(err => {
      console.log('error when fetching page: ', err);
      dispatch({ type: FETCH_APARTMENTS_FAILED, payload: err });
    })
  }
}