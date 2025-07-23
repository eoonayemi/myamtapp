import { z } from "zod";

export const registerFormSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    phoneNo: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    currentPassword: z
      .string()
      .min(6, "Current password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.currentPassword, {
    message: "Password and current password must match",
    path: ["currentPassword"], // This will show the error message under the currentPassword field
  });

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const buyDataFormSchema = z.object({
  network: z.string().min(1, "Network is required"),
  dataId: z.string().min(1, "Select a data plan"),
  dataType: z.string().min(1, "Data type is required"),
  amount: z.number().positive("Amount must be a positive number"),
  phoneNo: z.string().min(10, "Phone number must be at least 10 digits"),
});

export const airtimeFormSchema = z.object({
  network: z.string().min(1, "Network is required"),
  airtimeType: z.enum(["VTU", "Share and Sell"], {
    required_error: "Airtime type is required",
  }),
  phoneNo: z.string().min(10, "Phone number must be at least 10 digits"),
  amount: z.number().positive("Amount must be a positive number"),
  // bypassNumberValidator: z.boolean().optional(),
  amountToPay: z.number().positive("Amount to pay must be a positive number"),
});

export const electricityBillFormSchema = z.object({
  discoName: z.string().min(1, "Disco name is required"),
  meterNumber: z.string().min(1, "Meter number is required"),
  meterType: z.string().min(1, "Meter type is required"),
  amount: z.number().positive("Amount must be a positive number"),
  customerPhone: z
    .string()
    .min(10, "Customer phone must be at least 10 digits"),
});

export const cableSubFormSchema = z.object({
  cableName: z.string().min(1, "Cable name is required"),
  amount: z.number().positive("Amount must be a positive number"),
  smartCardNumber: z
    .string()
    .min(1, "Smart Card number / IUC number is required"),
  planId: z.string().min(1, "Select a cable plan"),
});

export const BVNVerifyFormSchema = z.object({
  slipType: z.string().min(1, "Slip type is required"),
  amount: z.number().positive("Amount must be a positive number"),
  bvnNumber: z.string().min(1, "BVN number is required"),
});

export const ninVerifyFormSchema = z.object({
  slipType: z.string().min(1, "Slip type is required"),
  amount: z.number().positive("Amount must be a positive number"),
  ninNumber: z.string().min(1, "NIN number is required"),
});

export const ninVerifyWithPhoneFormSchema = z.object({
  slipType: z.string().min(1, "Slip type is required"),
  amount: z.number().positive("Amount must be a positive number"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});
