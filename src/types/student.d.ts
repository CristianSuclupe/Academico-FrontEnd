export interface IStudentPerClass {
  studentId: number;
  name: string;
  lastName: string;
  dni: string;
  score: number;
}

export interface IRegisterTableProps {
  students: IStudentPerClass[] | undefined;
  setStudents: (data: IStudentPerClass[]) => void;
}
