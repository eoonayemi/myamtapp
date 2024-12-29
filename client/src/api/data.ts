import { customFetch } from ".";
import { BuyDataFormData } from "../types";
import { toJSON } from "../utils";

export const buyData = (formData: BuyDataFormData) =>
  customFetch("data/buy", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });

export const getDataPlans = () => customFetch("data/plans", "GET");
