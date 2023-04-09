import React from "react";

const FeaturedJobs = ({ job }) => {
  const { brand_logo, job_title, job_type, company, location, salary } = job;

  return (
    <section className="p-3 border rounded m-4">
      <img className="w-36 h-14" src={brand_logo} alt="" />
      <h4> {job_title} </h4>
      <p> {company} </p>
      <div className="lg:flex gap-6">
        <p className="p-1 rounded border"> {job_type[0]} </p>
        <p className="p-1 rounded border"> {job_type[1]} </p>
      </div>
      <div className="lg:flex gap-6">
        <p> {location} </p>
        <p> {salary} </p>
      </div>
      <button className="btn m-2">View Details</button>
    </section>
  );
};

export default FeaturedJobs;
