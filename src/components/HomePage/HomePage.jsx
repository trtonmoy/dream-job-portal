import React, { useEffect, useState } from "react";
import coder from "../../assets/71619-coding.json";
import Lottie from "lottie-react";
import { Link, useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJob/FeaturedJobs";
import CategoryJobs from "../CategoryJob/CategoryJobs";

const Banner = () => {
  // const categories = useLoaderData();

  const [categories, setCategories] = useState([]);

  const jobs = useLoaderData();

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section>
      {/* Header Banner */}
      <section className="my-container flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 m-6 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div>
              <p className="badge">On Sale!</p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              A reader lives a <br className="hidden md:block" /> thousand lives{" "}
              <span className="inline-block text-blue-400">before he dies</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Books are a uniquely portable magic. Books serve to show a man
              that those original thoughts of his aren’t very new after all. The
              man who does not read good books is no better than the man who
              can’t.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/books" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Visit Store</p>
              </div>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full max-w-fit lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={coder} loop={true} />
          </div>
        </div>
      </section>

      {/* Category */}
      <h1 className="text-center text-3xl mt-44 mb-2">Job Category List</h1>
      <h6 className="text-center text-xl m-2 mb-12">
        Career Cosmos: Embarking on a Broad Job Category Exploration
      </h6>
      <section className="flex flex-col-reverse lg:flex-row lg:justify-evenly lg:items-center">
        {categories.map((category) => (
          <CategoryJobs key={category.id} category={category}></CategoryJobs>
        ))}
      </section>

      {/* Featured Jobs */}
      <h1 className="text-center text-3xl mt-20 mb-2">Featured Jobs</h1>
      <h6 className="text-center text-xl m-2 mb-12">
        Employment Hub: Explore a Wide Range of Job Opportunities
      </h6>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <FeaturedJobs key={job.id} job={job}></FeaturedJobs>
        ))}
      </section>
    </section>
  );
};

export default Banner;
