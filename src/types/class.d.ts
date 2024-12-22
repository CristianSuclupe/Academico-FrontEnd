export interface IClass {
  classId: number;
  courseName: string;
  identifierName: string;
  deadLine?: Date;
  maximunCapacity?: number;
  currentAmount?: number;
}

export interface IClassByTeacher extends IClass {
  teacherId: number;
}

export interface IClassTableProps {
  classes: IAllClassesEnable[];
}

export interface IAllClassesEnable extends IClass {
  dni: string;
  teacherName: string;
  courseName: string;
}
