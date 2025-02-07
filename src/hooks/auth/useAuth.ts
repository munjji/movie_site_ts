import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../apis/auth/auth";
import type { TSignupResponse, TSignupValues } from "../../types/auth/auth";
import type { AxiosError } from "axios";

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
      navigate("/");
    },
    onError: (error) => {
      console.error("❌ 회원가입 실패", error.response?.data);
    },
  });

  return { registerUser, isLoading, isError };
};

export default useAuth;
