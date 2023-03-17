import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { BASE_IMG_URL } from 'services/constants';

export const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id).then(setDetails);
  }, [id]);

  if (!details) {
    return null;
  }
  return (
    <div>
      <h1>{details.title}</h1>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <img src={BASE_IMG_URL + details.poster_path} alt="" width="300" />
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};
