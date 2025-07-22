import { customFetch } from ".";
import { AirtimeFormData } from "../types";
import { toJSON } from "../utils";

export const buyAirtime = (formData: AirtimeFormData) =>
  customFetch("airtime/buy", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });
