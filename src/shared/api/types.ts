export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface ApiClient {
  get: <T>(url: string) => Promise<ApiResponse<T>>;
  post: <T>(url: string, data: unknown) => Promise<ApiResponse<T>>;
}