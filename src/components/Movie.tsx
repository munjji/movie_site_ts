import React from "react";

interface MovieProps {
  img: string;
  title: string;
  date: string;
}

const Movie: React.FC<MovieProps> = ({ img, title, date }) => {
  const defaultImg: string = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="relative w-[150px] h-[230px] group mb-2">
        <img
          className="w-[150px] h-[230px] rounded-lg"
          src={`${defaultImg}${img}`}
          alt="영화_포스터"
        ></img>
        <div className="absolute rounded-lg inset-0 bg-black opacity-0 transition duration-300 group-hover:opacity-60" />
      </div>
      <div className="text-white">
        <p className="font-bold text-sm">{title}</p>
        <p className="font-medium text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Movie;
