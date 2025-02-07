import React from "react";
import Movie from "./Movie/Movie";
import useCustomFetch from "../hooks/useCustomFetch";
import { useSearchParams } from "react-router-dom";
import MoviesSkeleton from "./Skeleton/MoviesSkeleton";

const SearchMovies: React.FC = () => {
  const [searchParams] = useSearchParams({ mq: "" });
  const mq = searchParams.get("mq");

  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-kr&page=1`;
  const { movies, isLoading } = useCustomFetch(url);

  if (isLoading) {
    return <MoviesSkeleton />;
  }

  if (mq && movies.length === 0) {
    return (
      <p className="pt-6 text-white text-3xl font-extrabold">
        {mq}에 해당하는 검색 결과가 없습니다!
      </p>
    );
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
