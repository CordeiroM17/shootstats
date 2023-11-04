import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, errors: loginErrors } = useAuth();

  const loginSubmit = handleSubmit((data) => {
    signIn(data);
  });

  useEffect(() => {
    loginErrors.map((error) =>
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: `${error}`,
        toast: true,
        showConfirmButton: false,
        timer: 5000,
      })
    );
  });

  return (
    <main>
      <section className="login-container">
        <div className="panel">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <Link className="btn-panel" to={'/register'}>
            Create accont
          </Link>
        </div>
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

          <div className="infield">
            {errors.email && <p>Email is required</p>}
            <input type="email" placeholder="Email" name="email" {...register('email', { required: true })} />
            <label></label>
          </div>

          <div className="infield">
            {errors.password && <p>Password is required</p>}
            <input type="password" placeholder="Password" {...register('password', { required: true })} />
            <label></label>
          </div>
          <a href="#" className="forgot">
            Forgot your password?
          </a>
          <button className="btn-form" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
