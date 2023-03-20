import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';


const imgPlaceholder = 'https://www.flaticon.com/ru/free-icon/movie_31087';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
                <im
                  src={
                    movie.poster_path
                      ? BASE_IMG_URL + movie.poster_path
                      : imgPlaceholder
                  }
                  alt={movie.title}
                />
                <p>{movie.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
