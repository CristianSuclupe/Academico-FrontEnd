import { useEffect, useState } from "react";
import { IRegisterTableProps } from "../../types/student";

export const RegisterTable = ({ students, onSubmit }: IRegisterTableProps) => {
  const [scores, setScores] = useState<Map<number, number>>(new Map());

  useEffect(() => {
    const updatedScores = new Map(
      students?.map((student) => [student.studentId, student.score])
    );
    setScores(updatedScores);
  }, [students]);

  const handleScoreChange = (studentId: number, value: number) => {
    if (value < 0) value = 0;
    if (value > 20) value = 20;
    setScores((prevScores) => {
      const newScores = new Map(prevScores);
      newScores.set(studentId, value);
      return newScores;
    });
  };

  const handleSubmit = () => {
    const data =
      students?.map((student) => {
        const score = scores.get(student.studentId) || 0;
        const result = {
          studentId: student.studentId,
          score: score,
        };
        return result;
      }) || [];
    onSubmit(data);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-blue-200 w-full rounded-lg">
        {/* Encabezado de la tabla */}
        <thead>
          <tr className="bg-teal-50">
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500 w-[5%]">
              N°
            </th>
            {/* <th className="border border-blue-200 px-4 py-2 text-left text-gray-500 w-[5%]">
              Id
            </th> */}
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500 w-[30%]">
              Apellidos
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500 w-[30%]">
              Nombre
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500 w-[30%]">
              Código
            </th>
            <th className="border border-blue-200 px-4 py-2 text-left text-gray-500 w-[5%]">
              Nota
            </th>
          </tr>
        </thead>

        {/* Cuerpo de la tabla */}
        <tbody>
          {students?.map((student, index) => (
            <tr key={student.studentId}>
              <td className="border border-blue-200 px-4 py-3">{index + 1}</td>
              {/* <td className="border border-blue-200 px-4 py-3">
                {student.studentId}
              </td> */}
              <td className="border border-blue-200 px-4 py-2">
                {student.lastName}
              </td>
              <td className="border border-blue-200 px-4 py-2">
                {student.name}
              </td>
              <td className="border border-blue-200 px-4 py-2">
                {student.dni}
              </td>
              <td className="border border-blue-200 px-4 py-2">
                <input
                  type="text"
                  value={scores.get(student.studentId) || 0}
                  maxLength={2}
                  placeholder="0"
                  onChange={(e) =>
                    handleScoreChange(student.studentId, Number(e.target.value))
                  }
                  readOnly={student.existRegisterNote ? true : false}
                  className="outline-none"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleSubmit}>Registrar</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
};
