import { useState } from "react";
import { Student } from "../../api/student";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../../utils/registerForm";
import { IPerson } from "../../types/person";
import { IResponse } from "../../types/response";
import { IRegisterFormProps } from "../../types/registerForm";
import { ErrorsForm } from "../error/ErrorsForm";

const studentController = new Student();

export const RegisterForm = ({
  setOpen,
  setMessage,
  onSubmit,
  onCancel,
}: IRegisterFormProps) => {
  const [dni, setDni] = useState("");
  const [lastDni, setLastDni] = useState("");

  const handleSubmit = (data: IPerson) => {
    onSubmit(data);
  };

  const handleCancel = () => {
    onCancel();
    setDni("");
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      handleSubmit(formValues);
    },
  });

  const handleDniChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDni(event.target.value);
    formik.setFieldValue("dni", event.target.value);
  };

  const handleDniEnter = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (dni === "" || dni === lastDni) return;
      setLastDni(dni);
      checkIfStudentExist();
    }
  };

  const checkIfStudentExist = async () => {
    try {
      const response: IResponse<IPerson> = await studentController.findByDni(
        dni
      );
      if (
        !response ||
        response.statusCode !== 200 ||
        typeof response.result === "string"
      ) {
        throw new Error(response.message);
      }
      formik.setValues({
        ...formik.values,
        dni: response.result.dni || "",
        firstName: response.result.firstName || "",
        middleName: response.result.middleName || "",
        lastName: response.result.lastName,
        address: response.result.address || "",
        phoneNumber: response.result.phoneNumber || "",
        birthday: response.result.birthday
          ? new Date(response.result.birthday).toISOString().split("T")[0]
          : "",
      });
    } catch (error) {
      setDni("");
      formik.resetForm();
      setOpen(true);
      if (error instanceof Error) {
        console.log(error);
        setMessage(error.message);
        throw new Error(`${error.message}`);
      } else {
        setMessage("No se pudo conectar con el servidor");
        throw new Error("No se pudo conectar con el servidor");
      }
    }
  };
  return (
    <div className="mt-10">
      <h2 className="mb-5 font-medium text-xl text-secondary">
        Datos del alumno
      </h2>
      <form
        className="mt-10 flex gap-10 flex-col"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex gap-5 justify-between">
          <div className="w-1/3">
            <input
              id="dni"
              name="dni"
              maxLength={8}
              className="w-full border border-blue-300 rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-main"
              value={dni}
              placeholder="Ingrese el dni"
              onChange={handleDniChange}
              onKeyDown={handleDniEnter}
            />
            {formik.errors.dni && formik.touched.dni && (
              <ErrorsForm
                message={formik.errors.dni}
                className="text-black mt-2"
              />
            )}
          </div>
          <div className="w-1/3">
            <input
              id="firstName"
              name="firstName"
              className="w-full border border-blue-300 rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-main"
              placeholder="Ingrese el primer nombre"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <ErrorsForm
                message={formik.errors.firstName}
                className="text-black mt-2"
              />
            )}
          </div>
          <div className="w-1/3">
            <input
              id="middleName"
              name="middleName"
              className="w-full border border-blue-300 rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-main"
              placeholder="Ingrese el segundo nombre"
              value={formik.values.middleName}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="w-1/3">
            <input
              id="lastName"
              name="lastName"
              className="w-full border border-blue-300 rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-main"
              placeholder="Ingrese los apellidos"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <ErrorsForm
                message={formik.errors.lastName}
                className="text-black mt-2"
              />
            )}
          </div>
          <div className="w-1/3">
            <input
              id="address"
              name="address"
              className="w-full border border-blue-300 rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-main"
              placeholder="Ingrese dirección domiciliaria"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.errors.address && formik.touched.address && (
              <ErrorsForm
                message={formik.errors.address}
                className="text-black mt-2"
              />
            )}
          </div>
          <div className="w-1/3">
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              min={0}
              maxLength={9}
              className="w-full border no-spinner border-blue-300 rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-main"
              placeholder="Ingrese número de celular"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <ErrorsForm
                message={formik.errors.phoneNumber}
                className="text-black mt-2"
              />
            )}
          </div>
        </div>
        <div>
          <input
            id="birthday"
            name="birthday"
            type="date"
            className="w-full border border-blue-300 rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-main"
            value={formik.values.birthday}
            onChange={formik.handleChange}
          />
          {formik.errors.birthday && formik.touched.birthday && (
            <ErrorsForm
              message={formik.errors.birthday}
              className="text-black mt-2"
            />
          )}
        </div>
        <div className="flex gap-5 justify-between w-1/2 mt-10">
          <button
            type="submit"
            className="rounded-3xl text-white h-10 text-lg w-1/2
                transition-colors duration-500 bg-main focus:outline-none focus:ring-2 focus:ring-main
                tablet:h-11 tablet:text-xl font-semibold"
          >
            Registrar
          </button>
          <button
            type="button"
            className="rounded-3xl text-white h-10 text-lg w-1/2
              bg-red-500 focus:outline-none
                tablet:h-11 tablet:text-xl font-semibold"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
