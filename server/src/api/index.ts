import { vtuAPIs } from "../constants";

const getVtuBaseUrl = () => {
  const vtuAppName = "anwardataco";
  const vtuBaseUrl = vtuAPIs.filter(({ name }) => (name = vtuAppName))[0].url;
  return vtuBaseUrl;
};

const API_BASE_URL = getVtuBaseUrl() || "";

export const customFetch = async (
  url: string,
  method: string,
  options: RequestInit = {}
) => {
  const response = await fetch(`${API_BASE_URL}/api/${url}`, {
    credentials: "include",
    method,
    ...options,
  });

  const resBody = await response.json();

  if (!response.ok) {
    throw new CustomError("Someting went wrong", 500);
  }

  return resBody;
};
