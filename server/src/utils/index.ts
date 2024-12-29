export * from "./password";

export const toJSON = (data: any) => {
  return JSON.stringify(data, null, 2);
};