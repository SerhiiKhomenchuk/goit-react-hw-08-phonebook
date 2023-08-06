import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className="fw-bold fs-4 d-inline-flex  py-1 px-2 text-decoration-none"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="fw-bold fs-4 d-inline-flex  py-1 px-2 text-decoration-none"
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
