import { useEffect, useState } from "react";
import JobListing from "../components/JobListing";

const JobSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("all");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [results, setResults] = useState([]);

  const jobData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Company",
      status: "Applied",
      date: "2024-08-12",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "XYZ Company",
      status: "Interviewing",
      date: "2024-08-15",
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company: "PQR Company",
      status: "Applied",
      date: "2024-08-17",
    },
  ];

  const filterResults = () => {
    const filtered = jobData.filter((job) => {
      const isKeywordMatch =
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase());
      const isStatusMatch = status === "all" || job.status === status;
      const isDateMatch =
        dateRange.start && dateRange.end
          ? job.date >= dateRange.start && job.date <= dateRange.end
          : true;

      return isKeywordMatch && isStatusMatch && isDateMatch;
    });
    setResults(filtered);
  };

  // Run the filter function whenever any input changes
  useEffect(() => {
    filterResults();
  }, [keyword, status, dateRange]);

  return (
    <>
      <form>
        <div className="space-y-8">
          <div className="border-b pb-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4 lg:col-span-3">
                <label
                  htmlFor="keyword"
                  className="block text-sm font-medium leading-6"
                >
                  Search by job title, company name, keywords
                </label>
                <div className="mt-2">
                  <input
                    name="keyword"
                    type="text"
                    autoComplete="keyword"
                    id="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label
                  className="block text-sm font-medium leading-6"
                  htmlFor="status"
                >
                  Status
                </label>
                <div className="mt-2">
                  <select
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                  >
                    <option value="all">All</option>
                    <option value="interested">Interested</option>
                    <option value="applied">Applied</option>
                    <option value="interviewing">Interviewing</option>
                    <option value="offered">Offered</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4 lg:col-span-2">
                <label
                  className="block text-sm font-medium leading-6"
                  htmlFor="date"
                >
                  Date Range
                </label>
                <div className="w-full flex flex-col md:flex-row md:space-x-4 gap-2">
                  <div className="mt-2 w-full">
                    <input
                      name="start"
                      value={dateRange.start}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, start: e.target.value })
                      }
                      type="date"
                      id="start-date"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                    />
                  </div>
                  <div className="mt-2 w-full">
                    <input
                      type="date"
                      id="end-date"
                      name="end"
                      value={dateRange.end}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, end: e.target.value })
                      }
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-1 flex items-end">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-sm font-semibold leading-6"
                  onClick={filterResults}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Search Results</h3>
        <JobListing jobs={results} />
        {/* {results.length > 0 ? (
          <ul className="list-disc pl-6">
            {results.map((job) => (
              <li key={job.id} className="mb-2">
                {job.title} - {job.company} ({job.date}) - Status: {job.status}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No jobs found matching your criteria.</p>
        )} */}
      </div>
    </>
  );
};

export default JobSearchForm;
