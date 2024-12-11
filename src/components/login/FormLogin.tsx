import { useState } from "react";
import { SvgIconShowPassword } from "./SvgIconShowPassword";

export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="" className="flex flex-col">
      <div className="mb-10">
        <label
          htmlFor="user"
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
          type="email"
          id="user"
          name="user"
          className="text-gray-950 w-full h-7 rounded-3xl outline-none px-3 focus:ring-2 focus:ring-secondary tablet:h-9 tablet:text-lg bg-white/40 border-2"
        />
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
