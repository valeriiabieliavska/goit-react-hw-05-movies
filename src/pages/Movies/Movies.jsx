import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    getMoviesByQuery(searchQuery).then(setMovies);
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};
