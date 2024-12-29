import { Token } from "../api/token";
import { routes } from "../router/routes";
import { IAuthParams } from "../types/auth";

export const authFetch = async (url: string, params?: IAuthParams) => {
  const tokenController = new Token();
  const token = tokenController.getToken();

  const logout = () => {
    tokenController.removeToken();
    window.location.replace(routes.LOGIN);
  };

  if (!token) {
    console.error("Token no encontrado, redirigiendo al login");
    logout();
    return;
  }

  const paramsTemp: IAuthParams = {
    ...params,
    headers: {
      ...params?.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, paramsTemp);
    if (!response) throw Error;
    const result = await response.json();
    if (result.statusCode === 401 || response.status === 403) {
      logout();
      throw new Error(` ${result.message}`);
    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error en authFetch:", error.message);
      throw error; //
    }

    throw new Error("Error desconocido en authFetch");
  }
};
