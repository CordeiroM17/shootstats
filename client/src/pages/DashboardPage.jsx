import Layout from '../components/Layout';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between items-center">
        <h2 className="font-bold text-xl">Welcome, user</h2>
        <div className="flex bg-gray-300 gap-1 text-black items-center rounded-lg">
          <span className="py-1 px-2 font-bold">Gola</span>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
