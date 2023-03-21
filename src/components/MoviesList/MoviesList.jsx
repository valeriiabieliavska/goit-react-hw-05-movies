import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../image/placeholder.jpg';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieItem}>
          <Link
            className={css.movieLink}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              className={css.movieImg}
              src={
                movie.poster_path
                  ? BASE_IMG_URL + movie.poster_path
                  : placeholder
              }
              alt={movie.title}
              width="300"
            />
            <p className={css.movieTitle}>{movie.title}</p>
            <p className={css.movieRating}>
              {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
