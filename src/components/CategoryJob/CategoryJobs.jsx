import React from "react";

const CategoryJobs = ({ category }) => {
  const { image, title, vacancy } = category;
  return (
    <section className="bg-indigo-50 w-60 h-52 m-4 p-3 rounded border">
      <img
        className="text-indigo-400 bg-slate-200 p-2 w-20 h-20 rounded "
        src={image}
        alt="Category-Image"
      />
      <h5 className="font-bold my-2 text-xl text-slate-600">{title}</h5>
      <h6 className="font-semibold my-1 text-lg text-slate-500">{vacancy}</h6>
    </section>
  );
};

export default CategoryJobs;
