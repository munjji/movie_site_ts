import React from "react";

const Category: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className="flex items-end w-[300px] h-[180px] bg-center rounded-lg bg-[url('jiji.jpg')]">
      <div className="text-center text-white bg-black bg-opacity-60 rounded-lg ml-2 mb-2">
        <p className="p-1">{category}</p>
      </div>
    </div>
  );
};

export default Category;
