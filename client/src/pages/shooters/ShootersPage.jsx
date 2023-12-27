import { useEffect } from 'react';
import { useShooter } from '../../context/ShootersContext';
import ShooterCard from '../../components/ShooterCard';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const ShootersPage = () => {
  const { getShooters, shooters } = useShooter();

  useEffect(() => {
    getShooters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <section className="dashboard-section">
        <h1>Shooter Section</h1>

        <article>
          <div>
            <Link to={'/shooters/new'} className="add-shooter-btn">
              Create new shooter
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
          <div className="mt-4">
            {shooters.length === 0 ? (
              <div className='flex justify-center'>
                <h2>No Shooters</h2>
              </div>
            ) : (
              shooters.map((shooter) => <ShooterCard key={shooter._id} shooter={shooter} />)
            )}
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default ShootersPage;
