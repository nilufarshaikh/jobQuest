import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import JobSearchForm from "../components/JobSearchForm";

const Dashboard = () => {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-12 px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl font-bold mb-6">Job List</h2>
          <JobSearchForm />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
