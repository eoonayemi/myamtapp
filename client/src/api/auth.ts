import { customFetch } from ".";
import { LoginFormData, RegisterFormData } from "../types";
import { toJSON } from "../utils";

export const register = (formData: RegisterFormData) =>
  customFetch("auth/register", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });

export const login = (formData: LoginFormData) =>
  customFetch("auth/login", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });
