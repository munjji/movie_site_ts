export interface CastMember {
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
}

export interface CreditResponse {
  id: number;
  cast: CastMember[];
}
