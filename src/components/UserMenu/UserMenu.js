import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import defaultAvatar from './defaultAvatar.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUser);

  return (
    <div className="d-flex justify-content-center align-items-end gap-2 ">
      <img src={defaultAvatar} alt="user avatar" width="32" />
      <span className="mb-0">
        Welcome, <b className="fs-4">{username.name}</b>
      </span>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
