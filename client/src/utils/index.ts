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
