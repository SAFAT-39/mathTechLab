import { useState, useEffect, useRef, useCallback } from "react";

export function useCountdownTimer(initialSeconds: number) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasStartedRef = useRef<boolean>(false);
  const wasActiveRef = useRef<boolean>(false);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Only start countdown if remainingSeconds > 0
    if (remainingSeconds > 0) {
      hasStartedRef.current = true;
      wasActiveRef.current = true;
      
      intervalRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            wasActiveRef.current = false;
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // If remainingSeconds is 0 and we haven't started, don't mark as finished
      if (!hasStartedRef.current) {
        wasActiveRef.current = false;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [remainingSeconds]);

  // Reset function - memoized to prevent unnecessary re-renders
  const resetTimer = useCallback((seconds: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Reset refs when resetting
    wasActiveRef.current = false;
    hasStartedRef.current = false;
    // Set the new remaining seconds - this will trigger useEffect to start the countdown
    setRemainingSeconds(seconds);
  }, []);

  // Format time as MM:SS
  const formatTime = (): string => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Only consider finished if it was actually running and reached 0
  const isFinished = remainingSeconds === 0 && hasStartedRef.current && !wasActiveRef.current;

  return { time: formatTime(), remainingSeconds, reset: resetTimer, isFinished };
}

