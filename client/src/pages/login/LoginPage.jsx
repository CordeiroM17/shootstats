import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <main>
      <section className="login-container">
        <div className="panel">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <Link className="btn-panel" to={'/register'}>
            Create accont
          </Link>
        </div>
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
