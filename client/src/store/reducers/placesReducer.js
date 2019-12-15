import {
    FETCH_PLACES_BEGIN,
    FETCH_PLACES_SUCCESS,
    FETCH_PLACES_FAILURE
} from '../actions/placesActions';

const initialState = {
    items: [],
    loading: false,
    errors: null,
};

export default function placesReducer(state = initialState, action){
    switch (action.type){
        case FETCH_PLACES_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null,
            };

        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.places,
            };

        case FETCH_PLACES_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors,
                items: [],
            };
        default:
            return state;
    }
}
