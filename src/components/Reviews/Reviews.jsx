import { getMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './Reviews.module.css';
import toast, { Toaster } from 'react-hot-toast';
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
        toast.error(`Sorry, ${error.message}! Try again)`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.reviewsList}>
          {reviews.length !== 0 ? (
            reviews.map(review => (
              <li className={css.reviewsItem} key={review.id}>
                <p className={css.nameAuthor}>
                  <span className={css.text}>Author: </span>
                  {review.author}
                </p>
                <p className={css.reviewsDesc}> {review.content}</p>
              </li>
            ))
          ) : (
            <p className={css.errorMessage}>Sorry, no reviews yet!</p>
          )}
        </ul>
      )}
      <Toaster />
    </div>
  );
};
export default Reviwes;
