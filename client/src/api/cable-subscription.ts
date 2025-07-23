import { customFetch } from ".";
import { CableSubFormData } from "../types";
import { toJSON } from "../utils";

export const payCableSubscription = (formData: CableSubFormData) =>
  customFetch("cable-subscription/pay", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });

export const getCablePlans = () => customFetch("cable-subscription/plans", "GET");
