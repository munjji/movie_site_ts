const emailPattern: RegExp =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/;

interface LoginValues {
  email: string;
  password: string;
}

interface ValidationErrors {
  email: string;
  password: string;
}

function validateUser(values: LoginValues): ValidationErrors {
  const errors: ValidationErrors = {
    email: "",
    password: "",
  };

  // 이메일 유효성 검사
  if (!emailPattern.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해 주세요!";
  }

  // 비밀번호 유효성 검사
  if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8 ~ 16자 사이로 입력해 주세요!";
  }

  return errors;
}

function validateLogin(values: LoginValues): ValidationErrors {
  return validateUser(values);
}

export { validateLogin };
