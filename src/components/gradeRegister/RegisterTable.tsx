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
    <div className="overflow-x-auto mt-5 p-5">
      <table className="table-auto border-collapse w-full">
        {/* Encabezado de la tabla */}
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-500 w-[5%]">N°</th>
            {/* <th className="border border-blue-200 px-4 py-2 text-left text-gray-500 w-[5%]">
              Id
            </th> */}
            <th className="px-4 py-2 text-left text-gray-500 w-[30%]">
              Apellidos
            </th>
            <th className="px-4 py-2 text-left text-gray-500 w-[30%]">
              Nombre
            </th>
            <th className="px-4 py-2 text-left text-gray-500 w-[30%]">
              Código
            </th>
            <th className="px-4 py-2 text-left text-gray-500 w-[5%]">Nota</th>
          </tr>
        </thead>

        {/* Cuerpo de la tabla */}
        <tbody>
          {students?.map((student, index) => (
            <tr key={student.studentId}>
              <td className="px-4 py-3 border-t-[1px] border-y-zinc-400">
                {index + 1}
              </td>
              {/* <td className="px-4 py-3">
                {student.studentId}
              </td> */}
              <td className="px-4 py-3 border-t-[1px] border-y-slate-400">
                {student.lastName}
              </td>
              <td className="px-4 py-3 border-t-[1px] border-y-slate-400">
                {student.name}
              </td>
              <td className="px-4 py-3 border-t-[1px] border-y-slate-400">
                {student.dni}
              </td>
              <td className="px-4 py-3 border-t-[1px] border-y-slate-400">
                <input
                  type="text"
                  value={scores.get(student.studentId) || 0}
                  maxLength={2}
                  placeholder="0"
                  onChange={(e) =>
                    handleScoreChange(student.studentId, Number(e.target.value))
                  }
                  readOnly={student.existRegisterNote ? true : false}
                  className="outline-none w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="absolute right-48 flex gap-5">
        <button onClick={handleSubmit}>Registrar</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
};
