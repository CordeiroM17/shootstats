import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {

  const {user} = useAuth()

  console.log(user)

  return (
    <Layout>
      <section className=" dashboard-section">
        <h1>Welcome {user.username}</h1>
        {/* <div className="flex bg-gray-300 gap-1 text-black items-center rounded-lg">
          <span className="py-1 px-2 font-bold">Gola</span>
        </div> */}
      </section>
    </Layout>
  );
};

export default DashboardPage;
