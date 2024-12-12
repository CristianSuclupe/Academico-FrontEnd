import { IErrorFormsProps } from "../../types/errorsForm";

export const ErrorsForm = ({ message, className }: IErrorFormsProps) => {
  return <p className={`${className}`}>{message}</p>;
};
