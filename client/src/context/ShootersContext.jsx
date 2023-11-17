import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { createShooterRequest, getShootersRequest } from '../api/shooters';

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

  const getShooters = async () => {
    try {
      const res = await getShootersRequest();
      console.log(res.data.data)
      setShooters(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createShooter = async (shooter) => {
    const res = await createShooterRequest(shooter);
    console.log(res);
  };

  return <ShootersContext.Provider value={{ shooters, createShooter, getShooters }}>{children}</ShootersContext.Provider>;
}

ShootersProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};
