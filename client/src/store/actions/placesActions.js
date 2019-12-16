import axios from 'axios';
import { API_URL } from '../../utils/constants';

export const FETCH_PLACES_BEGIN = "FETCH_PLACES_BEGIN";
export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";
export const FETCH_PLACES_FAILURE = "FETCH_PLACES_FAILURE";

export function fetchPlaces() {
  return dispatch => {
    dispatch(fetchPlacesBegin());
    return axios.get(`${API_URL}places`).then(({ data }) => {
      if(data.success === true){
        return dispatch(fetchPlacesSuccess(data.places));
      }
      return dispatch(fetchPlacesFailure(data.errors));
    }).catch(ex => {
      console.log(ex);
      dispatch(fetchPlacesFailure(ex));
    });
  };
}

export const fetchPlacesBegin = () => ({
  type: FETCH_PLACES_BEGIN
});

export const fetchPlacesSuccess = places => ({
  type: FETCH_PLACES_SUCCESS,
  payload: { places }
});

export const fetchPlacesFailure = error => ({
  type: FETCH_PLACES_FAILURE,
  payload: { error }
});
