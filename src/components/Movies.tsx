// Movies.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

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

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: "Bearer token",
          },
        }
      );
      setMovies(movies.data.results);
    };
    getMovies();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 pt-6">
      {movies?.map((movie) => (
        <Movie key={movie.id} img={movie.poster_path} /> // Movie 컴포넌트에 poster_path를 전달
      ))}
    </div>
  );
};

export default Movies;
