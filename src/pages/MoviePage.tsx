import React from "react";
import Movies from "../components/Movie/Movies";

const MoviePage: React.FC = () => {
  return (
    <div className="w-[1400px] pb-8">
      <Movies endpoint="upcoming" />
    </div>
  );
};

export default MoviePage;
