import React from "react";

const MovieSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="w-[150px] h-[230px] mb-2 bg-gray-300 rounded-lg" />
      <div className="w-[150px] flex flex-col gap-1">
        <p className="h-[14px] bg-gray-300 rounded-lg" />
        <p className="h-3 bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
};

export default MovieSkeleton;
