import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useParams();

  const [details, setDetails] = useState("");

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const pd = details && details.find((job) => job.id === jobDetails.id);
  const {
    job_description,
    job_responsibility,
    educational_expectation,
    experience,
    salary,
    job_title,
    phone,
    email,
    location,
  } = pd;

  return (
    <section>
      <div
        className="bg-cover bg-center h-3/4 p-16 opacity-60 text-purple-950 relative"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20210915/pngtree-geometric-pattern-white-gold-minimalist-creative-background-image_879782.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-purple-950 opacity-20"></div>
        <h1 className="text-center text-5xl font-bold ">Job Details</h1>
      </div>

      <section className="py-20 px-8 bg-amber-200 border lg:flex justify-between">
        <div className="lg:w-[60%]">
          <span>
            <h3>Job Description : </h3> {job_description}{" "}
          </span>
          <br />
          <br />
          <span>
            <h3>Job Responsibility :</h3> {job_responsibility}{" "}
          </span>
          <br />
          <br />
          <span>
            <h3>Educational Requirements :</h3> {educational_expectation}{" "}
          </span>
          <br />
          <br />
          <h4>Experience</h4>
          <p> {experience} </p>
        </div>
        <div className="bg-slate-200 p-3 lg:w-[35%] ">
          <h2>Job Details</h2>
          <hr />
          <div>
            <h5>Salary:</h5>
            <p> {salary} per Month </p>
          </div>
          <div>
            <h5>Job Title :</h5>
            <p> {job_title} </p>
          </div>
          <h2>Contact Information</h2>
          <hr />
          <div>
            <h5>Phone</h5>
            <p> {phone} </p>
          </div>
          <div>
            <h5> Email :</h5>
            <p> {email} </p>
          </div>
          <div>
            <h5>Address :</h5>
            <p> {location} </p>
          </div>
          <button className="btn">Apply Now</button>
        </div>
      </section>
    </section>
  );
};

export default JobDetails;
