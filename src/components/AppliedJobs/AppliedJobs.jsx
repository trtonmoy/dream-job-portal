import React, { useState } from "react";
import { getShoppingCart } from "../../../../../ema-john/public/utilities/fakedb";
import AppliedJobList from "../AppliedJobList/AppliedJobList";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const appliedJob = useLoaderData();

  return (
    <section>
      <div
        className="bg-cover bg-center h-3/4 p-16 relative"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20210711/original/pngtree-simple-fashion-creative-design-banner-poster-background-picture-image_1128613.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-purple-950 opacity-20"></div>
        <h1 className="text-purple-900 text-center text-5xl font-bold">
          Applied Jobs
        </h1>
      </div>

      <div className="mt-8 p-4">
        {appliedJob &&
          appliedJob.map((gig) => (
            <AppliedJobList key={gig.id} job={gig}></AppliedJobList>
          ))}
      </div>
    </section>
  );
};

export default AppliedJobs;
