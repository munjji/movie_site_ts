import React from "react";
import Movies from "../components/Movie/Movies";

const MoviePage: React.FC = () => {
  return (
    <div className="flex-1 pb-8">
      <Movies endpoint="upcoming" />
    </div>
  );
};

export default MoviePage;
