import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink className="navbar-brand" to="/register">
        Register
      </NavLink>
      <NavLink className="navbar-brand" to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
