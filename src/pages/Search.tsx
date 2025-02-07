import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import Movie from "../components/Movie";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();
  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const [searchParams] = useSearchParams({ mq: "" });

  const mq = searchParams.get("mq");

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSearchMovie();
    }
  };

  const url = `/search/movie?query=${searchValue}&include_adult=false&language=ko-kr&page=1`;

  const { movies } = useCustomFetch(url);

  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <SearchBar
        searchValue={searchValue}
        onChange={onChangeSearchValue}
        onClick={handleSearchMovie}
        onKeyDown={handleSearchMovieWithKeyboard}
      />
      <div className="flex flex-row flex-wrap gap-4 pt-6">
        {movies?.map((movie) => (
          <Movie
            key={movie.id}
            img={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            movieId={movie.id}
            vote={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
