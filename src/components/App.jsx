import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('../pages/HomePage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        >
          Register
        </Route>
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Contacts />}
            ></PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
