import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Navigation } from './Navigation/Navigation';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
