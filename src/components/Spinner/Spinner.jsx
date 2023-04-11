import React from "react";

const Spinner = () => {
  return (
    <section>
      <div className="flex justify-center items-center h-[calc(100vh-220px)]">
        <p className="text-7xl font-thin">L</p>
        <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
        <p className="text-7xl font-thin">ading....</p>
      </div>
      <h1 className="text-purple-900 text-5xl font-bold text-center mt-4">
        ...Go to HomePage and Scroll Down....
      </h1>
    </section>
  );
};

export default Spinner;
