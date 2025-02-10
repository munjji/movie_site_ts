import React, { useRef, useCallback } from "react";
import Movie from "./Movie";
import MoviesSkeleton from "../Skeleton/MoviesSkeleton";
import useMovie from "../../hooks/movies/useMovie";

const Movies: React.FC<{ endpoint?: string }> = ({ endpoint }) => {
  const { movies, isLoading, fetchNextPage, hasNextPage } = useMovie({
    endpoint: endpoint || "",
  });

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastMovieRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasNextPage, fetchNextPage]
  );

  if (isLoading && movies.length === 0) {
    return <MoviesSkeleton />;
  }

  return (
    <div className="flex flex-row flex-wrap gap-4 pt-6">
      {movies.map((movie, index) => {
        if (index === movies.length - 1) {
          return (
            <div ref={lastMovieRef} key={movie.id}>
              <Movie
                img={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                movieId={movie.id}
                vote={movie.vote_average}
                overview={movie.overview}
              />
            </div>
          );
        }

        return (
          <Movie
            key={movie.id}
            img={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            movieId={movie.id}
            vote={movie.vote_average}
            overview={movie.overview}
          />
        );
      })}
    </div>
  );
};

export default Movies;
