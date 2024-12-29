import * as Yup from "yup";

export const initialValues = () => {
  return {
    dni: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    birthday: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    dni: Yup.string().required("Este campo es obligatorio"),
    firstName: Yup.string().required("Este campo es obligatorio"),
    lastName: Yup.string().required("Este campo es obligatorio"),
    address: Yup.string().required("Este campo es obligatorio"),
    phoneNumber: Yup.string().required("Este campo es obligatorio"),
    birthday: Yup.date().required("Este campo es obligatorio"),
  });
};
