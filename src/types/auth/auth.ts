export type TSignupValues = {
  email: string;
  password: string;
  passwordCheck: string;
};

export type TSignupResponse = {
  email: string;
  id: number;
  passwordCheck: string;
};

export type TLoginValues = {
  email: string;
  password: string;
};

export type TTokenValues = {
  refreshToken: string;
  accessToken: string;
};
