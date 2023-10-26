import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
        <input type="text" {...register('username', { required: true })} />
        <input type="email" {...register('email', { required: true })} />
        <input type="password" {...register('password', { required: true })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
