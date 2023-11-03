/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  // console.log(registerErrors);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  const registerSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
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

      {registerErrors.map((error, i) => (
        <p key={`errorn${i}`} className="text-red-500">
          {error}
        </p>
      ))}

      <div className="infield">
        <input type="text" placeholder="Username" {...register('username', { required: true })} />
        <label></label>
        {errors.username && <p className="text-red-500">username is required</p>}
      </div>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterPage;
