import { createContext, useContext, useEffect, useState } from 'react';
import { loginRequest, logoutRequest, registerRequest, verifyTokenRequest } from '../api/auth';
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
      console.log(error);
      const errorThrow = error.response.data.data;
      setErrors(errorThrow);
    }
  };

  const signIn = async (userData) => {
    try {
      const res = await loginRequest(userData);
      console.log(res);
      setIsAuthenticated(true);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
      const errorThrow = error.response.data.data;
      setErrors(errorThrow);
    }
  };

  const logout = async () => {
    await logoutRequest()
    setIsAuthenticated(false);
    setUser(null)
  }

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

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);

        if (!res.data.data) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return <AuthContext.Provider value={{ signUp, signIn, logout, loading, user, isAuthenticated, errors }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};
