import { fetchMovies, fetchMoviesSuccess, fetchMoviesError,
    search,
    fetchMovieDetail, fetchMovieDetailSuccess, fetchMovieDetailError } from './action-creators';
import { searchMovies, movieDetail } from '../api/api';
import { storageManager, SEARCH_TEXT_KEY, SEARCH_PAGE_NUM } from '../utils/storage-manager';

export function doFetchMovies(searchText, page) {
    return dispatch => {
        dispatch(fetchMovies(page));
        return searchMovies(searchText, page)
            .then(res => {
                if (res.Response === 'False') {
                    throw new Error(res.Error);
                }
                dispatch(fetchMoviesSuccess(res.Search, res.totalResults));
            }).catch(error => dispatch(fetchMoviesError(error)));
    };
}

let timeoutId = null;

export function doSearch(searchText, page) {
    storageManager.setToSessionStorage(SEARCH_TEXT_KEY, searchText);
    storageManager.setToSessionStorage(SEARCH_PAGE_NUM, page);
    return dispatch => {
        dispatch(search(searchText));
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (searchText && searchText.trim().length) {
            timeoutId = setTimeout(() => {
                dispatch(doFetchMovies(searchText, page || 1));
            }, 300);
        } else {
            dispatch(fetchMoviesSuccess([], 0));
        }
    };
}

export function doFetchMovieDetail(id) {
    return dispatch => {
        dispatch(fetchMovieDetail(id));
        return movieDetail(id)
            .then(res => {
                if (res.Response === 'False') {
                    throw new Error(res.Error);
                }
                dispatch(fetchMovieDetailSuccess(res));
            }).catch(error => dispatch(fetchMovieDetailError(error)));
    };
}