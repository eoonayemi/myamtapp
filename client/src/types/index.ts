import { z } from "zod";
import { loginFormSchema, registerFormSchema } from "../schemas";

//Form data types
export type RegisterFormData = z.infer<typeof registerFormSchema>;

export type LoginFormData = z.infer<typeof loginFormSchema>;

//Context types
export type AppContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  showToast: (message: string, type: "error" | "success") => void;
};

export type ToastType = {
  message: string;
  type: string;
  open: boolean;
  // setToast?: (toast: ToastType) => void
};

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  phoneNo: string;
  userRole: string;
  emailVerified: boolean;
  walletBalance: number;
  totalFunds: number;
  totalSpent: number;
  referrerId?: number;
  referrer?: User;
  referredUsers: User[];
  joinedAt: Date;
  updatedAt: Date;
}
