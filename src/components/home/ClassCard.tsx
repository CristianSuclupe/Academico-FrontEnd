import { Link } from "react-router";
import { IClassCardProps } from "../../types/home";

export const ClassCard = ({
  classId,
  courseName,
  identifierName,
}: IClassCardProps) => {
  return (
    <div className="w-72 h-48 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-gray-700 to-teal-500 h-1/2"></div>

      <div className="p-2 h-auto">
        <h2 className="text-orange-500 font-semibold text-sm">{courseName}</h2>
        <p className="text-gray-700 font-bold text-md">{identifierName}</p>

        <ul className="flex w-3/5 justify-between mt-3">
          {/* <li>
            <Link to={routes.GRADEREGISTER.replace(":id", classAux.id)}>
              <img src="/images/iconnotes.webp" alt="icono de notas" />
            </Link>
          </li> */}
          <li>
            <Link to={"/"}>
              <img src="/images/icontalk.webp" alt="icono de foro" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <img src="/images/iconarchive.webp" alt="icono de archivos" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
