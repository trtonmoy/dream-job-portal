import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-purple-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 bg-purple-200 p-16 rounded-full">
        <FaceFrownIcon className="w-40 h-40 text-yellow-600" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-yellow-600">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
