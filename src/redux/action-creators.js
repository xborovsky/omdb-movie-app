import * as constants from './constants';

export const fetchMovies = (pageNum = 1) => ({
    type : constants.FETCH_MOVIES,
    pageNum
});

export const fetchMoviesSuccess = (movies, totalResults) => ({
    type : constants.FETCH_MOVIES_SUCCESS,
    movies, totalResults
});

export const fetchMoviesError = error => ({
    type : constants.FETCH_MOVIES_ERROR,
    error
});

export const search = searchText => ({
    type : constants.DO_SEARCH,
    searchText
});

export const fetchMovieDetail = (id) => ({
    type : constants.FETCH_MOVIE_DETAIL,
    id
});

export const fetchMovieDetailSuccess = movie => ({
    type : constants.FETCH_MOVIE_DETAIL_SUCCESS,
    movie
});

export const fetchMovieDetailError = error => ({
    type : constants.FETCH_MOVIE_DETAIL_ERROR,
    error
});