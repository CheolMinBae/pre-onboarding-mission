import { useState, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const useThrottledValue = <T extends {}>(value: T, delay: number): T => {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastUpdate = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            const now = Date.now();
            const remain = now - lastUpdate.current;

            if (remain >= delay) {
                setThrottledValue(value);
                lastUpdate.current = now;
            }
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return throttledValue;
};

export default useThrottledValue;