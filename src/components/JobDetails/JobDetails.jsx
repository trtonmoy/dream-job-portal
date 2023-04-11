import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addToDb,
  getShoppingCart,
} from "../../../../../ema-john/public/utilities/fakedb";
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const jobDetails = useParams();

  const [details, setDetails] = useState("");
  const [appliedJob, setAppliedJob] = useState([]);
  const savedList = [];

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const appliedJobsList = getShoppingCart();
    for (const id in appliedJobsList) {
      const addedJob = details && details.find((job) => job.id === id);
      if (addedJob) {
        savedList.push(addedJob);
      }
    }
    setAppliedJob(savedList);
  }, [details]);

  const handleApplyJob = (job) => {
    const newJob = [...appliedJob, job];
    setAppliedJob(newJob);
    addToDb(job.id);
  };

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
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1369274625/vector/abstract-diagonal-lines-white-background-with-smooth-stripes-minimal-website-backdrop.jpg?s=612x612&w=0&k=20&c=TEN1TaY7nkekMC5HbE6-F1T5Pe96bLx-Tu2Dugy3SYE=')",
      }}
    >
      <div
        className="bg-cover bg-center h-3/4 p-16 opacity-60 text-purple-950 relative"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20210915/pngtree-geometric-pattern-white-gold-minimalist-creative-background-image_879782.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-purple-950 opacity-20"></div>
        <h1 className="text-center text-5xl font-bold ">
          Employment Information
        </h1>
      </div>

      <section className="py-20 px-8 border lg:flex justify-between">
        <div className="lg:w-[60%]">
          <span className="font-semibold text-xl text-slate-500 ">
            <h3 className="font-bold text-2xl text-slate-800">
              Job Description :{" "}
            </h3>{" "}
            {job_description}{" "}
          </span>
          <br />
          <br />
          <span className="font-semibold text-xl text-slate-500 ">
            <h3 className="font-bold text-2xl text-slate-800">
              Job Responsibility :
            </h3>{" "}
            {job_responsibility}{" "}
          </span>
          <br />
          <br />
          <span className="font-semibold text-xl text-slate-500 ">
            <h3 className="font-bold text-2xl text-slate-800">
              Educational Requirements :
            </h3>{" "}
            {educational_expectation}{" "}
          </span>
          <br />
          <br />
          <h4 className="font-bold text-2xl text-slate-800">Experience</h4>
          <p className="font-semibold text-xl text-slate-500 ">
            {" "}
            {experience}{" "}
          </p>
        </div>
        <div className="bg-slate-200 p-3 lg:w-[35%] pl-8">
          <h2 className=" font-bold text-3xl text-slate-800 my-3">
            Employment Information
          </h2>
          <hr className="border border-slate-400 my-3" />
          <div className="lg:flex lg:items-center my-2">
            <div className="lg:flex lg:justify-evenly lg:items-center gap-2">
              <CurrencyDollarIcon className="w-5 text-purple-500" />
              <h5 className="font-semibold text-slate-600 mr-1 text-xl">
                Salary :
              </h5>
            </div>
            <p className="text-slate-500 font-medium text-lg">
              {" "}
              {salary} per Month{" "}
            </p>
          </div>
          <div className="lg:flex gap-3 lg:items-center my-2">
            <BriefcaseIcon className="w-5 text-purple-500" />
            <h5 className="font-semibold text-slate-600 mr-1 text-xl">
              Job Title :
            </h5>
            <p className="text-slate-500 font-medium text-lg"> {job_title} </p>
          </div>
          <h2 className="ml-5 font-bold text-3xl text-slate-800 mt-12 my-3">
            Contact Information
          </h2>
          <hr className="border border-slate-400 my-3" />
          <div className="lg:flex gap-3 lg:items-center my-2">
            <PhoneIcon className="w-5 text-purple-500" />
            <h5 className="font-semibold text-slate-600 mr-1 text-xl">Phone</h5>
            <p className="text-slate-500 font-medium text-lg"> {phone} </p>
          </div>
          <div className="lg:flex gap-3 lg:items-center my-2">
            <EnvelopeIcon className="w-5 text-purple-500" />
            <h5 className="font-semibold text-slate-600 mr-1 text-xl">
              {" "}
              Email :
            </h5>
            <p className="text-slate-500 font-medium text-lg"> {email} </p>
          </div>
          <div className="lg:flex gap-3 lg:items-center my-2">
            <MapPinIcon className="w-5 text-purple-500" />
            <h5 className="font-semibold text-slate-600 mr-1 text-xl">
              Address :
            </h5>
            <p className="text-slate-500 font-medium text-lg"> {location} </p>
          </div>
          <button onClick={() => handleApplyJob(pd)} className="btn mt-6">
            Apply Now
          </button>
        </div>
      </section>
    </section>
  );
};

export default JobDetails;
