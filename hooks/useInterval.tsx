import { useState, useEffect } from "react";

const useInterval = (callback: Function, ms: number) => {
  const [intervalEnabled, setIntervalEnabled] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<any>(null);

  useEffect(() => {
    if (intervalEnabled) {
      setIntervalId(
        setInterval(() => {
          callback();
        }, ms)
      );
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalEnabled]);

  return { setIntervalEnabled };
};

export default useInterval;
