import React from "react";
import Movie from "./Movie";
import MoviesSkeleton from "../Skeleton/MoviesSkeleton";
import useMovie from "../../hooks/movies/useMovie";

const Movies: React.FC<{ endpoint?: string }> = ({ endpoint }) => {
  const { movies, isLoading } = useMovie({ endpoint: endpoint || "" });

  if (isLoading) {
    return <MoviesSkeleton />;
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
