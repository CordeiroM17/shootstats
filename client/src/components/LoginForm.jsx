import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, errors: loginErrors } = useAuth();

  const loginSubmit = handleSubmit((data) => {
    signIn(data);
  });

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={loginSubmit}>
      <h1>Sign In</h1>

      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <span>or use your account</span>

      {loginErrors.map((error, i) => (
        <p key={`errorn${i}`} className="text-red-500">
          {error}
        </p>
      ))}

      <div className="infield">
        <input type="email" placeholder="Email" name="email" {...register('email', { required: true })} />
        <label></label>
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>

      <div className="infield">
        <input type="password" placeholder="Password" {...register('password', { required: true })} />
        <label></label>
        {errors.password && <p className="text-red-500">Password is required</p>}
      </div>
      <a href="#" className="forgot">Forgot your password?</a>
      <button type="submit">Sign In</button>
    </form>
    </div>
  );
};

export default LoginForm;
