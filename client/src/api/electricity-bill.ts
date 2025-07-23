import { ElectricityBillFormData } from "../types";
import { customFetch } from ".";
import { toJSON } from "../utils";

export const payElectricityBill = (formData: ElectricityBillFormData) =>
  customFetch("electricity-bill/pay", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });