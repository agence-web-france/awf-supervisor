import { http } from "services/HttpClient.service";
import { DeployResponse } from "types/DeployResponse.type";

export const deployQuery = async (url: string) => {
  try {
    const request = await http.api.post<DeployResponse>(url)
    return request
  } catch (error) {
    throw new Error("deploy query error")
  }
}