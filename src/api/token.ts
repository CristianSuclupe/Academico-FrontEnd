import { jwtDecode } from "jwt-decode";
import { ENV } from "../utils/constants";
import { ITokenPayload } from "../types/token";

export class Token {
  setToken = (token: string) => {
    localStorage.setItem(ENV.TOKEN, token);
  };

  getToken = () => {
    return localStorage.getItem(ENV.TOKEN);
  };

  removeToken = () => {
    localStorage.removeItem(ENV.TOKEN);
  };

  hasExpired = (token: string) => {
    const tokenDecode: ITokenPayload = jwtDecode(token);
    const expiredData = tokenDecode.exp * 1000;
    const currentData = new Date().getTime();
    if (currentData > expiredData) return true;
    return false;
  };

  getUser = (token: string) => {
    const tokenUser: ITokenPayload = jwtDecode(token);
    return tokenUser;
  };
}
