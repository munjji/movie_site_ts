import { useQuery } from "@tanstack/react-query";
import { TCastMember } from "../../types/movie/movie";
import { AxiosError } from "axios";
import { getMovieCredits } from "../../apis/movie/movie";

const useCreditsFetch = (movieId: string) => {
  const { data, isLoading, isError } = useQuery<TCastMember[], AxiosError>({
    queryKey: ["credits", movieId],
    queryFn: () => getMovieCredits({ movieId }),
  });

  return { credits: data, isLoading, isError };
};

export default useCreditsFetch;
