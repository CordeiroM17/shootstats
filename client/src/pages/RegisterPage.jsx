/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  // console.log(registerErrors);

  useEffect(() => {
    if (isAuthenticated) {
      // Hacer que se pueda volver, como en ProtectedRoute que usa replace
      navigate('/login');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    registerErrors.map((error) =>
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

  const registerSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <main>
      <section className="register-container">
        <div className="panel">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <Link className="btn-panel" to={'/login'}>
            Sign Up
          </Link>
        </div>
        <form onSubmit={registerSubmit}>
          <h1>Create Account</h1>

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

          <span>or use your email for registration</span>

          <div className="infield">
            <input type="text" placeholder="Username" {...register('username', { required: true })} />
            <label></label>
          </div>
          <div className="infield">
            <input type="email" placeholder="Email" name="email" {...register('email', { required: true })} />
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" {...register('password', { required: true })} />
            <label></label>
          </div>
          <button className="btn-form" type="submit">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;
