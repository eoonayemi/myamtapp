import { customFetch } from ".";
import {
  BVNVerifyFormData,
  NINVerifyFormData,
  NINVerifyWithPhoneFormData,
} from "../types";
import { toJSON } from "../utils";

export const verifyBVN = (formData: BVNVerifyFormData) =>
  customFetch("verify/bvn", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });

export const verifyNIN = (formData: NINVerifyFormData) =>
  customFetch("verify/nin", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });

export const verifyNINWithPhone = (formData: NINVerifyWithPhoneFormData) =>
  customFetch("verify/nin-with-phone", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(formData),
  });
