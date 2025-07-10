import React from "react";

export const SubHeading = ({ title }) => {
  return (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8 text-center mt-5">
      <h4 className="sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 border-emerald-600 inline-block pb-1 transition duration-300">
        {title}
      </h4>
    </div>
  );
};
