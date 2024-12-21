import { IPerson } from "./person";

export interface ITeacher {
  teacherId: string;
  enable: boolean;
  specialization: string;
  person: IPerson;
}
