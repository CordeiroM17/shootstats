import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createShooterRequest, deleteShooterRequest, getShooterRequest, getShootersRequest, updateShooterRequest } from '../api/shooters';

const ShootersContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useShooter = () => {
  const context = useContext(ShootersContext);
  if (!context) {
    throw new Error('useShooters must be used within an ShootersProvider');
  }
  return context;
};

export function ShootersProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [shooters, setShooters] = useState([]);
  const [errors, setErrors] = useState([]);

  const getShooters = async () => {
    try {
      const res = await getShootersRequest();
      console.log(res.data.data);
      setShooters(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createShooter = async (shooter) => {
    try {
      const res = await createShooterRequest(shooter);

      if (res.status === 201) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      const errorThrow = error.response.data.data;
      setErrors(errorThrow);
    }
  };

  const deleteShooter = async (id) => {
    try {
      const res = await deleteShooterRequest(id);
      if (res.status === 204) {
        setShooters(shooters.filter((shooter) => shooter._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getShooter = async (id) => {
    try {
      const res = await getShooterRequest(id);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateShooter = async (id, shooter) => {
    try {
      await updateShooterRequest(id, shooter);
    } catch (error) {
      console.log(error);
      const errorThrow = error.response.data.data;
      setErrors(errorThrow);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  console.log(errors)

  return <ShootersContext.Provider value={{ shooters, getShooters, getShooter, createShooter, deleteShooter, updateShooter, errors }}>{children}</ShootersContext.Provider>;
}

ShootersProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};
