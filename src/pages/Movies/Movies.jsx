import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import css from './Movies.module.css';
import toast, { Toaster } from 'react-hot-toast';

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
    setIsLoading(true);
    getMoviesByQuery(searchQuery)
      .then(setMovies)
      .catch(error => {
        toast.error('Error fetching movies!');
        console.error(error);
      })
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
      <form onSubmit={handleSubmit} className={css.formMovies}>
        <input
          className={css.inputMovies}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <button className={css.buttonMovies} type="submit">
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      <Toaster />
    </div>
  );
};

export default Movies;
