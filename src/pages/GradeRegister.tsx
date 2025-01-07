import { useEffect, useState } from "react";
import { RegisterTable } from "../components/gradeRegister/RegisterTable";
import { Student } from "../api/student";
import { useParams } from "react-router";
import { IStudentPerClass } from "../types/student";
import { IResponse } from "../types/response";
import { IRegisterNote } from "../types/registerNote";
import { AcademicProduct } from "../api/academicProduct";
import { IAcademicProduct } from "../types/academicProduct";
import { RegisterNote } from "../api/registerNote";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/modal/Modal";

const studentController = new Student();
const academicProductController = new AcademicProduct();
const registerNoteController = new RegisterNote();

export const GradeRegister = () => {
  const { open, setOpen, message, setMessage, type, setType } = useModal();
  const [students, setStudents] = useState<IStudentPerClass[]>();
  const [academicProducts, setAcademicProducts] = useState<IAcademicProduct[]>(
    []
  );
  const [academicProductId, setAcademicProductId] = useState<number | null>(
    null
  );
  const { id } = useParams<{ id: string }>();

  const onChangeSelect = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAcademicProductId(Number(event.target.value));
  };

  useEffect(() => {
    async function getAcademicProductsPerClass() {
      try {
        const response: IResponse<IAcademicProduct[]> =
          await academicProductController.getAcademicProductsPerClass(
            Number(id)
          );
        if (!response || response.statusCode != 200)
          throw new Error(response.message);
        setAcademicProducts(response.result);
      } catch (error) {
        setOpen(true);
        if (error instanceof Error) {
          setType("Error");
          setMessage(error.message);
          throw Error(`${error.message}`);
        } else {
          setMessage("No se pudo conectar con el servidor");
          throw new Error("No se pudo conectar con el servidor");
        }
      }
    }
    getAcademicProductsPerClass();
  }, []);

  useEffect(() => {
    if (academicProducts.length === 0) return;
    async function getStudentsPerClass() {
      try {
        const response: IResponse<IStudentPerClass[]> =
          await studentController.ListStudentPerClass(
            Number(id),
            Number(academicProductId)
          );
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
  }, [academicProductId]);

  useEffect(() => {
    if (academicProducts.length > 0 && !academicProductId) {
      setAcademicProductId(academicProducts[0].academicProductId);
    }
  }, [academicProducts]);

  const onSubmit = async (data: IRegisterNote[]) => {
    const body: IRegisterNote[] = data.map((item) => ({
      ...item,
      academicProductId: academicProductId ?? undefined,
    }));

    try {
      const response: IResponse<string> =
        await registerNoteController.saveRegisterNote(body);
      if (!response || response.statusCode !== 200)
        throw new Error(response.message);
      setOpen(true);
      setType("success");
      setMessage(response.result);
      // setTrigger(true);
    } catch (error) {
      setOpen(true);
      if (error instanceof Error) {
        setType("Error");
        setMessage(error.message);
        throw Error(`${error.message}`);
      } else {
        setMessage("No se pudo conectar con el servidor");
        throw new Error("No se pudo conectar con el servidor");
      }
    }
  };
  return (
    <section>
      <h1 className="text-secondary font-semibold text-3xl mb-10">
        Registrar notas
      </h1>
      <div className="border-2 rounded-2xl shadow-3xl p-5 border-zinc-200">
        <select
          name="academicProduct"
          id="academicProduct"
          className="absolute right-48 w-32 border-2 rounded-lg border-slate-400"
          value={academicProductId || 0}
          autoFocus
          onChange={onChangeSelect}
        >
          {academicProducts.map((academicProduct) => (
            <option
              key={academicProduct.academicProductId}
              value={academicProduct.academicProductId}
            >
              {academicProduct.name}
            </option>
          ))}
        </select>
        <RegisterTable students={students} onSubmit={onSubmit} />
        <Modal open={open} type={type} onClose={() => setOpen(false)}>
          <p className="tablet:mt-3 tablet:text-lg">{message}</p>
        </Modal>
      </div>
    </section>
  );
};
