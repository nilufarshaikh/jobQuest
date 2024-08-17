const JobForm = () => {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b pb-12">
          <h2 className="text-2xl font-bold mb-6">Add a New Job</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="job-title"
                className="block text-sm font-medium leading-6"
              >
                Job Title
              </label>
              <div className="mt-2">
                <input
                  id="job-title"
                  name="job-title"
                  type="text"
                  autoComplete="job-title"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium leading-6"
              >
                Company Name
              </label>
              <div className="mt-2">
                <input
                  id="company-name"
                  name="company-name"
                  type="text"
                  autoComplete="company-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="job-link"
                className="block text-sm font-medium leading-6"
              >
                Job Link
              </label>
              <div className="mt-2">
                <input
                  id="job-link"
                  name="job-link"
                  type="url"
                  autoComplete="job-link"
                  placeholder="https://example.com"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="region"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="job-type"
                className="block text-sm font-medium leading-6"
              >
                Job Type
              </label>
              <div className="mt-2">
                <select
                  id="job-type"
                  name="job-type"
                  autoComplete="job-type"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6"
              >
                Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  autoComplete="status"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                >
                  <option value="interested">Interested</option>
                  <option value="applied">Applied</option>
                  <option value="interviewing">Interviewing</option>
                  <option value="offered">Offered</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6"
              >
                Date Applied
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="date"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6"
              >
                Company Details/Notes/Questions
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-gray-200 focus:ring-gray-200 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-base-100 text-base-content"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6">
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-accent rounded-md px-6 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default JobForm;
