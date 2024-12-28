import { Token } from "./token";
import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

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
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error("No se pudo logear al sistema: Error desconocido");
      }
    }
  };
}
