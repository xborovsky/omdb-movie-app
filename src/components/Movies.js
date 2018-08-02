import React from 'react';
import MovieListItem from './MovieListItem';
import { NavLink } from 'react-router-dom';

const Movies = ({movies}) =>
    movies ?
        <div className="row">
            {movies.map((movie) => (
                <NavLink to={`/movie/${movie.imdbID}`} key={movie.imdbID} style={{display: 'contents'}}>
                    <MovieListItem movie={movie} />
                </NavLink>
            ))}
        </div> : null
;

export default Movies;