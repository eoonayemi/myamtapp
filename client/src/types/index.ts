import { z } from "zod";
import {
  airtimeFormSchema,
  buyDataFormSchema,
  loginFormSchema,
  registerFormSchema,
} from "../schemas";

//Form data types
export type RegisterFormData = z.infer<typeof registerFormSchema>;

export type LoginFormData = z.infer<typeof loginFormSchema>;

export type BuyDataFormData = z.infer<typeof buyDataFormSchema>;

export type AirtimeFormData = z.infer<typeof airtimeFormSchema>;

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

//Fecthed Data Types
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

export interface DataPlan {
  id: number;
  dataId: number;
  network: string;
  planType: string;
  amount: number;
  size: string;
  validity: string;
  providerId: number;
}

export interface DataProvider {
  id: number;
  name: string;
  dataPlans: DataPlan[];
}
