import { createContext, useContext, useEffect, useState } from 'react';
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

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
  const [loading, setLoading] = useState(true);

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
      console.log(res.headers);
      setIsAuthenticated(true);
      setUser(res.data.data);
    } catch (error) {
      // console.log(error);
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

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      console.log(cookies);

      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        } else {
          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return <AuthContext.Provider value={{ signUp, signIn, loading, user, isAuthenticated, errors }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};
