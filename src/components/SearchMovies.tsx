import React from "react";
import Movie from "./Movie";
import useCustomFetch from "../hooks/useCustomFetch";

const SearchMovies: React.FC<{ searchValue: string }> = ({ searchValue }) => {
  const url = `/search/movie?query=${searchValue}&include_adult=false&language=ko-kr&page=1`;

  const { movies, isLoading } = useCustomFetch(url);

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

export default SearchMovies;
