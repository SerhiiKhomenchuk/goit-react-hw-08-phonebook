import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="px-4 py-3">
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormUsername1" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="exampleDropdownFormUsername1"
            placeholder="Username"
            name="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      {error && <p className="text-center text-danger">{error}</p>}
    </>
  );
};

export default RegisterForm;
