import { useInfiniteQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { searchMovieData } from "../../apis/movie/movie";
import type {
  TMovieResponse,
  TMovieSearchValues,
} from "../../types/movie/movie";

const useSearchMovie = ({ mq }: TMovieSearchValues) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery<TMovieResponse[], AxiosError>({
      queryKey: ["searchMovies", mq],
      queryFn: ({ pageParam = 1 }) =>
        searchMovieData({ mq, page: pageParam as number }), // pageParam을 명시적으로 number로 캐스팅
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
      initialPageParam: 1,
    });

  const movies = data?.pages.flat() || [];

  return { movies, isLoading, isError, fetchNextPage, hasNextPage };
};

export default useSearchMovie;
