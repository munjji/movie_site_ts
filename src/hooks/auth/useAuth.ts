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
import { useAuthStore } from "../../store/useAuthStore";

const useAuth = () => {
  const navigate = useNavigate();
  const { login: setLoginState, logout: setLogoutState } = useAuthStore();

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

      const email = localStorage.getItem("email") || "";
      setLoginState(email);

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/");
    },
    onError: (error) => {
      console.error("❌ 로그인 실패:", error.response?.data);
    },
  });

  // 로그아웃
  const logoutUser = () => {
    setLogoutState();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return {
    registerUser,
    isRegisterError,
    loginUser,
    isLoginError,
    logoutUser,
  };
};

export default useAuth;
