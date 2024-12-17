import { useEffect, useState } from "react";
import { IClassByTeacherResponse } from "../types/class";
import { Class } from "../api/class";
import { ClassCard } from "../components/home/ClassCard";

const classController = new Class();

export const Home = () => {
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
    <section className="flex flex-col gap-5">
      <h1 className="text-secondary font-semibold text-3xl">Cursos</h1>
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
