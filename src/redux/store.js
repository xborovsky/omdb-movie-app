import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './fetch-movies-reducers';
import searchReducer from './search-reducers';
import movieDetailReducer from './fetch-movie-detail-reducers';

function configureStore() {
    return createStore(
        combineReducers({
            movieReducer,
            searchReducer,
            movieDetailReducer
        }),
        applyMiddleware(thunk)
    );
}

const store = configureStore();

export default store;