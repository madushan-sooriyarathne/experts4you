// Clamp a given number between 2 values (min & max)
const clamp = (num: number, min: number, max: number) => {
  const rangeSize = max - min;
  return ((((num - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export { clamp };
