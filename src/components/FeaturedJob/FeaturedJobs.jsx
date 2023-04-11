import { Link } from "react-router-dom";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const FeaturedJobs = ({ job }) => {
  const { id, brand_logo, job_title, job_type, company, location, salary } =
    job;

  return (
    <section className="p-3 border rounded m-4">
      <img className="w-48 h-32 my-3" src={brand_logo} alt="" />
      <h4 className="font-bold text-3xl text-slate-700 "> {job_title} </h4>
      <p className="font-semibold my-2 text-2xl text-slate-500"> {company} </p>
      <div className="lg:flex gap-6">
        {job_type.map((job, idx) => (
          <p
            key={idx}
            className="border text-purple-500 font-medium text-lg border-purple-500 rounded my-1 px-4 py-2"
          >
            {job}
          </p>
        ))}
      </div>
      <div className="lg:flex gap-6 my-2">
        <div className="lg:flex lg:justify-evenly lg:items-center gap-2">
          <p>
            <MapPinIcon className="w-5 text-gray-500" />
          </p>
          <p className="font-semibold text-slate-500 text-lg">{location}</p>
        </div>
        <div className="lg:flex lg:justify-evenly lg:items-center gap-2">
          <p>
            <CurrencyDollarIcon className="w-5 text-gray-500" />
          </p>
          <p className="font-semibold text-slate-500 text-lg">{salary}</p>
        </div>
      </div>

      <Link to={`/${id}`}>
        <button className="btn m-4">View Details</button>
      </Link>
    </section>
  );
};

export default FeaturedJobs;
