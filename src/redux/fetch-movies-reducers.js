import * as constants from './constants';

const initialState = {
    movies : [],
    loading : false,
    error : null,
    totalResults : 0,
    currentPage : 1
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCH_MOVIES:
            return {...state,
                loading : true,
                error : null,
                totalResults : 0,
                currentPage : action.pageNum,
                movies : action.pageNum === state.currentPage ? [] : state.movies};
        case constants.FETCH_MOVIES_SUCCESS:
            return {...state,
                loading : false,
                movies : action.movies.length ? [...state.movies, ...action.movies] : [],
                error : null,
                totalResults : parseInt(action.totalResults, 0)};
        case constants.FETCH_MOVIES_ERROR:
            return {...state,
                loading : false,
                movies : [],
                error : action.error,
                totalResults : 0};
        default : return state;
    }
};