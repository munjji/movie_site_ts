export type TMovieValues = {
  endpoint: string;
};

export type TMovieResponse = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieSearchValues = {
  mq: string | null;
};

export type TMovieCreditValues = {
  movieId: string;
};

export type TCastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string; // 프로필 경로가 없을 수 있으므로 null을 허용
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type TCreditProps = {
  img?: string;
  name: string;
  role: string;
};
