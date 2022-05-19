import { http } from "services/HttpClient.service";
import { InputsLoginForm } from "types/InputLoginForm.type"
import { User } from "types/User.type";

export const loginQuery = async (inputs: InputsLoginForm) => {
  try {
    const request = await http.api.post<User>("/admin/login", { data: inputs })
    return request
  } catch (error) {
    throw new Error("login query error")
  }
}