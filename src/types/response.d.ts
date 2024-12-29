export interface IResponse<T = unknown> {
  statusCode: number;
  status: string;
  result: T;
  message?: string;
}
