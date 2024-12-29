import { IRegister } from "../types/register";
import { authFetch } from "../utils/authFetch";
import { ENV } from "../utils/constants";
import { Token } from "./token";

const tokenController = new Token();

export class Register {
  saveRegister = async (data: IRegister) => {
    try {
      const token = tokenController.getToken();
      if (!token) return null;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Pasa el token en el encabezado Authorization
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
}
