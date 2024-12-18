export const RegisterTable = () => {
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
          <tr>
            <td className="border border-blue-200 px-4 py-2 text-gray-700">
              1
            </td>
            <td className="border border-blue-200 px-4 py-2 text-gray-700">
              Perez Sánchez
            </td>
            <td className="border border-blue-200 px-4 py-2 text-gray-700">
              Brando
            </td>
            <td className="border border-blue-200 px-4 py-2 text-gray-700">
              175816
            </td>
            <td className="border border-blue-200 px-4 py-2 text-gray-700">
              18
            </td>
          </tr>

          {/* Filas vacías */}
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td className="border border-blue-200 px-4 py-6"></td>
              <td className="border border-blue-200 px-4 py-6"></td>
              <td className="border border-blue-200 px-4 py-6"></td>
              <td className="border border-blue-200 px-4 py-6"></td>
              <td className="border border-blue-200 px-4 py-6">
                <input type="number" className="w-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
