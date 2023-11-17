import { useForm } from 'react-hook-form';
import { useShooter } from '../context/ShootersContext';
import { useNavigate } from 'react-router-dom';

const ShooterForm = () => {
  const { register, handleSubmit } = useForm();
  const { createShooter } = useShooter();
  const navigate = useNavigate()

  const shooterSubmit = handleSubmit(async (data) => {
    createShooter(data);
    navigate('/shooters')
  });

  return (
    <div>
      <form onSubmit={shooterSubmit}>
        <input type="text" placeholder="First Name" {...register('firstName', { require: true })} autoFocus />
        <input type="text" placeholder="Last Name" {...register('lastName', { require: true })} />
        <input type="number" placeholder="Age" {...register('age', { require: true })} />
        <button>Create Shooter</button>
      </form>
    </div>
  );
};

export default ShooterForm;
