import { IRegisterNote } from "./registerNote";

export interface IStudentPerClass {
  studentId: number;
  name: string;
  lastName: string;
  dni: string;
  score: number;
  existRegisterNote: boolean;
}

export interface IRegisterTableProps {
  students: IStudentPerClass[] | undefined;
  onSubmit: (data: IRegisterNote[]) => void;
}
