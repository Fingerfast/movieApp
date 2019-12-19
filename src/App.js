import React from 'react';
import './App.css';
import CatalogMovies from "./containers/CatalogMovies/CatalogMovies";

const imageDomainSource = 'http://image.tmdb.org/t/p/w342/';
const popularMoviesResource = "https://api.themoviedb.org/3/movie/popular?api_key=2d2b4585cf1acf76d22f4e95451fd75e";

function App() {
  return (
    <div className="App">
        <CatalogMovies url={popularMoviesResource} imageDomain={imageDomainSource}/>
    </div>
  );
}

export default App;
