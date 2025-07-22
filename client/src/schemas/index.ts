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
  dataId: z.string().min(1, "Data plan is required"),
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
