// A function that takes an array of Boolean values and a boolean value
// All the values of the array are assigned with the passed value
// return the modified array.
export const arraySetAll = (arr: Array<boolean>, value: boolean): Array<boolean> => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
  return arr;
};

// A function that takes an array of booleans and returns true if all its values are true.
export const allChecked = (checkboxes: Array<boolean>) => checkboxes.every((value) => value === true);

// A function that takes an array of Boolean values, an index, and a Boolean value
// The index value in the array is assigned with the passed value
// returns the modified array.
export const arraySetValue = (arr: Array<boolean>, index: string, value: boolean): Array<boolean> => {
  const id: number = parseInt(index);
  arr[id] = value;
  return arr;
};
