import { useForm } from 'react-hook-form';
import { useShooter } from '../context/ShootersContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ShooterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { createShooter, getShooter, updateShooter, errors: shooterErrors } = useShooter();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadShooter() {
      if (params.id) {
        const shooter = await getShooter(params.id);
        console.log(shooter);
        setValue('firstName', shooter.firstName);
        setValue('lastName', shooter.lastName);
        setValue('age', shooter.age);
      }
    }
    loadShooter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    shooterErrors.map((error) =>
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

  const shooterSubmit = handleSubmit(async (data) => {
    data = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: parseInt(data.age),
    };

    if (params.id) {
      updateShooter(params.id, data);
      Swal.fire({
        icon: 'success',
        title: 'Shooter edited',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2000,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate('/shooters');
        }
      });
    } else {
      createShooter(data);
      Swal.fire({
        icon: 'success',
        title: 'Shooter created',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2000,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate('/shooters');
        }
      });
    }
  });

  return (
    <article className="flex justify-center items-center">
      <form className="gap-4" onSubmit={shooterSubmit}>
        <div className="flex gap-4 w-full justify-between">
          <div className=" infield">
            {errors.firstName && <p>First Name is required</p>}
            <input className="w-2/4" type="text" placeholder="First Name" {...register('firstName', { required: true })} autoFocus/>
            <label></label>
          </div>
          <div className="infield">
            {errors.lastName && <p>Last Name is required</p>}
            <input className="w-2/4" type="text" placeholder="Last Name" {...register('lastName', { required: true })}/>
            <label></label>
          </div>
        </div>
        <div className="infield">
          {errors.age && <p>Age is required</p>}
          <input type="number" placeholder="Age" {...register('age', { required: true })}/>
          <label></label>
        </div>
        <button className="btn-form bg-primary-300">Save</button>
      </form>
    </article>
  );
};

export default ShooterForm;
