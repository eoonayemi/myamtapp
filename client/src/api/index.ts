const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

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
    throw new Error(resBody.message);
  }

  return resBody;
};
