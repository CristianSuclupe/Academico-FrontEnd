import { Token } from "./token";
import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";
import { IRegisterNote } from "../types/registerNote";

const tokenController = new Token();
export class RegisterNote {
  saveRegisterNote = async (data: IRegisterNote[]) => {
    try {
      const token = tokenController.getToken();
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTERNOTE}`;
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
}
