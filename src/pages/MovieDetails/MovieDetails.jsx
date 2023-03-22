import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { BASE_IMG_URL } from 'services/constants';
import css from './MovieDetails.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import placeholder from '../../image/placeholder.jpg';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoBack = () => {
    navigate(location.state.from);
  };



  useEffect(() => {
    setIsLoading(true);
    const fetchDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setDetails(movieDetails);
      } catch (error) {
        toast.error(`Oh boy, it's ${error.message}! Please try again!`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (!details) {
    return null;
  }
  return (
    <div className={css.detailsContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <button
            className={css.buttonGoBack}
            type="button"
            onClick={handleGoBack}
          >
            Go back
          </button>
          <div className={css.moviesCard}>
            <img
              className={css.moviesImg}
              src={
                details.poster_path
                  ? BASE_IMG_URL + details.poster_path
                  : placeholder
              }
              alt={details.title}
              width="400"
            />
            <div className={css.moviesDesc}>
              <h2 className={css.moviesTitle}>
                {details.title}
                <span> {new Date(details.release_date).getFullYear()}</span>
              </h2>
              <p className={css.desc}>
                User Score: {Math.round(details.vote_average * 10)} %
              </p>
              <h3 className={css.subtitle}>Overview</h3>
              <p className={css.desc}>{details.overview}</p>
              <h3 className={css.subtitle}>Genres</h3>
              {details.genres &&
                details.genres.map(genre => genre.name).join(', ')}
            </div>
            <div>
              <ul className={css.detailsList}>
                <li className={css.moviesItem}>
                  <Link
                    className={css.moviesLink}
                    to="cast"
                    state={{ from: location.state.from }}
                  >
                    Cast
                  </Link>
                </li>
                <li className={css.moviesItem}>
                  <Link
                    className={css.moviesLink}
                    to="reviews"
                    state={{ from: location.state.from }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MovieDetails;
