import { useInfiniteQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getMovieData } from "../../apis/movie/movie";
import type { TMovieResponse, TMovieValues } from "../../types/movie/movie";

const useMovie = ({ endpoint }: TMovieValues) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery<TMovieResponse[], AxiosError>({
      queryKey: ["movies", endpoint],
      queryFn: ({ pageParam = 1 }) =>
        getMovieData({ endpoint, page: pageParam as number }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
      initialPageParam: 1,
    });

  const movies = data?.pages.flat() || [];

  return { movies, isLoading, isError, fetchNextPage, hasNextPage };
};

export default useMovie;
