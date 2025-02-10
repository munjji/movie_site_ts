import { axiosInstance } from "../axios-instance";
import type { TMovieResponse, TMovieValues } from "./../../types/movie/movie";

const getMovieData = async ({
  endpoint,
}: TMovieValues): Promise<TMovieResponse[]> => {
  const { data } = await axiosInstance.get(`/movie/${endpoint}?language=ko-kr`);

  console.log(data);
  return data.results;
};

export { getMovieData };
