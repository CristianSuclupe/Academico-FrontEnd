import { useEffect, useState } from "react";
import { IClassByTeacherResponse } from "../types/class";
import { Class } from "../api/class";

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
    <div>
      {classes?.result.map((classAux) => (
        <div key={classAux.classId}>{classAux.identifierName}</div>
      ))}
    </div>
  );
};
