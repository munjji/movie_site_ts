import React from "react";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  img: string;
  title: string;
  date: string;
  movieId: number;
  vote: number;
  overview: string;
}

const Movie: React.FC<MovieProps> = ({
  img,
  title,
  date,
  movieId,
  overview,
  vote,
}) => {
  const defaultImg: string = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/movies/${movieId}`, {
          state: {
            title: `${title}`,
            date: `${date}`,
            vote: `${vote}`,
            overview: `${overview}`,
            defaultImg: `${defaultImg}`,
            img: `${img}`,
          },
        })
      }
    >
      <div className="relative w-[150px] h-[230px] group mb-2">
        <img
          className="w-[150px] h-[230px] rounded-lg"
          src={`${defaultImg}${img}`}
          alt="영화_포스터"
        />
        <div className="absolute rounded-lg inset-0 bg-black opacity-0 transition duration-300 group-hover:opacity-60" />
      </div>
      <div className="text-white">
        <p className="w-[150px] font-bold text-sm whitespace-pre-wrap">
          {title}
        </p>
        <p className="font-medium text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Movie;
