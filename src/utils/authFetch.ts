import { Token } from "../api/token";
import { routes } from "../router/routes";

export const authFetch = async (url: string, params?: RequestInit) => {
  const tokenController = new Token();
  const token = tokenController.getToken();

  const logout = () => {
    tokenController.removeToken();
    window.location.replace(routes.LOGIN);
  };

  if (token) {
    const paramsTemp = {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: `${token}`,
      },
    };
    try {
      return await fetch(url, paramsTemp);
    } catch (error) {
      if (error instanceof Error) throw new Error(`${error.message}`);
    }
  }

  logout();
};
