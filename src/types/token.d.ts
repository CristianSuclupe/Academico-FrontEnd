export interface ITokenPayload {
  userId: string;
  dni: string;
  role: string;
  sub: string;
  exp: number;
  iat: number;
}
