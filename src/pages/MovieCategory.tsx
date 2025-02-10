import React from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movie/Movies";
import MovieDetail from "./MovieDetail";
import Category from "../components/Category";
import { CATEGORY } from "../mocks/category";

const MovieCategory: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  // 카테고리를 검증하기 위한 유효한 카테고리 목록
  const validCategories = ["now-playing", "top-rated", "up-coming", "popular"];

  // category가 유효한 카테고리인지 확인
  const isValidCategory = category && validCategories.includes(category);

  if (!category) {
    // 기본 카테고리 목록 렌더링
    return (
      <div className="flex-1 flex-col mt-6">
        <p className="text-white text-3xl font-extrabold mb-5">
          카테고리 페이지
        </p>
        <div className="flex flex-row flex-wrap gap-5">
          {CATEGORY.map((cat) => (
            <a href={`/movies/${cat.url}`} key={cat.url}>
              <Category category={cat.text} />
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (isValidCategory) {
    // category가 유효하면 Movies 컴포넌트를 렌더링
    const endpointMap: Record<string, string> = {
      "now-playing": "now_playing",
      "top-rated": "top_rated",
      "up-coming": "upcoming",
      popular: "popular",
    };

    return (
      <div className="flex flex-col pb-8 w-[1400px]">
        <Movies endpoint={endpointMap[category]} />
      </div>
    );
  }

  // category가 유효하지 않으면 MovieDetail로 처리
  return (
    <div className="flex flex-col pb-8 w-[1400px]">
      <MovieDetail movieId={category} />
    </div>
  );
};

export default MovieCategory;
