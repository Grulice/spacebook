import { useState, useEffect } from "react";

export const DEFAULT_DEBOUNCE_DELAY = 300;

export default function useDebounce<T>(
  value: T,
  delay = DEFAULT_DEBOUNCE_DELAY
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
