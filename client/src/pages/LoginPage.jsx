import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <h1 className="text-2xl font-bold">Login</h1>
      {loginErrors.map((error, i) => (
        <p key={`errorn${i}`} className="text-red-500">
          {error}
        </p>
      ))}
      <form onSubmit={loginSubmit}>
        <input type="email" placeholder="email" {...register('email', { required: true })} />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <input type="password" placeholder="password" {...register('password', { required: true })} />
        {errors.password && <p className="text-red-500">Password is required</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
