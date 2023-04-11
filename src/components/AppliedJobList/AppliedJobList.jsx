import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJobList = ({ job }) => {
  const { id, brand_logo, job_title, job_type, company, location, salary } =
    job;

  return (
    <div className=" lg:flex lg:items-center lg:justify-between mx-2 my-6 p-4 border rounded">
      <div className="lg:flex gap-8 lg:items-center">
        <img className="w-52 h-36" src={brand_logo} alt="Brand Logo" />
        <div>
          <div>
            <h4 className="font-bold tracking-wide my-1 text-purple-900 text-2xl">
              {job_title}
            </h4>
            <h5 className="font-medium tracking-wide text-xl my-1 text-slate-500">
              {company}
            </h5>
            <div className="lg:flex lg:items-center gap-3 my-1">
              <p className="rounded border border-purple-400 px-3 py-1">
                {" "}
                {job_type[0]}{" "}
              </p>
              <p className="rounded border border-purple-400 my-1 px-3 py-1">
                {job_type[1]}
              </p>
            </div>
            <div className="lg:flex mt-2 gap-3">
              <div className="lg:flex lg:justify-evenly lg:items-center">
                <p>
                  <MapPinIcon className="w-5 text-gray-500" />
                </p>
                <p> {location} </p>
              </div>

              <div className="lg:flex lg:justify-evenly lg:items-center gap-2">
                <p>
                  <CurrencyDollarIcon className="w-5 text-gray-500" />
                </p>
                <p> Salary :{salary} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/${id}`}>
          <button className="btn m-2">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobList;
