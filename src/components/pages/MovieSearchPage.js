import React, { Component } from 'react';
import Search from '../Search';
import Movies from '../Movies';
import Loader from '../common/Loader';
import { connect } from 'react-redux';
import Button from '../common/Button';
import ElementWrapper from '../common/ElementWrapper';
import { doFetchMovies, doSearch } from '../../redux/actions';
import { storageManager, SEARCH_TEXT_KEY, SEARCH_PAGE_NUM } from '../../utils/storage-manager';
import Alert from '../common/Alert';

class MovieSearchPage extends Component {
    componentDidMount() {
        const searchTextFromStorage = storageManager.getFromSessionStorage(SEARCH_TEXT_KEY);
        if (searchTextFromStorage) {
          this.props.onSearch(searchTextFromStorage, storageManager.getFromSessionStorage(SEARCH_PAGE_NUM));
        }
        this.focus();
      }

      focus = () => this.itemRef.focus();

      inputRef = (ref) => this.itemRef = ref;

      loadNextHandler = () => {
        const { onLoadNextResults, currentPage, searchText } = this.props;
        onLoadNextResults(searchText, currentPage + 1);
      };

      render() {
        const { loading, movies, totalResults, searchText, onSearchTextChange, error } = this.props;

        return (
          <div className="container">
            <Search inputRef={this.inputRef} searchText={searchText} onSearchTextChange={onSearchTextChange} />
            <ElementWrapper>
                <Movies movies={movies} />
                {
                  movies.length > 0 && movies.length < totalResults ?
                    <Button type="button" value="Load more..." classNames="btn btn-primary" onClick={this.loadNextHandler} /> :
                    null
                }
              </ElementWrapper>
            {loading ?
              <Loader /> :
              null
            }
            { error && <Alert type="danger" heading="Ooops, and error occured!" message={error.message} /> }
          </div>
        );
    }
}

const mapStateToProps = state => ({
    loading : state.movieReducer.loading,
    movies : state.movieReducer.movies,
    totalResults : state.movieReducer.totalResults,
    currentPage : state.movieReducer.currentPage,
    searchText : state.searchReducer.searchText,
    error : state.movieReducer.error
});

const mapDispatchToProps = dispatch => ({
    onLoadNextResults : (searchText, pageNum) => dispatch(doFetchMovies(searchText, pageNum)),
    onSearch : (searchText, page) => dispatch(doSearch(searchText, page)),
    onSearchTextChange : (e) => {dispatch(doSearch(e.target.value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchPage);
