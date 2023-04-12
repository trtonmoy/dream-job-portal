import { useState } from "react";
import AppliedJobList from "../AppliedJobList/AppliedJobList";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const appliedJob = useLoaderData();

  const [jobs, setJobs] = useState(appliedJob);

  const handleRemoteJobs = (type) => {
    const remoteJobs = appliedJob.filter((job) => job.work_site === type);
    setJobs(remoteJobs);
  };

  const handleFullTimeJobs = (type) => {
    const fullTimeJobs = appliedJob.filter((job) => job.work_site === type);
    setJobs(fullTimeJobs);
  };

  return (
    <section>
      <div
        className="bg-cover bg-center h-3/4 p-16 relative"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20210711/original/pngtree-simple-fashion-creative-design-banner-poster-background-picture-image_1128613.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-purple-950 opacity-10"></div>
        <h1 className="text-purple-900 text-center text-5xl font-bold">
          Job Application Records
        </h1>
      </div>

      <div className="lg:flex lg:justify-end my-6">
        <p
          onClick={() => handleFullTimeJobs("onsite")}
          className="border border-purple-400 rounded px-3 text-purple-500 font-semibold px=3 py-2 mr-3"
        >
          <button>Onsite</button>
        </p>
        <p
          onClick={() => handleRemoteJobs("remote")}
          className="border border-purple-400 font-semibold text-purple-500 rounded px-3 px=3 py-2 mr-3"
        >
          <button>Remote</button>
        </p>
      </div>

      <div className="mt-8 p-4">
        {jobs &&
          jobs.map((gig) => (
            <AppliedJobList key={gig.id} job={gig}></AppliedJobList>
          ))}
      </div>
    </section>
  );
};

export default AppliedJobs;
