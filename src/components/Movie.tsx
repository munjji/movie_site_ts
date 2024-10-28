import React from "react";

interface MovieProps {
  img: string;
}

const Movie: React.FC<MovieProps> = ({ img }) => {
  const defaultImg: string = "https://image.tmdb.org/t/p/original";
  return (
    <div className="relative w-[150px] h-[230px] group">
      <img
        className="w-[150px] h-[230px] rounded-lg"
        src={`${defaultImg}${img}`}
        alt="영화_포스터"
      ></img>
      <div className="absolute rounded-lg inset-0 bg-black opacity-0 transition duration-300 group-hover:opacity-60" />
    </div>
  );
};

export default Movie;
