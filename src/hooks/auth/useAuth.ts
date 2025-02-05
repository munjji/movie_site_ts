import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../apis/auth/auth";
import type { TSignupResponse, TSignupValues } from "../../types/auth/auth";
import type { AxiosError } from "axios"; // ✅ AxiosError 타입 추가

const useAuth = () => {
  const navigate = useNavigate();

  const {
    mutate: registerUser,
    isLoading,
    isError,
  } = useMutation<TSignupResponse, AxiosError, TSignupValues>({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("✅ 회원가입 성공:", data);
      navigate("/"); // ✅ 회원가입 성공 후 로그인 페이지로 이동
    },
    onError: () => {
      console.error("❌ 회원가입 실패");
    },
  });

  return { registerUser, isLoading, isError };
};

export default useAuth;
