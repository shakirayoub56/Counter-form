import { useState, useRef, useEffect } from "react";
export default function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return handleStop;
  }, []);

  function handleStart() {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function handleReset() {
    handleStop();
    setCount(0);
  }

  return (
    <div>
      <p>Time:{count}</p>
      <div>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}
