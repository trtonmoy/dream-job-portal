import React from "react";

const CategoryJobs = ({ category }) => {
  const { image, title, vacancy } = category;
  return (
    <section className="bg-indigo-50 m-4 p-3 rounded border">
      <img
        className="text-indigo-400 bg-slate-200 p-2 w-10 h-10 rounded "
        src={image}
        alt="Category-Image"
      />
      <h5>{title}</h5>
      <h6>{vacancy}</h6>
    </section>
  );
};

export default CategoryJobs;
