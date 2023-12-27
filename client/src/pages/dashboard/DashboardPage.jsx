import Layout from '../../components/Layout';
import { useAuth } from '../../context/AuthContext';

const DashboardPage = () => {

  const {user} = useAuth()

  console.log(user)


  return (
    <Layout>
      <div className="dashboard-section">
        <h1>Welcome {user.username}</h1>
         <div className="flex bg-gray-300 gap-1 text-black items-center rounded-lg">
          <span className="py-1 px-2 font-bold">Hello</span>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
