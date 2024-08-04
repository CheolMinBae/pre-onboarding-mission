import { useEffect, useState } from "react";

const DEBOUNCE_TIMEOUT_SEC = 200;

export default function useDebounce(value: string) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, DEBOUNCE_TIMEOUT_SEC);

    return () => clearTimeout(debounceTimeout);
  }, [value]);

  return debouncedValue;
}
