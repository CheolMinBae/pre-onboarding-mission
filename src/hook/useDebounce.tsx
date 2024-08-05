import { useRef, useCallback } from "react";

const useDebounce = (callback: () => void, delay: number) => {
  const timer = useRef<number | null>(null);

  return useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);
};

export default useDebounce;
