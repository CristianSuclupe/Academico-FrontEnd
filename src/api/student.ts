import { Token } from "./token";
import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";
import { IPerson } from "../types/person";

const tokenController = new Token();
export class Student {
  findByDni = async (dni: string) => {
    try {
      const token = await tokenController.getToken();
      if (!token) return null;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.STUDENT}/${dni}`;
      const params = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await authFetch(url, params);
      if (!response) return null;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error("No se pudo logear al sistema: Error desconocido");
      }
    }
  };

  saveStudent = async (data: IPerson) => {
    try {
      const token = await tokenController.getToken();
      if (!token) return null;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.STUDENT}`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await authFetch(url, params);
      if (!response) return null;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error("No se pudo logear al sistema: Error desconocido");
      }
    }
  };

  ListStudentPerClass = async (classId: number, academicProductId: number) => {
    try {
      const token = await tokenController.getToken();
      if (!token) return null;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.STUDENT}/${ENV.ENDPOINTS.CLASS}/${classId}?productAcademicId=${academicProductId}`;
      const params = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await authFetch(url, params);
      if (!response) return null;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error("No se pudo logear al sistema: Error desconocido");
      }
    }
  };
}
