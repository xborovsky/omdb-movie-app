import React from 'react';

const MovieDetail = ({movie}) =>
    <div className="row">
        <div className="col-12">
            <div className="card">
                <h4 className="card-header">{movie.Title}</h4>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <img src={movie.Poster === 'N/A' ? '/img/no-image-available.jpg' : movie.Poster} alt="Movie poster" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <table className="table">
                                <tbody>
                                    {movie.imdbRating !== 'N/A' &&
                                        <tr>
                                            <th>Rating (IMDB)</th>
                                            <td><strong>{movie.imdbRating}</strong>/10 ({movie.imdbVotes} votes)</td>
                                        </tr>
                                    }
                                    <tr>
                                        <th>Year</th>
                                        <td>{movie.Year}</td>
                                    </tr>
                                    {movie.Runtime !== 'N/A' &&
                                        <tr>
                                            <th>Length</th>
                                            <td>{movie.Runtime}</td>
                                        </tr>
                                    }
                                    {movie.Actors !== 'N/A' &&
                                        <tr>
                                            <th>Actors</th>
                                            <td>{movie.Actors}</td>
                                        </tr>
                                    }
                                    <tr>
                                        <th>Genre</th>
                                        <td>{movie.Genre}</td>
                                    </tr>
                                    <tr>
                                        <th>Language</th>
                                        <td>{movie.Language}</td>
                                    </tr>
                                    {movie.Awards !== 'N/A' &&
                                        <tr>
                                            <th>Awards</th>
                                            <td>{movie.Awards}</td>
                                        </tr>
                                    }
                                    {movie.DVD !== 'N/A' &&
                                        <tr>
                                            <th>DVD</th>
                                            <td>{movie.DVD}</td>
                                        </tr>
                                    }
                                    {movie.Director !== 'N/A' &&
                                        <tr>
                                            <th>Director</th>
                                            <td>{movie.Director}</td>
                                        </tr>
                                    }
                                    {movie.Plot !== 'N/A' &&
                                        <tr>
                                            <th>Plot</th>
                                            <td>{movie.Plot}</td>
                                        </tr>
                                    }
                                    {movie.Production !== 'N/A' &&
                                        <tr>
                                            <th>Production</th>
                                            <td>{movie.Production}</td>
                                        </tr>
                                    }
                                    {movie.Website !== 'N/A' &&
                                        <tr>
                                            <th>Website</th>
                                            <td><a href={movie.Website} target="_blank">{movie.Website}</a></td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
;

export default MovieDetail;