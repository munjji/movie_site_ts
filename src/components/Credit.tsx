import React from "react";

interface CreditProps {
  img?: string;
  name: string;
  role: string;
}

const Credit: React.FC<CreditProps> = ({ img, name, role }) => {
  const defaultImg: string = "https://image.tmdb.org/t/p/original";

  const bgStyle = {
    backgroundImage: `url('${defaultImg}${img}')`,
  };

  return (
    <div className="flex flex-col w-20 gap-3">
      <div
        style={bgStyle}
        className="w-[100px] h-[100px] bg-cover bg-center rounded-full border border-1"
      ></div>
      <div className="flex flex-col w-[100px] justify-center items-center">
        <p className="text-white text-sm text-center">{name}</p>
        <p className="text-white font-light text-xs whitespace-pre-wrap text-center">
          {role}
        </p>
      </div>
    </div>
  );
};

export default Credit;
