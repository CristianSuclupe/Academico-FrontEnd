import { IModalProps } from "../../types/modal";
import { ErrorIconSvg } from "./icons/ErrorIconSvg";
import { SuccessIconSvg } from "./icons/SuccessIconSvg";

export const Modal = ({ open, onClose, children, type }: IModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-20 ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          X
        </button>
        <div className="flex flex-col justify-center items-center ">
          {type === "success" ? <SuccessIconSvg /> : <ErrorIconSvg />}
          <h3 className="font-semibold text-lg tablet:text-2xl tracking-wider">
            {type.toUpperCase()}
          </h3>
          {children}
          {/* <p className="tablet:mt-3 tablet:text-lg">{message}</p> */}
        </div>
      </div>
    </div>
  );
};
