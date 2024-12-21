import { IClassTableProps } from "../../types/class";

export const ClassTable = ({ classes }: IClassTableProps) => {
  return (
    <div>
      <table className="table-auto border-collapse border border-blue-200 w-full rounded-lg">
        <thead>
          <tr className="bg-teal-50">
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              N°
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Nombre
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Curso
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Registrados
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Cant. max
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Docente
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500">
              Fecha max
            </th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classAux) => (
            <tr key={classAux.classId}>
              <td className="border border-blue-200 px-4 py-2 text-gray-700">
                1
              </td>
              <td className="border border-blue-200 px-4 py-2 text-gray-700">
                {classAux.identifierName}
              </td>
              <td className="border border-blue-200 px-4 py-2 text-gray-700">
                {classAux.course?.name}
              </td>
              <td className="border border-blue-200 px-4 py-2 text-gray-700">
                {classAux.currentAmount}
              </td>
              <td className="border border-blue-200 px-4 py-2 text-gray-700">
                {classAux.maximunCapacity}
              </td>
              <td className="border border-blue-200 px-4 py-2 text-gray-700">
                {classAux.teacher?.person.firstName}
              </td>
              <td className="border border-blue-200 px-4 py-2 text-gray-700">
                {new Date(classAux.deadLine).toDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
