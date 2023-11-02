import { createContext, useContext, useEffect, useState } from 'react';
import { loginRequest, registerRequest } from '../api/auth';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signUp = async (userData) => {
    try {
      const res = await registerRequest(userData);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      // console.log(error)
      const errorThrow = error.response.data.data;
      setErrors(errorThrow);
    }
  };

  const signIn = async (userData) => {
    try {
      const res = await loginRequest(userData);
      console.log(res);
    } catch (error) {
      console.log(error);
      const errorThrow = error.response.data.data;
      setErrors(errorThrow);
    }
  };

  // Delete errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return <AuthContext.Provider value={{ signUp, signIn, user, isAuthenticated, errors }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};
