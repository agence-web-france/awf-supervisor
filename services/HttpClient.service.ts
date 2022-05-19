import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

export class HttpClient {
  private static instance: HttpClient
  public config: AxiosRequestConfig = {}
  public api: AxiosInstance

  private constructor() {
    this.config = {
      baseURL: `/api`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      timeout: 10000,
    }
    this.api = axios.create(this.config)
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }
}

export const http = HttpClient.getInstance()
