import React, { useState, useEffect,useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoding, setIsloding] = useState(false)
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsloding(true)
    setError(null)
    try {
      const response = await fetch("https://react-http-4b760-default-rtdb.europe-west1.firebasedatabase.app/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong!")
      }
      const data = await response.json();
      const loadedMovies = [];
      for(const key in data) {
        const movie = data[key]
        loadedMovies.push({
          id: key,
          title: movie.title,
          releaseDate:movie.releaseDate,
          openingText:movie.openingText,
        })
      }
      setMovies(loadedMoviescd)

    } catch (error) {
      setError(error.message)
    }
    setIsloding(false)
  },[])
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  const addMovieHandler = async (movie) =>{
    const response = await fetch("https://react-http-4b760-default-rtdb.europe-west1.firebasedatabase.app/movies.json",{
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }
  
  let content = <p >Found no movies.</p>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p style={{ color: "red" }}>{error}</p>
  }
  if (isLoding) {
    content = <p>Loading....</p>
  }

  return (
    <React.Fragment>
       <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;