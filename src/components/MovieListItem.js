import React from 'react';

const MovieListItem = ({movie}) =>
    <div className="col-12 col-sm-6 col-md-3 movie-list-item">
        <img src={movie.Poster === 'N/A' ? '/img/no-image-available.jpg' : movie.Poster} alt="" className="img-fluid" />
        <div className="text-center align-bottom">
            <strong>{movie.Title}</strong> ({movie.Year})
        </div>
    </div>
;

export default MovieListItem;