import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { searchMovieData } from "../../apis/movie/movie";
import type {
  TMovieResponse,
  TMovieSearchValues,
} from "../../types/movie/movie";

const useSearchMovie = ({ mq }: TMovieSearchValues) => {
  const { data, isLoading, isError } = useQuery<TMovieResponse[], AxiosError>({
    queryKey: ["movies", mq],
    queryFn: () => searchMovieData({ mq }),
  });

  return { movies: data, isLoading, isError };
};

export default useSearchMovie;
