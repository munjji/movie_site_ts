import { useEffect, useState } from "react";

interface UseFormProps<T> {
  initialValue: T;
  validate: Function;
}

const useForm = <T>({ initialValue, validate }: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const handleChangeInput = (name: keyof T, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBlur = (name: keyof T) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const getTextInputProps = (name: keyof T) => {
    const value: string = values[name] as unknown as string; // 타입 변환
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChangeInput(name, event.target.value);
    };
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  return { values, errors, touched, getTextInputProps };
};

export default useForm;
