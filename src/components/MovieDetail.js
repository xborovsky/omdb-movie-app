import React from 'react';
import { translate } from 'react-i18next';

const MovieDetail = ({movie, t}) =>
    <div className="row">
        <div className="col-12">
            <div className="card">
                <h4 className="card-header">{movie.Title}</h4>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src={movie.Poster === 'N/A' ? '/img/no-image-available.jpg' : movie.Poster} alt={t('poster.title')} className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-8">
                            <table className="table">
                                <tbody>
                                    {movie.Ratings && movie.Ratings.length &&
                                        <tr>
                                            <th>{t('movie.detail.rating')}</th>
                                            <td>
                                                { movie.Ratings.map(rating =>
                                                    <div key={rating.Source}>
                                                        {rating.Source}: <strong>{rating.Value}</strong>
                                                    </div>
                                                ) }
                                            </td>
                                        </tr>
                                    }
                                    <tr>
                                        <th>{t('movie.detail.year')}</th>
                                        <td>{movie.Year}</td>
                                    </tr>
                                    {movie.Runtime !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.length')}</th>
                                            <td>{movie.Runtime}</td>
                                        </tr>
                                    }
                                    {movie.Actors !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.actors')}</th>
                                            <td>{movie.Actors}</td>
                                        </tr>
                                    }
                                    <tr>
                                        <th>{t('movie.detail.genre')}</th>
                                        <td>{movie.Genre}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('movie.detail.language')}</th>
                                        <td>{movie.Language}</td>
                                    </tr>
                                    {movie.Awards !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.awards')}</th>
                                            <td>{movie.Awards}</td>
                                        </tr>
                                    }
                                    {movie.DVD !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.dvd')}</th>
                                            <td>{movie.DVD}</td>
                                        </tr>
                                    }
                                    {movie.Director !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.director')}</th>
                                            <td>{movie.Director}</td>
                                        </tr>
                                    }
                                    {movie.Plot !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.plot')}</th>
                                            <td>{movie.Plot}</td>
                                        </tr>
                                    }
                                    {movie.Production !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.production')}</th>
                                            <td>{movie.Production}</td>
                                        </tr>
                                    }
                                    {movie.Website !== 'N/A' &&
                                        <tr>
                                            <th>{t('movie.detail.website')}</th>
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

export default translate('translations')(MovieDetail);