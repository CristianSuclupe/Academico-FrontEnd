export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginResponse {
  statusCode: number;
  status: string;
  token?: string;
  message?: string;
}
