export const FETCH_PLACES_BEGIN = "FETCH_PLACES_BEGIN";
export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";
export const FETCH_PLACES_FAILURE = "FETCH_PLACES_FAILURE";

function getPlaces() {
  return fetch("/places")
    .then(handleErrors)
    .then(res => res.json());
}

function fakeGetPlaces() {
  return new Promise(resolve => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          places: [
            {
              id: 0,
              name: "Apple"
            },
            {
              id: 1,
              name: "Bananas"
            },
            {
              id: 2,
              name: "Strawberries"
            }
          ]
        }),
      1000
    );
  });
}

export function fetchPlaces() {
  return dispatch => {
    dispatch(fetchPlacesBegin());
    return fakeGetPlaces()
      .then(json => {
        dispatch(fetchPlacesSuccess(json.places));
        return json.places;
      })
      .catch(error => dispatch(fetchPlacesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
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
