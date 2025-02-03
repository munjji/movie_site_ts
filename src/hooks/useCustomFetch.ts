import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const useCustomFetch = (url: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(url);
        setMovies(response.data.results);
        console.log(response.data);
        localStorage.setItem("token", "sdfndklfndslkfd");
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [url]);

  return { movies, isLoading, isError };
};

export default useCustomFetch;
