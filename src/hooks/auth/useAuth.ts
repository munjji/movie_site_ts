import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signup, login } from "../../apis/auth/auth";
import type {
  TSignupResponse,
  TSignupValues,
  TLoginValues,
  TTokenValues,
} from "../../types/auth/auth";
import type { AxiosError } from "axios";

const useAuth = () => {
  const navigate = useNavigate();

  // ✅ 회원가입 Mutation
  const { mutate: registerUser, isError: isRegisterError } = useMutation<
    TSignupResponse,
    AxiosError,
    TSignupValues
  >({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("✅ 회원가입 성공:", data);
      navigate("/login");
    },
    onError: (error) => {
      console.error("❌ 회원가입 실패:", error.response?.data);
    },
  });

  // ✅ 로그인 Mutation
  const { mutate: loginUser, isError: isLoginError } = useMutation<
    TTokenValues,
    AxiosError,
    TLoginValues
  >({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("✅ 로그인 성공:", data);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/");
    },
    onError: (error) => {
      console.error("❌ 로그인 실패:", error.response?.data);
    },
  });

  return { registerUser, isRegisterError, loginUser, isLoginError };
};

export default useAuth;
