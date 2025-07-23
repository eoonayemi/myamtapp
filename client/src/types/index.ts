import { z } from "zod";
import {
  airtimeFormSchema,
  buyDataFormSchema,
  BVNVerifyFormSchema,
  cableSubFormSchema,
  electricityBillFormSchema,
  loginFormSchema,
  ninVerifyFormSchema,
  ninVerifyWithPhoneFormSchema,
  registerFormSchema,
} from "../schemas";

//Form data types
export type RegisterFormData = z.infer<typeof registerFormSchema>;

export type LoginFormData = z.infer<typeof loginFormSchema>;

export type BuyDataFormData = z.infer<typeof buyDataFormSchema>;

export type AirtimeFormData = z.infer<typeof airtimeFormSchema>;

export type ElectricityBillFormData = z.infer<typeof electricityBillFormSchema>;

export type CableSubFormData = z.infer<typeof cableSubFormSchema>;

export type BVNVerifyFormData = z.infer<typeof BVNVerifyFormSchema>;

export type NINVerifyFormData = z.infer<typeof ninVerifyFormSchema>;

export type NINVerifyWithPhoneFormData = z.infer<typeof ninVerifyWithPhoneFormSchema>;

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

export interface CablePlan {
  planId: number;
  decoder: string;
  name: string;
  amount: number;
}

export interface CablePlanProvider {
  id: number;
  name: string;
  cablePlans: CablePlan[];
}

