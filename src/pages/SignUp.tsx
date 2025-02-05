import React, { useEffect, useState } from "react";
import useForm from "../hooks/use-form";
import { validateSignup } from "../utils/validate";
import useAuth from "../hooks/auth/useAuth";

const SignUp: React.FC = () => {
  const signup = useForm({
    initialValue: { email: "", password: "", passwordCheck: "" },
    validate: validateSignup,
  });
  const { registerUser } = useAuth();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      !signup.errors.email &&
        !signup.errors.password &&
        !signup.errors.passwordCheck &&
        signup.values.email !== "" &&
        signup.values.password !== "" &&
        signup.values.passwordCheck !== ""
    );
  }, [signup.errors, signup.values]);

  const handlePressSignup = () => {
    if (isValid) {
      console.log("회원가입 요청:", signup.values);
      registerUser(signup.values);
    }
  };

  return (
    <div className="w-[1100px] flex flex-col justify-center items-center gap-y-4">
      <p className="text-white font-extrabold text-3xl mb-7">회원가입</p>
      <input
        type={"email"}
        placeholder="이메일을 입력해주세요!"
        {...signup.getTextInputProps("email")}
        className="w-[350px] p-3 text-gray rounded-md outline-none"
      />
      {signup.touched.email && signup.errors.email && (
        <p className="text-start text-rose-700 font-[12px]">
          {signup.errors.email}
        </p>
      )}
      <input
        type={"password"}
        {...signup.getTextInputProps("password")}
        placeholder="비밀번호를 입력해주세요!"
        className="w-[350px] p-3 text-gray rounded-md outline-none"
      />
      {signup.touched.password && signup.errors.password && (
        <p className="text-rose-700 font-[12px]">{signup.errors.password}</p>
      )}
      <input
        type={"password"}
        {...signup.getTextInputProps("passwordCheck")}
        placeholder="비밀번호를 다시 입력해주세요!"
        className="w-[350px] p-3 text-gray rounded-md outline-none"
      />
      {signup.touched.repassword && signup.errors.repassword && (
        <p className="text-rose-700 font-[12px]">{signup.errors.repassword}</p>
      )}
      <input
        onClick={handlePressSignup}
        type={"submit"}
        value={"회원가입"}
        disabled={!isValid}
        className={`text-white w-[350px] p-3 rounded-md ${
          isValid
            ? " bg-red-500 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      />
    </div>
  );
};

export default SignUp;
