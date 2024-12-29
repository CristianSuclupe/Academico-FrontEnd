import { useEffect, useState } from "react";
import { ClassTable } from "../../register/ClassTable";
import { RegisterForm } from "../../register/RegisterForm";
import { IAllClassesEnable } from "../../../types/class";
import { Class } from "../../../api/class";
import { IResponse } from "../../../types/response";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../modal/Modal";
import { ErrorIconSvg } from "../../error/ErrorIconSvg";
import { IPerson } from "../../../types/person";
import { Register } from "../../../api/register";
import { Student } from "../../../api/student";
import { useAuth } from "../../../hooks/useAuth";
import { IRegister } from "../../../types/register";

const classController = new Class();
const registerController = new Register();
const studentController = new Student();

const SecretaryHome = () => {
  const [classes, setClasses] = useState<IAllClassesEnable[]>([]);
  const [selectedClassId, setSelectClassId] = useState<number | null>(null);
  const { open, setOpen, message, setMessage } = useModal();
  const { currentUser } = useAuth();

  const onSubmit = async (formData: IPerson) => {
    try {
      if (!currentUser) return;
      if (!selectedClassId) {
        throw new Error(
          "Debe seleccionar una clase antes de registrar la matricula"
        );
      }
      const studentExist: IResponse<IPerson> =
        await studentController.findByDni(formData.dni);
      if (studentExist.statusCode === 404) {
        const responseStudent: IResponse<string> =
          await studentController.saveStudent(formData);
        if (!responseStudent || responseStudent.statusCode != 200)
          throw new Error(responseStudent.message);
      }

      const body: IRegister = {
        secretaryDni: currentUser?.dni,
        studentDni: formData.dni,
        classId: selectedClassId,
      };
      const response: IResponse<string> = await registerController.saveRegister(
        body
      );
      if (!response || response.statusCode !== 200)
        throw new Error(response.message);
    } catch (error) {
      setOpen(true);
      if (error instanceof Error) {
        setMessage(error.message);
        throw Error(error.message);
      }
    }
  };

  const onCancel = () => {
    setSelectClassId(null);
  };

  const onSelect = (classAux: number) => {
    if (selectedClassId === classAux) {
      setSelectClassId(null);
      return;
    }
    setSelectClassId(classAux);
    //console.log("clase seleccionada");
  };

  useEffect(() => {
    async function getAllClasses() {
      try {
        const response: IResponse<IAllClassesEnable[]> =
          await classController.findAllEnable();
        if (!response || response.statusCode != 200)
          throw new Error(response.message);
        setClasses(response.result);
      } catch (error) {
        setOpen(true);
        if (error instanceof Error) {
          setMessage(error.message);
          throw Error(`${error.message}`);
        } else {
          setMessage("No se pudo conectar con el servidor");
          throw new Error("No se pudo conectar con el servidor");
        }
      }
    }
    getAllClasses();
  }, []);

  return (
    <section>
      <h1 className="text-secondary font-semibold text-3xl mb-10">Matricula</h1>
      <div className="flex flex-col gap-28">
        <ClassTable
          classes={classes}
          onSelect={onSelect}
          selectedClassId={selectedClassId}
        />
        <RegisterForm
          setOpen={setOpen}
          setMessage={setMessage}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col justify-center items-center ">
          <ErrorIconSvg />
          <h3 className="font-semibold text-lg tablet:text-2xl tracking-wider">
            Error
          </h3>
          <p className="tablet:mt-3 tablet:text-lg">{message}</p>
        </div>
      </Modal>
    </section>
  );
};

export default SecretaryHome;
