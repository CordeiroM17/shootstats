import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import ShooterForm from '../../components/ShooterForm';

const CreateShootersSection = () => {
  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-section-title">
          <Link to={'/shooters'} className="cursor-pointer text-text-300 text-xl text-left font-bold mt-0 mb-5">
            Shooter Section
          </Link>
          <h2> {'<'} Create Shooter</h2>
        </div>
        <ShooterForm />
      </section>
    </Layout>
  );
};

export default CreateShootersSection;
