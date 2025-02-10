import React, { useRef, useCallback } from "react";
import Movie from "./Movie/Movie";
import { useSearchParams } from "react-router-dom";
import MoviesSkeleton from "./Skeleton/MoviesSkeleton";
import useSearchMovie from "../hooks/movies/useSearchMovie";

const SearchMovies: React.FC = () => {
  const [searchParams] = useSearchParams({ mq: "" });
  const mq = searchParams.get("mq") || "";

  const { movies, isLoading, fetchNextPage, hasNextPage } = useSearchMovie({
    mq,
  });

  const observerRef = useRef<IntersectionObserver | null>(null); // ✅ Ref 선언을 최상단으로 이동

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

  // ✅ 검색어가 없을 때 표시
  if (!mq) {
    return (
      <p className="pt-6 text-white text-3xl font-extrabold">
        검색어를 입력해주세요!
      </p>
    );
  }

  // ✅ 로딩 상태에서 영화 데이터가 없을 때 표시
  if (isLoading && movies.length === 0) {
    return <MoviesSkeleton />;
  }

  // ✅ 검색 결과가 없을 때 표시
  if (mq && movies?.length === 0) {
    return (
      <p className="pt-6 text-white text-3xl font-extrabold">
        {mq}에 해당하는 검색 결과가 없습니다!
      </p>
    );
  }

  // ✅ 영화 목록 표시 및 Infinite Scroll 처리
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

export default SearchMovies;
