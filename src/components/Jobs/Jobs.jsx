import React from "react";

const Jobs = () => {


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
        <div>
          <p>description </p>
        </div>
        <div>
          <p>details</p>
        </div>
      </section>
    </section>
  );
};

export default Jobs;
