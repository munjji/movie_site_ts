import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

export const axiosDefaultInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});
