import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    getMoviesByQuery(searchQuery)
      .then(setMovies)
      .finally(() => {
        setIsLoading(false);
        setQuery(searchQuery);
      });
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    setSearchParams({ query });
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
