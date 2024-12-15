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

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        console.error(`Error ${response.status}: No autorizado o prohibido`);
        logout();
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error en authFetch:", error.message);
      throw error; //
    }

    throw new Error("Error desconocido en authFetch");
  }
};
