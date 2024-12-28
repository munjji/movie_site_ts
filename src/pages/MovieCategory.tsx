import React from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movies";
import Category from "../components/Category";
import { CATEGORY } from "../mocks/category";

const MovieCategory: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  // category 값을 endpoint로 변환
  const endpointMap: Record<string, string> = {
    "now-playing": "now_playing",
    "top-rated": "top_rated",
    "up-coming": "upcoming",
    popular: "popular",
  };

  const endpoint = category ? endpointMap[category] : "";

  if (category && endpoint) {
    return (
      <div className="flex flex-col pb-8 w-[1400px]">
        <Movies endpoint={endpoint} />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <p className="text-white text-3xl font-extrabold mb-5">카테고리 페이지</p>
      <div className="flex flex-row flex-wrap gap-5">
        {CATEGORY.map((cat) => (
          <a href={cat.url} key={cat.url}>
            <Category category={cat.text} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MovieCategory;
