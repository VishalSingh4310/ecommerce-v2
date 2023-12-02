export const getFirstWord = (inputString: string): string | null => {
  const words = inputString.replace(/\s/g, "");
  return words.length > 0 ? words : null;
};

export const extractFirstNumber = (inputString?: string): number | null => {
  if (inputString) {
    const match = inputString.match(/\d+(\.\d+)?/);
    if (match) {
      return parseFloat(match[0]);
    } else {
      return null;
    }
  } else return null;
};

export const formatNumber = (value: number) => {
  if (value || value === 0) {
    return Math.round(value).toLocaleString();
  } else {
    return "-";
  }
};

export enum COUNT {
  INC = "increment",
  DCR = "decrement",
}
