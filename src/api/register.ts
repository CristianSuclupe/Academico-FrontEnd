import { authFetch } from "../utils/authFetch";
import { Token } from "./token";

const tokenController = new Token();

export class Register {
  saveRegister = async (data) => {
    try {
      const token = tokenController.getToken();
      if (!token) return null;
      const url = ``;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Pasa el token en el encabezado Authorization
          "Content-Type": "application/json",
        },
        body: ``,
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
