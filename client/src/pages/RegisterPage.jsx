/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div>
      <p className="text-black">Please complete with your information</p>
      {registerErrors.map((error, i) => (
        <p key={`errorn${i}`} className="text-red-500">
          {error}
        </p>
      ))}
      <form onSubmit={registerSubmit}>
        <input type="text" placeholder="text" {...register('username', { required: true })} />
        {errors.username && <p className="text-red-500">username is required</p>}
        <input type="email" placeholder="email" {...register('email', { required: true })} />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <input type="password" placeholder="password" {...register('password', { required: true })} />
        {errors.password && <p className="text-red-500">Password is required</p>}
        <button type="submit">Register</button>
      </form>
      <p>
        <Link to="/login">Sign Up</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
