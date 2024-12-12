import { IErrorFormsProps } from "../../types/errorsForm";

export const ErrorsForm = ({ message, color, margin }: IErrorFormsProps) => {
  return <p className={`${color} ${margin}`}>{message}</p>;
};
