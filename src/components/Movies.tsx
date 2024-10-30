// Movies.tsx
import React from "react";
import Movie from "./Movie";
import { MOVIES } from "../movies"; // MOVIES 데이터를 가져옵니다

const Movies: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {MOVIES.results.map((movie) => (
        <Movie key={movie.id} img={movie.poster_path} /> // Movie 컴포넌트에 poster_path를 전달
      ))}
    </div>
  );
};

export default Movies;
