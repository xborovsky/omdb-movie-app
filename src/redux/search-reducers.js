import { DO_SEARCH } from "./constants";

const initialState = {
    searchText : ''
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case DO_SEARCH: {
            return {...state, searchText : action.searchText};
        }
        default: return state;
    }
}