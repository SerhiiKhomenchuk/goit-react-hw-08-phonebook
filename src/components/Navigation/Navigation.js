import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        className="fw-bold fs-4 d-inline-flex  py-1 px-2 text-decoration-none  "
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className="fw-bold fs-4 d-inline-flex  py-1 px-2 text-decoration-none "
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
