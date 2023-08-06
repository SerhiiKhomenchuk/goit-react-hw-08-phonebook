import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import PropTypes from 'prop-types';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
