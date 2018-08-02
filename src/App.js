import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import MovieSearchPage from './components/pages/MovieSearchPage';
import MovieDetailPage from './components/pages/MovieDetailPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/' component={MovieSearchPage} />
          <Route path='/movie/:id' component={MovieDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
