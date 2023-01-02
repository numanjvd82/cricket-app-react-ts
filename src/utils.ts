export const debounce = (fn: Function, delay: number) => {
  let timer: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export function incrementOver(over: string) {
  // Split the over into two parts: the whole number and the fraction
  const parts = over.split('.');
  const whole = parseInt(parts[0], 10);
  const fraction = parseInt(parts[1], 10);

  // If the fraction is 6, increment the whole number and set the fraction to 0
  if (fraction === 6) {
    return `${whole + 1}.0`;
  } else {
    // Otherwise, increment the fraction by 1
    return `${whole}.${fraction + 1}`;
  }
}
