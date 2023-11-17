import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useShooter } from '../context/ShootersContext';
import { useEffect } from 'react';
/* import Table from '../components/Table'; */

const ShootersPage = () => {
  const { getShooters, shooters } = useShooter();

  useEffect(() => {
    getShooters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const columns = [
    {
      header: 'ID',
      accessorKey: '_id',
    },
    {
      header: 'Full Name',
      accessorFn: (row) => `${row.lastName} ${row.firsName}`,
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
  ]; */

  return (
    <Layout>
      <section className="dashboard-section">
        <h1>Shooter Section</h1>
        <article className="w-full flex gap-4">
          <Link to={'/shooters/new'} className="add-shooter-btn">
            Create new shooter
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
          {shooters.length === 0 ? (
            <h1>No Shooters</h1>
          ) : (
            shooters.map((shooter) => (
              <Link className="shooter-card" key={shooter._id}>
                {shooter.firstName}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg> */}
              </Link> // add to in the link
            ))
            /* <Table data={shooters} columns={columns}/> */
          )}
        </article>
      </section>
    </Layout>
  );
};

export default ShootersPage;
