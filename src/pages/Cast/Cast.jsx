import { getMovieCast } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';
import { Loader } from 'components/Loader/Loader';
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
        error(`Sorry, ${error.message}! Try again)`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [id]);

  return (
    <div>
      <h2>Cast</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {cast.map(({ order, profile_path, name, character }) => (
            <li key={order}>
              <img src={BASE_IMG_URL + profile_path} alt={name} />
              <p> {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;

// {/* <h1>Cast</h1>
// {isLoading ? (
//   <Loader />
// ) : (
//   <ul>
//     {cast.map(person => (
//       <li key={person.id}>
//         <img src={BASE_IMG_URL + person.profile_path} alt={person.name} />
//         <p>{person.name}</p>
//       </li>
//     ))}
//   </ul>
// )} */}
