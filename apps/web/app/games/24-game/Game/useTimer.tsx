import { useState, useEffect, useRef } from "react";

export function useTimer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start Timer when the hook is initialized
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Reset function
  const resetTimer = () => {
    setElapsedTime(0);
  };

  // Format time as MM:SS
  const formatTime = (): string => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return { time: formatTime(), reset: resetTimer };
}
