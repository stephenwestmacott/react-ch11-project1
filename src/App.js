import './App.css';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import movieData from './movie-data.js';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(movieData)

  const saveChanges = (index, movie) => {
    const newMovies = [...movies]
    newMovies[index] = movie
    setMovies(newMovies)
  }

  return (
    <main className="container" id='react-container'>
                <section className="columns has-background-light">
                <MovieList movies={ movies }/>
                <div className="column is-half">
                        {movies.map( (movie, index) =>  <MovieForm index={index} key={movie.id} movie={movie} saveChanges={saveChanges}/>)}
                </div>
                </section>
            </main>     
  );
}

export default App;
