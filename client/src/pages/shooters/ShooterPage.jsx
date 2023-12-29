import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const ShooterPage = () => {
  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-section-title">
          <Link to={'/shooters'} className="cursor-pointer text-text-300 text-xl text-left font-bold mt-0 mb-5">
            Shooter Section
          </Link>
          <h2> {'<'} Agregar nombre del shooter</h2>
        </div>
      </section>
    </Layout>
  );
};

export default ShooterPage;
