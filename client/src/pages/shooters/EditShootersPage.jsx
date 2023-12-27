import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import ShooterForm from '../../components/ShooterForm';
import { useEffect } from 'react';
import { useShooter } from '../../context/ShootersContext';

const EditShootersSection = () => {
  const { getShooter } = useShooter();
  const params = useParams();

  useEffect(() => {
    async function loadShooterToEdit() {
      if (params.id) {
        const shooter = await getShooter(params.id);
        console.log(shooter);
      }
    }
    loadShooterToEdit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-section-title">
          <Link to={'/shooters'} className="cursor-pointer text-text-300 text-xl text-left font-bold mt-0 mb-5">
            Shooter Section
          </Link>
          <h2> {'<'} Edit Shooter</h2>
        </div>
        <ShooterForm />
      </section>
    </Layout>
  );
};

export default EditShootersSection;
