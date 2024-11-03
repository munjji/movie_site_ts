import React from "react";
import { useLocation } from "react-router-dom";

interface LocationState {
  title?: string;
  date?: string;
  vote?: number;
  overview?: string;
  img?: string;
  defaultImg?: string;
}

const MovieDetail: React.FC = () => {
  const location = useLocation();
  const {
    title,
    date,
    vote,
    overview,
    img = "",
    defaultImg = "",
  }: LocationState = location.state || {};
  const bgStyle = {
    backgroundImage: `url('${defaultImg}${img}')`,
    opacity: 0.7,
  };

  return (
    <div>
      <div
        className={`flex flex-col justify-between w-[1300px] h-[400px] rounded-lg bg-cover bg-center text-white mb-5 p-5`}
        style={bgStyle}
      >
        <div>
          <p className="text-2xl font-extrabold">{title}</p>
          <p>평균 {vote}</p>
          <p>{date}</p>
        </div>
        <p className="w-[400px] whitespace-pre-wrap">{overview}</p>
      </div>
      <div className="text-3xl font-extrabold">
        <p className="text-white">감독/출연</p>
      </div>
    </div>
  );
};

export default MovieDetail;
