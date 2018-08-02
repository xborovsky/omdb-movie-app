import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElementWrapper from '../common/ElementWrapper';
import MovieDetail from '../MovieDetail';
import Loader from '../common/Loader';
import { doFetchMovieDetail } from '../../redux/actions';
import BreadCrumb from '../common/BreadCrumb';
import Alert from '../common/Alert';
import { translate } from 'react-i18next';

class MovieDetailPage extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchMovieDetail(id);
    }

    render() {
        const { movie, loading, error, t } = this.props;
        const breadCrumbItems = !loading && movie && [{
            name : t('breadcrumb.movies'),
            link : '/'
        }, {
            name : movie.Title,
            active : true
        }];

        return (
            error ? <Alert type="danger" heading={t('error.heading')} message={error.message} /> :
                loading ?
                    <Loader /> :
                    <ElementWrapper>
                        <BreadCrumb items={breadCrumbItems}></BreadCrumb>
                        <MovieDetail movie={movie} />
                    </ElementWrapper>
        );
    }
}

const mapStateToProps = state => ({
    movie : state.movieDetailReducer.movie,
    loading : state.movieDetailReducer.loading,
    error : state.movieDetailReducer.error,
});

const mapDispatchToProps = dispatch => ({
    fetchMovieDetail : id => dispatch(doFetchMovieDetail(id))
});

export default translate('translations')(connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage));