import { useState, useEffect, startTransition } from 'react';

function useDebounceText(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (value === undefined) return;

    if (value === '') {
      startTransition(() => {
        setDebouncedValue(value);
      });

      return;
    }

    const timer = setTimeout(() => {
      startTransition(() => {
        setDebouncedValue(value);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounceText;
