/* eslint-disable react-hooks/exhaustive-deps */import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage = () => {

  return (
    <main>
      <section className="register-container">
        <div className="panel">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <Link className="btn-panel" to={'/login'}>
            Sign Up
          </Link>
        </div>
        <RegisterForm />
      </section>
    </main>
  );
};

export default RegisterPage;
