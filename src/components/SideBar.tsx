import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const SideBar: React.FC = () => {
  return (
    <div className="w-[350px] h-screen flex flex-col text-white gap-2 pl-8">
      <Link to="/serch">
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
