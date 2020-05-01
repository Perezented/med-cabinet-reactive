import { combineReducers } from 'redux';

const initialState = {
    strains: [],
    error: '',
    isFetching: false,
};
const FetchingStrainsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STRAINS_START':
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case 'FETCH_STRAINS_SUCCESS':
            return {
                ...state,
                strains: action.payload,
                error: '',
                isFetching: false,
            };
        case 'FETCH_STRAINS_FAILURE':
            return {
                ...state,
                error: action.payolad,
                isFetching: false,
            };
        default:
            return state;
    }
};
export const rootReducer = combineReducers({
    FetchingStrainsReducer: FetchingStrainsReducer,
});
