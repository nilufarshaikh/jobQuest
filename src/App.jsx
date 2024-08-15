import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ListJobs from "./pages/ListJobs";
import Resources from "./pages/Resources";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/list-jobs" element={<ListJobs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
