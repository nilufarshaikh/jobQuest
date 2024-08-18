import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="bg-base-200">
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6 b">
        {/* <img src={Logo} alt="Logo" /> */}
        <h2 className="text-2xl font-bold text-primary">
          <Link to="/">JobQuest</Link>
        </h2>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Track Your Career Journey
          </h1>
          <p className="leading-loose max-w-md mt-4 ">
            Stay on Top of Your Job Search - The Easy Way to Manage Your Job
            Search Efforts.
          </p>
          <Link to="/dashboard">
            <button className="btn btn-primary mt-4">Get Started</button>
          </Link>
        </div>
        <img
          src={LandingImg}
          alt="Landing Image"
          className="hidden lg:block rounded-lg"
        />
      </section>
    </main>
  );
};

export default HomePage;
