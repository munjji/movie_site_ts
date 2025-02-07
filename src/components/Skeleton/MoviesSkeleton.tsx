import React from "react";
import MovieSkeleton from "./MovieSkeleton";

const MoviesSkeleton: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 pt-6">
      {Array.from({ length: 30 }).map((_, index) => (
        <MovieSkeleton key={index} />
      ))}
    </div>
  );
};

export default MoviesSkeleton;
