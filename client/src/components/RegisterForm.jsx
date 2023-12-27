import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

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

  const registerSubmit = handleSubmit(async (data) => {
    signUp(data);
    Swal.fire({
      icon: 'success',
      title: 'User created',
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 2000,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate('/login');
      }
    });
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

      <div className="infield">
        {errors.username && <p>Username is required</p>}
        <input type="text" placeholder="Username" {...register('username', { required: true })} />
        <label></label>
      </div>
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
      <button className="btn-form bg-primary-300" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
