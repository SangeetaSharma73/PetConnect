import React from "react";

export const Heading = ({ title }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto md-px-20 px-4">
      <div className="mt-18 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          {title}
          <span className="text-emerald-500"> Here! :)</span>
        </h1>
      </div>
    </div>
  );
};
