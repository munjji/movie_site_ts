import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const SideBar: React.FC = () => {
  return (
    <div className="w-[300px] h-screen flex flex-col text-white gap-2 pt-5 pl-8 bg-zinc-800">
      <Link to="/search">
        <div className="flex flex-row gap-1 h-[30px] items-center">
          <FaSearch />
          찾기
        </div>
      </Link>
      <Link to="/movies">
        <div className="flex flex-row gap-1 h-[30px] items-center">
          <MdMovie />
          영화
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
