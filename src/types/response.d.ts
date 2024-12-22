export interface IResponse<T = unknown> {
  statusCode: number;
  status: string;
  restult: T;
}
