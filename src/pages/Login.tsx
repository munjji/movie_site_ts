import React from "react";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";

const Login: React.FC = () => {
  const login = useForm({
    initialValue: { email: "", password: "" },
    validate: validateLogin,
  });

  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  };
  return (
    <div className="w-[1100px] flex flex-col justify-center items-center gap-y-4">
      <p className="text-white font-extrabold text-3xl mb-7">로그인</p>
      <input
        type={"email"}
        placeholder="이메일을 입력해주세요"
        {...login.getTextInputProps("email")}
        className="w-[350px] p-3 text-gray rounded-md outline-none"
      />
      {login.touched.email && login.errors.email && (
        <p className="text-rose-700 font-[12px]">{login.errors.email}</p>
      )}
      <input
        type={"password"}
        {...login.getTextInputProps("password")}
        placeholder="비밀번호를 입력해주세요"
        className="w-[350px] p-3 text-gray rounded-md outline-none"
      />
      {login.touched.password && login.errors.password && (
        <p className="text-rose-700 font-[12px]">{login.errors.password}</p>
      )}
      <input
        onClick={handlePressLogin}
        type={"submit"}
        value={"로그인"}
        className="text-white w-[350px] p-3 bg-red-500 rounded-md"
      />
    </div>
  );
};

export default Login;
