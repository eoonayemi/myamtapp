import { z } from "zod";
import { loginFormSchema, registerFormSchema } from "../schemas";

//Form data types
export type RegisterFormData = z.infer<typeof registerFormSchema>;

export type LoginFormData = z.infer<typeof loginFormSchema>;

//Context types
export type AppContextType = {
  showToast: (message: string, type: "error" | "success") => void;
};

export type ToastType = {
    message: string,
    type: string
    open: boolean
    // setToast?: (toast: ToastType) => void
}
