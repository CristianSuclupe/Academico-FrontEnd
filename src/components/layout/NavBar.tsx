import { Link } from "react-router";
import { INavbarProps } from "../../types/navbar";
import { routes } from "../../router/routes";

export const NavBar = ({ isSidebarOpen, toggleSidebar }: INavbarProps) => {
  return (
    <nav
      className={`absolute monitor:relative z-10 monitor:z-auto bg-main h-full monitor:h-auto row-start-2 row-end-3 col-start-1 col-end-2 transform w-[220px]
          tablet:w-[360px] monitor:w-[100px] flex
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } monitor:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <ul className="flex flex-col gap-5 mt-10 text-white">
        <li className="ml-4">
          <Link
            to={routes.HOME}
            className="flex items-center gap-2"
            onClick={toggleSidebar}
          >
            <img src="/images/iconhome.webp" alt="icono home" />
            <p>Inicio</p>
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to={routes.HOME}
            className="flex items-center gap-2"
            onClick={toggleSidebar}
          >
            <img src="/images/iconprofile.webp" alt="icono perfil" />
            <p>Perfil</p>
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to={routes.HOME}
            className="flex items-center gap-2"
            onClick={toggleSidebar}
          >
            <img src="/images/iconcalendar.webp" alt="icono calendario" />
            <p>Perfil</p>
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to={routes.HOME}
            className="flex items-center gap-2"
            onClick={toggleSidebar}
          >
            <img src="/images/icontime.webp" alt="icono horario" />
            <p>Perfil</p>
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to={routes.HOME}
            className="flex items-center gap-2"
            onClick={toggleSidebar}
          >
            <img src="/images/iconhelp.webp" alt="icono ayuda" />
            <p>Perfil</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
