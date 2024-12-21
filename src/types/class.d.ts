import { ICourse } from "./course";
import { IResponse } from "./response";
import { ITeacher } from "./teacher";

export interface IClass {
  classId: number;
  courseName: string;
  identifierName: string;
  teacherId: number;
  teacher?: ITeacher;
  course?: ICourse;
  deadLine: Date;
  maximunCapacity: number;
  currentAmount: number;
  state: boolean;
}

export interface IClassByTeacherResponse extends IResponse {
  result: IClass[];
}

export interface IClassResponse extends IResponse {
  result: IClass[];
}

export interface IClassTableProps {
  classes: IClass[];
}
