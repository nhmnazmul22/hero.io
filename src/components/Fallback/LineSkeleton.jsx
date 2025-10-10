import React from "react";

const LineSkeleton = ({ length }) => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-10">
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="skeleton h-20 w-20 shrink-0 rounded-full"></div>
            <div className="skeleton h-20 w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LineSkeleton;
