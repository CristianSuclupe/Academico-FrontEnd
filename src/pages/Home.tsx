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
    <section>
      <h1>Cursos</h1>
      <div className="grid gap-10">
        {classes?.result.map((classAux) => (
          <ClassCard
            classId={classAux.classId}
            identifierName={classAux.identifierName}
            courseName={classAux.courseName}
          />
        ))}
      </div>
    </section>
  );
};
