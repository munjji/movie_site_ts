import React from "react";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <div className="w-[350px] flex flex-col bg-slate-900 text-white gap-2 pl-4">
      <Link to="/movies/serch">찾기</Link>
      <Link to="/movies">영화</Link>
    </div>
  );
};

export default SideBar;
