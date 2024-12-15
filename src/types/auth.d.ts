import { IResponse } from "./response";

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginResponse extends IResponse {
  token?: string;
  message?: string;
}

interface IAuthParams {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}
