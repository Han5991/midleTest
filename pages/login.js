import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { usersRepo } from 'helpers';
import { Link } from '../components';

export default Login;

function Login() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('email is required'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    usersRepo.login(data);
  }

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="alert alert-info">
        Email: rewq985@rustvale.com
        <br />
        Password: 123456
      </div>
      <div className="card">
        <h4 className="card-header">Superjoin-business Login</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="text"
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register('password')}
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary mr-3"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Login
            </button>
            <Link href="/users/add" className="btn btn-success">
              Add User
            </Link>
            {errors.apiError && (
              <div className="alert alert-danger mt-3 mb-0">
                {errors.apiError?.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
