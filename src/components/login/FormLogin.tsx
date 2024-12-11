import { useState } from "react";
import { SvgIconShowPassword } from "./SvgIconShowPassword";

export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="" className="flex flex-col w-[300px]">
      <div className="mb-10">
        <label htmlFor="user" className="flex text-white ml-2">
          <img
            src="/images/iconuser.webp"
            alt="icono de usuario"
            className="mr-5 mb-2"
          />
          Usuario
        </label>
        <input
          type="email"
          id="user"
          name="user"
          className="text-gray-950 w-full rounded-3xl outline-none px-3 focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div className="mb-10">
        <label htmlFor="password" className="flex text-white ml-2">
          <img
            src="/images/iconpassword.webp"
            alt="icono de contraseña"
            className="mr-5 mb-2"
          />
          Contraseña
        </label>
        <div className="flex relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="text-gray-950 w-full rounded-3xl outline-none px-4 pr-12 focus:ring-2 focus:ring-secondary"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-secondary hover:text-gray-700"
          >
            <SvgIconShowPassword showPassword={showPassword} />
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="rounded-3xl bg-white text-secondary h-10 text-lg 
                transition-colors duration-500 hover:bg-main hover:text-white focus:outline-none focus:ring-2 focus:ring-main
                "
      >
        Ingresar
      </button>
    </form>
  );
};
