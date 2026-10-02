export const getFormattedDate = (str: string): string => {
  return new Date(str).toLocaleString("bn-BD", { dateStyle: "full" });
}