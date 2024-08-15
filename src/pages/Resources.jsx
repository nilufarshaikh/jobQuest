import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Resources = () => {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">Resources Page</div>
      </div>
    </main>
  );
};

export default Resources;
