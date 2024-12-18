import { useEffect, useState } from "react";
import { Class } from "../../../api/class";
import { IClassByTeacherResponse } from "../../../types/class";
import { ClassCard } from "./ClassCard";

const classController = new Class();

export const TeacherHome = () => {
  const [classes, setClasses] = useState<IClassByTeacherResponse>();

  useEffect(() => {
    async function getClassesByTeacher() {
      const response = await classController.findByTeacher();
      if (!response || response.statusCode != 200) return null;
      setClasses(response);
    }
    getClassesByTeacher();
  }, []);

  return (
    <section>
      <h1 className="text-secondary font-semibold text-3xl mb-10">Cursos</h1>
      <div className="grid gap-10 tablet:grid-cols-2 monitor:grid-cols-3">
        {classes?.result.map((classAux) => (
          <ClassCard
            key={classAux.classId}
            classId={classAux.classId}
            identifierName={classAux.identifierName}
            courseName={classAux.courseName}
          />
        ))}
      </div>
    </section>
  );
};
