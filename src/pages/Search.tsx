import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchMovies from "../components/SearchMovies";

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

  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <SearchBar
        searchValue={searchValue}
        onChange={onChangeSearchValue}
        onClick={handleSearchMovie}
        onKeyDown={handleSearchMovieWithKeyboard}
      />
      <SearchMovies searchValue={searchValue} />
    </div>
  );
};

export default Search;
