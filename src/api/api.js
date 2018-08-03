import axios from 'axios';

export const API_KEY = 'd99bf8d8';
const BASE_URL = `http://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=${API_KEY}`;

let source = axios.CancelToken.source();

export const searchMovies = (searchText, page = 1) => {
    source.cancel();
    source = axios.CancelToken.source();
    return axios.get(`${BASE_URL}&s=${searchText}&r=json&page=${page}&type=movie`, {
        cancelToken: source.token
      })
      .then(res => res.data)
      .catch(thrown => {
          if (axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message);
          }
      });
};

export const movieDetail = (id) => {
    return axios.get(`${BASE_URL}&i=${id}`)
        .then(res => res.data);
};