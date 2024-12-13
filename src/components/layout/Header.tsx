import { IHeaderProps } from "../../types/header";

export const Header = ({ toggleSidebar }: IHeaderProps) => {
  return (
    <header className="flex bg-gradient-to-r from-secondary via-secondary/80 to-secondary items-center row-start-1 row-end-2 col-start-1 col-end-4">
      <button
        className="monitor:hidden text-white text-2xl"
        onClick={toggleSidebar}
      >
        <img
          src="/images/logo.webp"
          alt="logo"
          className="max-h-11 max-w-11 ml-2"
        />
      </button>
    </header>
  );
};
