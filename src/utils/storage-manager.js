export const SEARCH_TEXT_KEY = 'omdb-search-text';
export const SEARCH_PAGE_NUM = 'omdb-search-page-num';
export const LANGUAGE = 'omdb-language';

export const storageManager = {
    getFromSessionStorage : (key) => sessionStorage.getItem(key),

    setToSessionStorage : (key, value) => {
        if (!value || !value.length) {
            sessionStorage.removeItem(key);
        } else {
            sessionStorage.setItem(key, value);
        }
    }
};