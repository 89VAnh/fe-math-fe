import { useEffect, useState } from "react";

export default function useDebounce(value: any, duration: number = 500) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [value, duration]);
  return debounceValue;
}
