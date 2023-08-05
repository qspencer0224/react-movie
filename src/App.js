import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react';

function App() {

  const apiKey= "98e3fb1f"

  const [movie, setMovie] = useState(null)

  const getMovie = async(searchTerm) =>{
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    //----go to the site and search the title

  const data = await response.json()
  // turn info into json format
  setMovie(data);
  // take retrieved data nd set it as current movie
  };

  useEffect(() => {
    getMovie('Clueless');
  }, [])

  //Function that uses async-await to fetch movie data
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
