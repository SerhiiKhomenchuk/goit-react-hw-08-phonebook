import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className="px-4 py-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      {error && <p className="text-center text-danger">{error}</p>}
    </>
  );
};

export default LoginForm;
