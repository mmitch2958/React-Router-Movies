

import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div> <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={(props) => {
          return (<Movie {...props} />)
        }}/>
          </div>
    </div>
  );
};

export default App;
