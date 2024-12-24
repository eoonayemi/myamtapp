export const shortenText = (text: string) => {
  if (text.length <= 300) {
    return text;
  }
  let shortened = text.slice(0, 300);

  // Check if the last character is in the middle of a word
  if (text[300] !== " " && text[300] !== undefined) {
    shortened = shortened.slice(0, shortened.lastIndexOf(" "));
  }
  return shortened + "...";
};

export const toJSON = (data: any) => {
  return JSON.stringify(data, null, 2);
};

/**
 * Adds commas to the appropriate positions in a number.
 * @param num - The number to format.
 * @returns The formatted number as a string.
 */
export const addCommas = (num: number): string => {
  return num.toLocaleString("en-US");
};
