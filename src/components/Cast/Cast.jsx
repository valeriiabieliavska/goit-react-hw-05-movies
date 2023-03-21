import { getMovieCast } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';
import { Loader } from 'components/Loader/Loader';
import placeholder from '../../image/placeholder2.jpg';
import css from './Cast.module.css';
import toast, { Toaster } from 'react-hot-toast';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieCast = async () => {
      try {
        const movieCast = await getMovieCast(id);
        setCast(movieCast);
      } catch (error) {
        console.log(error);
        toast.error(`Sorry, ${error.message}! Try again)`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.castList}>
          {cast.map(({ order, profile_path, name, character }) => (
            <li className={css.castItem} key={order}>
              <img
                className={css.castImg}
                src={profile_path ? BASE_IMG_URL + profile_path : placeholder}
                alt={name}
                width="200"
              />
              <p className={css.castDesc}>
                {' '}
                {name} {character && <span>in the role {character}</span>}
              </p>
            </li>
          ))}
        </ul>
      )}
      <Toaster />
    </div>
  );
};

export default Cast;
