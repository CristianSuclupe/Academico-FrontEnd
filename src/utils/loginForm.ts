import * as Yup from "yup";

export const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};

export const validatioSchema = () => {
  return Yup.object({
    username: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio"),
  });
};
