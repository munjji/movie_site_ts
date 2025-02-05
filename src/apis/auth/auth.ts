import { axiosDefaultInstance } from "../axios-instance";

import type {
  TSignupValues,
  TSignupResponse,
  TLoginValues,
  TTokenValues,
} from "./../../types/auth/auth";

const signup = async ({
  email,
  password,
  passwordCheck,
}: TSignupValues): Promise<TSignupResponse> => {
  const { data } = await axiosDefaultInstance.post("/auth/register", {
    email,
    password,
    passwordCheck,
  });

  return data;
};

const login = async ({
  email,
  password,
}: TLoginValues): Promise<TTokenValues> => {
  const { data } = await axiosDefaultInstance.post("/auth/login", {
    email,
    password,
  });

  return data;
};

export { signup, login };
