import { useEffect, useState } from "react";

const MIN_INTERVAL_MS = 7000;
const MAX_INTERVAL_MS = 15000;

export function useShootingStarSchedule() {
  const [run, setRun] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const delay = Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS) + MIN_INTERVAL_MS;
      timer = setTimeout(() => {
        setRun((prev) => prev + 1);
        schedule();
      }, delay);
    };

    schedule();
    return () => clearTimeout(timer);
  }, []);

  return run;
}
