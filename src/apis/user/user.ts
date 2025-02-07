import { axiosDefaultInstance } from "../axios-instance";

import { TUserInfoResponse } from "../../types/user/user";

const userInfo = async (): Promise<TUserInfoResponse> => {
  const { data } = await axiosDefaultInstance.get("/user/me");

  return data;
};

export { userInfo };
