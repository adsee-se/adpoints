export const indention = (text: string): string => {
  return text.replace(/(。| )/g, (match) => `${match}\n`);
};
