import { useEffect } from 'react';
import Layout from '../../components/Layout';
import { useAuth } from '../../context/AuthContext';

const ProfilePage = () => {
  const { getProfile, profile } = useAuth();

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <section className="dashboard-section">
        <h1>Profile Section</h1>
        <article>
          <h2>{profile.username}</h2>
          <h2>{profile.password}</h2>
          <h2>{profile.email}</h2>
        </article>
      </section>
    </Layout>
  );
};

export default ProfilePage;
