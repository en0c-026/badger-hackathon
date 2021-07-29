// All the values of the array are assigned with the passed value
export const arraySetAll = (arr: Array<boolean>, value: boolean): Array<boolean> => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
  return arr;
};

// A function that takes an array of booleans and returns true if all its values are true.
export const allChecked = (checkboxes: Array<boolean>): boolean => checkboxes.every((value) => value === true);

// A function that takes an array of Boolean values, an index, and a Boolean value
// The index value in the array is assigned with the passed value
// returns the modified array.
export const arraySetValue = (arr: Array<boolean>, index: string, value: boolean): Array<boolean> => {
  const id: number = parseInt(index);
  arr[id] = value;
  return arr;
};

export const formatNumber = (number?: number): string => {
  const formattedNumber = number ?? 0;
  return (
    '$' +
    formattedNumber
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  );
};

export const arraySum = (arr: Array<any>): string => {
  const number = arr.reduce((a, b) => a + b.value, 0);
  return formatNumber(number);
};

export const kFormatt = (num: number): string | number => {
  return num > 999 ? num / 1000 + 'k' : num;
};

export const getDate = (timestamp?: number): string => {
  const date = timestamp ? new Date(timestamp) : new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return date.toLocaleString(undefined, options);
};
