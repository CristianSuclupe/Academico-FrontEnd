import { useEffect, useState } from "react";
import { RegisterTable } from "../components/gradeRegister/RegisterTable";
import { Student } from "../api/student";
import { useParams } from "react-router";
import { IStudentPerClass } from "../types/student";
import { IResponse } from "../types/response";

const studentController = new Student();
export const GradeRegister = () => {
  const [students, setStudents] = useState<IStudentPerClass[]>();
  const { id } = useParams<{ id: string }>();

  console.log(id);
  useEffect(() => {
    async function getStudentsPerClass() {
      try {
        const response: IResponse<IStudentPerClass[]> =
          await studentController.ListStudentPerClass(Number(id));
        if (!response || response.statusCode != 200)
          throw new Error(response.message);
        setStudents(response.result);
      } catch (error) {
        // setOpen(true);
        if (error instanceof Error) {
          // setMessage(error.message);
          throw Error(`${error.message}`);
        } else {
          // setMessage("No se pudo conectar con el servidor");
          throw new Error("No se pudo conectar con el servidor");
        }
      }
    }
    getStudentsPerClass();
  }, []);

  console.log(students);
  return (
    <section>
      <h1 className="text-secondary font-semibold text-3xl mb-10">
        Registrar notas
      </h1>
      <RegisterTable students={students} setStudents={setStudents} />
    </section>
  );
};
