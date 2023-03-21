import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (

      <nav className={css.navigation}>
        <NavLink className={css.navHome} to="/">Home</NavLink>
        <NavLink className={css.navMovie} to="/movies">Movies</NavLink>
      </nav>

  );
};
