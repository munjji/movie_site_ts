import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getMovieData } from "../../apis/movie/movie";
import type { TMovieResponse, TMovieValues } from "../../types/movie/movie";

const useMovie = ({ endpoint }: TMovieValues) => {
  const { data, isLoading, isError } = useQuery<TMovieResponse[], AxiosError>({
    queryKey: ["movies", endpoint],
    queryFn: () => getMovieData({ endpoint }),
  });

  return { movies: data, isLoading, isError };
};

export default useMovie;
