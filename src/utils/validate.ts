import { z } from "zod";

// 이메일 유효성 검사
const emailSchema = z.string().email("올바른 이메일 형식이 아닙니다.");

// 비밀번호 유효성 검사
const passwordSchema = z
  .string()
  .min(8, "비밀번호는 8자 이상이어야 합니다.")
  .max(16, "비밀번호는 16자 이하로 입력해주세요.");

// 로그인 유효성 검사
const loginSchema = z.object({ email: emailSchema, password: passwordSchema });

// 회원가입 유효성 검사
const signupSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    passwordCheck: z.string(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordCheck"],
  });

// 로그인, 회원가입 values 정의
type LoginValues = z.infer<typeof loginSchema>;
type SignupValues = z.infer<typeof signupSchema>;

interface ValidationErrors {
  email?: string;
  password?: string;
}

interface ValidationSignupErrors {
  email?: string;
  password?: string;
  passwordCheck?: string;
}

// 로그인 유효성 검사 함수
function validateLogin(values: LoginValues): ValidationErrors {
  const result = loginSchema.safeParse(values);
  if (result.success) return {};

  // `flatten().fieldErrors`의 타입을 변환
  const errors = result.error.flatten().fieldErrors;
  return {
    email: errors.email?.[0],
    password: errors.password?.[0],
  };
}

// 회원가입 유효성 검사 함수 (비밀번호 확인 포함)
function validateSignup(values: SignupValues): ValidationSignupErrors {
  const result = signupSchema.safeParse(values);
  if (result.success) return {};

  // `flatten().fieldErrors`의 타입을 변환
  const errors = result.error.flatten().fieldErrors;
  return {
    email: errors.email?.[0],
    password: errors.password?.[0],
    passwordCheck: errors.passwordCheck?.[0],
  };
}

export { validateLogin, validateSignup };
