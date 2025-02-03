const emailPattern: RegExp =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/;

interface LoginValues {
  email: string;
  password: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
}

interface SignupValues {
  email: string;
  password: string;
  repassword: string;
}

interface ValidationSignupErrors {
  email?: string;
  password?: string;
  repassword?: string;
}

// ✅ 로그인 유효성 검사 함수
function validateLogin(values: LoginValues): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!emailPattern.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8~16자 사이로 입력해주세요.";
  }

  return errors;
}

// ✅ 회원가입 유효성 검사 함수 (비밀번호 확인 포함)
function validateSignup(values: SignupValues): ValidationSignupErrors {
  const errors: ValidationSignupErrors = {};

  if (!emailPattern.test(values.email)) {
    errors.email = "이메일을 반드시 입력해주세요.";
  }

  if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8~16자 사이로 입력해주세요.";
  }

  if (!values.repassword) {
    errors.repassword = "비밀번호 확인을 입력해주세요.";
  } else if (values.repassword !== values.password) {
    errors.repassword = "비밀번호가 일치하지 않습니다.";
  }

  return errors;
}

export { validateLogin, validateSignup };
