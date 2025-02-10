import { axiosInstance } from "../axios-instance";
import type {
  TMovieResponse,
  TMovieSearchValues,
  TMovieValues,
  TMovieCreditValues,
  TCastMember,
} from "./../../types/movie/movie";

const getMovieData = async ({
  endpoint,
}: TMovieValues): Promise<TMovieResponse[]> => {
  const { data } = await axiosInstance.get(`/movie/${endpoint}?language=ko-kr`);

  return data.results;
};

const searchMovieData = async ({
  mq,
}: TMovieSearchValues): Promise<TMovieResponse[]> => {
  const { data } = await axiosInstance.get(
    `/search/movie?query=${mq}&include_adult=false&language=ko-kr&page=1`
  );

  return data.results;
};

const getMovieCredits = async ({
  movieId,
}: TMovieCreditValues): Promise<TCastMember[]> => {
  const { data } = await axiosInstance.get(
    `/movie/${movieId}/credits?language=ko-kr`
  );

  return data.cast;
};

export { getMovieData, searchMovieData, getMovieCredits };
