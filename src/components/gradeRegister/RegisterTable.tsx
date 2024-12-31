import { IRegisterTableProps } from "../../types/student";

export const RegisterTable = ({
  students,
  setStudents,
}: IRegisterTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-blue-200 w-full rounded-lg">
        {/* Encabezado de la tabla */}
        <thead>
          <tr className="bg-teal-50">
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              N°
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Apellidos
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Nombre
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Código
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Nota 1
            </th>
          </tr>
        </thead>

        {/* Cuerpo de la tabla */}
        <tbody>
          {students?.map((student, index) => (
            <tr key={student.studentId}>
              <td className="border border-blue-200 px-4 py-6">{index + 1}</td>
              <td className="border border-blue-200 px-4 py-2">
                {student.lastName}
              </td>
              <td className="border border-blue-200 px-4 py-2">
                {student.name}
              </td>
              <td className="border border-blue-200 px-4 py-2">
                {student.dni}
              </td>
              <td className="border border-blue-200 px-4 py-2 w-[80px]">
                <input type="number" value={student.score} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
