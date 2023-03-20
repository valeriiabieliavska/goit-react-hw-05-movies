import { getMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
// import { BASE_IMG_URL } from 'services/constants';

const Reviwes = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(id);
        setReviews(movieReviews);
      } catch (error) {
        console.error(error);
        error(`Sorry, ${error.message}! Try again)`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
           {isLoading ? (
        <Loader />
      ) : (
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>
                <span>Author: </span>
                {review.author}
              </p>
              <p> {review.content}</p>
            </li>
          ))
        ) : (
          <p>Sorry, no reviews yet!</p>
        )}
          </ul>
          )}
    </div>
  );
};
export default Reviwes;
