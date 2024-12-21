import { useEffect, useState } from "react";
import { ClassTable } from "../../register/ClassTable";
import { RegisterForm } from "../../register/RegisterForm";
import { IClass, IClassResponse } from "../../../types/class";
import { Class } from "../../../api/class";

const classController = new Class();

const SecretaryHome = () => {
  const [classes, setClasses] = useState<IClass[]>([]);

  useEffect(() => {
    async function getAllClasses() {
      const response: IClassResponse = await classController.findAllEnable();
      if (!response || response.statusCode != 200) return null;
      setClasses(response.result);
    }
    getAllClasses();
  }, []);
  return (
    <section>
      <h1 className="text-secondary font-semibold text-3xl mb-10">Matricula</h1>
      <ClassTable classes={classes} />
      <RegisterForm />
    </section>
  );
};

export default SecretaryHome;
