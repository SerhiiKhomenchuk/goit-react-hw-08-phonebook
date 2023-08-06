import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className="navbar-brand " to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="navbar-brand " to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
