import React from "react";
import Category from "../components/Category";
import { CATEGORY } from "../mocks/category";
const MovieCategory: React.FC = () => {
  return (
    <div className="flex flex-col">
      <p className="text-white text-3xl font-extrabold mb-5">카테고리 페이지</p>
      <div className="flex flex-row flex-wrap gap-5">
        {CATEGORY.map((category) => (
          <a href={category.url}>
            <Category category={category.text} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MovieCategory;
