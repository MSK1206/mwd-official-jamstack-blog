import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const UP = () => {
    setCount(count + 1);
  };
  const DOWN = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>カウント：{count}</h1>
      <button name="button" type="button" onClick={UP}>
        +
      </button>
      <button name="button" type="button" onClick={DOWN}>
        -
      </button>
    </>
  );
};

export default Button;
