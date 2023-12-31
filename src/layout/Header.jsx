import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Header;
