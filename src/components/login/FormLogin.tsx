import { useState } from "react";
import { SvgIconShowPassword } from "./SvgIconShowPassword";
import { useFormik } from "formik";
import { initialValues, validatioSchema } from "../../utils/loginForm";
import { ILogin } from "../../types/auth";
import { ErrorsForm } from "../error/ErrorsForm";
import { useAuth } from "../../hooks/useAuth";

export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();

  const handleSubmit = (data: ILogin) => {
    handleLogin(data);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validatioSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      handleSubmit(formValues);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <div className="mb-10">
        <label
          htmlFor="username"
          className="flex text-white ml-2 tablet:text-xl tablet:mb-2"
        >
          <img
            src="/images/iconuser.webp"
            alt="icono de usuario"
            className="mr-5 mb-2 tablet:h-6 tablet:w-6"
          />
          Usuario
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="text-gray-950 w-full h-7 rounded-3xl outline-none px-3 focus:ring-2 focus:ring-secondary tablet:h-9 tablet:text-lg bg-white/40 border-2"
        />
        {formik.errors.username && formik.touched.username && (
          <ErrorsForm
            message={formik.errors.username}
            className="text-white ml-2"
          />
        )}
      </div>
      <div className="mb-14 tablet:mb-16">
        <label
          htmlFor="password"
          className="flex text-white ml-2 tablet:text-xl tablet:mb-2"
        >
          <img
            src="/images/iconpassword.webp"
            alt="icono de contraseña"
            className="mr-5 mb-2 tablet:h-6 tablet:w-6"
          />
          Contraseña
        </label>
        <div className="flex relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="text-gray-950 w-full h-7 rounded-3xl outline-none px-4 pr-12 focus:ring-2 focus:ring-secondary tablet:h-9 tablet:text-lg bg-white/40 border-2"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center"
          >
            <SvgIconShowPassword showPassword={showPassword} />
          </button>
        </div>
        {formik.errors.password && formik.touched.password && (
          <ErrorsForm
            message={formik.errors.password}
            className="text-white ml-2"
          />
        )}
      </div>
      <button
        type="submit"
        className="rounded-3xl bg-white text-secondary h-10 text-lg 
                transition-colors duration-500 hover:bg-main hover:text-white focus:outline-none focus:ring-2 focus:ring-main
                tablet:h-11 tablet:text-xl font-semibold"
      >
        Ingresar
      </button>
    </form>
  );
};
