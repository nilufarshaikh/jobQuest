const JobListing = ({ jobs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-left">Job Title</th>
            <th className="text-left">Company</th>
            <th className="text-left">Status</th>
            <th className="text-left">Date Applied</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap">{job.title}</td>
              <td className="whitespace-nowrap">{job.company}</td>
              <td className="whitespace-nowrap">{job.status}</td>
              <td className="whitespace-nowrap">{job.date}</td>
              <td className="whitespace-nowrap">
                <button className="btn btn-xs btn-primary mr-2">View</button>
                <button className="btn btn-xs btn-secondary">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListing;
