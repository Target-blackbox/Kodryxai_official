// Global Types — add shared interfaces and types here

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
