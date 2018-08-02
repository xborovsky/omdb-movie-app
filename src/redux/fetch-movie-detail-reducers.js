import * as constants from './constants';

const initialState = {
    movie : null,
    loading : true,
    error : null
};

export default function movieDetailReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCH_MOVIE_DETAIL:
            return {...state, loading : true, movie : null, error : null};
        case constants.FETCH_MOVIE_DETAIL_SUCCESS:
            return {...state, loading : false, movie : action.movie};
        case constants.FETCH_MOVIE_DETAIL_ERROR:
            return {...state, loading: false, movie : null, error : action.error};
        default: return state;
    }
};