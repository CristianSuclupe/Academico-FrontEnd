import { IResponse } from "./response";

export interface IClass {
  classId: number;
  courseName: string;
  identifierName: string;
  teacherId: number;
}

export interface IClassByTeacherResponse extends IResponse {
  result: IClass[];
}
