import React, { useEffect, useState } from "react";
import coder from "../../assets/71619-coding.json";
import Lottie from "lottie-react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import FeaturedJobs from "../FeaturedJob/FeaturedJobs";
import CategoryJobs from "../CategoryJob/CategoryJobs";

const Banner = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const jobs = useLoaderData();

  const handleShowAll = () => {
    setShowAll(true);
    setIsHidden(true);
  };


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
            <h2 className="max-w-lg mb-6 font-sans  font-bold tracking-wide lg:leading-snug text-gray-900 sm:text-4xl sm:leading-none">
              Advancing on Your Path <br className="hidden md:block" /> to
              Achieving Your
              <span className="inline-block text-purple-500">
                Career Aspirations
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Embark on a Journey of Exploring Abundant Job Opportunities with
              Comprehensive Information. Empower Yourself to Seamlessly Manage
              Your Job Applications from Start to Finish."
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/jobs" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
            <Link
              to="/blog"
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
      <h1 className="text-center text-slate-700 font-bold tracking-wide text-4xl mt-44 mb-2">
        Field of Work List
      </h1>
      <h6 className="text-center text-xl font-semibold text-slate-500 m-2 mb-12">
        Career Cosmos: Embarking on a Broad Job Category Exploration
      </h6>
      <section className="flex flex-col-reverse lg:flex-row lg:justify-evenly lg:items-center">
        {categories.map((category) => (
          <CategoryJobs key={category.id} category={category}></CategoryJobs>
        ))}
      </section>

      {/* Featured Jobs */}
      <h1 className="text-center text-slate-700 font-bold tracking-wide text-4xl mt-20 mb-3">
        Spotlighted Opportunities
      </h1>
      <h6 className="text-center text-xl text-slate-500 font-semibold m-2 mb-12">
        Employment Hub: Explore a Wide Range of Job Opportunities
      </h6>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        {jobs.slice(0, showAll ? 6 : 4).map((job) => (
          <FeaturedJobs key={job.id} job={job}></FeaturedJobs>
        ))}
      </section>
      <div className="my-10 text-center">
        <span
          onClick={handleShowAll}
          className={`${isHidden ? "hidden" : "block"}`}
        >
          <button className="border rounded text-white text-xl bg-purple-800 hover:bg-purple-700 px-8 py-4 font-bold tracking-wide">
            See More
          </button>
        </span>
      </div>
    </section>
  );
};

export default Banner;
