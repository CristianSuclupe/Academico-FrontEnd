import { useEffect, useState } from "react";
import { Class } from "../../../api/class";
import { ClassCard } from "./ClassCard";
import { IResponse } from "../../../types/response";
import { IClassByTeacher } from "../../../types/class";

const classController = new Class();

export const TeacherHome = () => {
  const [classes, setClasses] = useState<IClassByTeacher[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function getClassesByTeacher() {
      const response: IResponse<IClassByTeacher[]> =
        await classController.findByTeacher();
      if (!response || response.statusCode != 200) return null;
      setClasses(response.result);
    }
    getClassesByTeacher();
  }, []);

  return (
    <section>
      <h1 className="text-secondary font-semibold text-3xl mb-10">Cursos</h1>
      <div className="grid gap-10 tablet:grid-cols-2 monitor:grid-cols-3">
        {classes ? (
          classes.map((classAux) => (
            <ClassCard
              key={classAux.classId}
              classId={classAux.classId}
              identifierName={classAux.identifierName}
              courseName={classAux.courseName}
            />
          ))
        ) : (
          <p>Cargando clases...</p>
        )}
      </div>
    </section>
  );
};
