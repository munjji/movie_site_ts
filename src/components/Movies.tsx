// Movies.tsx
import React from "react";
import Movie from "./Movie";
import useCustomFetch from "../hooks/useCustomFetch";

const Movies: React.FC<{ endpoint?: string }> = ({ endpoint }) => {
  const { movies, isLoading } = useCustomFetch(
    `/movie/${endpoint}?language=ko-kr`
  );

  if (isLoading) {
    return <div className="text-white">로딩 중입니다..</div>;
  }

  return (
    <div className="flex flex-row flex-wrap gap-4 pt-6">
      {movies?.map((movie) => (
        <Movie
          key={movie.id}
          img={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
          movieId={movie.id}
          vote={movie.vote_average}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default Movies;
