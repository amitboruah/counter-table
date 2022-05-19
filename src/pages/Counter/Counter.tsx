import React, { useState } from "react";
import "./counter.scss";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();
  const handleReset = () => {
    setCounter(0);
  };
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <div className="counter-value">{counter}</div>
      <div className="counter-buttons">
        <button onClick={handleReset}>
          Reset Counter
        </button>
        <button onClick={handleIncrease}>
          Increase Counter
        </button>
      </div>
      <button onClick={() => navigate("/table")}>
        Go to Table page
      </button>
    </div>
  );
};

export default Counter;
