import axios from 'axios';

export const API_KEY = 'd99bf8d8';
const BASE_URL = `http://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = (searchText, page = 1) => {
    return axios.get(`${BASE_URL}&s=${searchText}&r=json&page=${page}&type=movie`)
        .then(res => res.data);
};

export const movieDetail = (id) => {
    return axios.get(`${BASE_URL}&i=${id}`)
        .then(res => res.data);
};